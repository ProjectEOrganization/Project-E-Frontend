//@ts-nocheck
import React, { useState, useEffect, useContext, createContext, useMemo } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from "./api";
import { firebase } from "./firebase";
import { navigationRef } from "../navigation";

const AuthContext = createContext<ReturnType<typeof useProvideAuth>>();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
    const [user, setUser] = useState<firebase.User>(null);
    const [loading, setLoading] = useState(true);

    const signin = (email, password) => {
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user);
                return response.user;
            });
    };

    const signInAnonymously = () => {
        return firebase
            .auth()
            .signInAnonymously()
            .then(response => {
                return response.user;
            });
    };

    const signup = (email, password, displayName) => {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                setUser(response.user);
                return response.user;
            })
            .then((user) => {
                user.updateProfile({ displayName: displayName })
            });
    };

    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(async () => {
                await AsyncStorage.removeItem('token');
                setUser();
            });
    };

    const sendPasswordResetEmail = email => {
        return firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                return true;
            });
    };

    const confirmPasswordReset = (code, password) => {
        return firebase
            .auth()
            .confirmPasswordReset(code, password)
            .then(() => {
                return true;
            });
    };

    const loggedIn = useMemo(() => {
        if (!user?.isAnonymous && !!user) {
            return true
        }
        return false
    }, [user])

    const init = async (user: firebase.User) => {
        const token = await firebase.auth().currentUser.getIdToken();
        await AsyncStorage.setItem('token', token)
        const res = await api.post('/auth', user);
        const newUser = firebase.auth().currentUser;
        await newUser?.updateProfile({
            displayName: res.data.user.displayName
        })
        setUser(Object.create(newUser));
        setLoading(false)
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                init(user)
            } else {
                setLoading(false);
                setUser();
            }
        });

        // Cleanup subscription on unmount
        return () => {
            unsubscribe();
        }
    }, []);

    // Return the user object and auth methods
    return {
        user,
        loggedIn,
        loading,
        signin,
        signInAnonymously,
        signup,
        signout,
        sendPasswordResetEmail,
        confirmPasswordReset,
        init
    };
}