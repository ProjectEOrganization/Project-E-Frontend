//@ts-nocheck
import React, { useState, useEffect, useContext, createContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from "./api";
import { firebase } from "./firebase";

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
                try {
                    await AsyncStorage.removeItem('token');
                } catch (error) {
                    console.log(error);
                }
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

    // Subscribe to user on mount
    // Because this sets state in the callback it will cause any ...
    // ... component that utilizes this hook to re-render with the ...
    // ... latest auth object.

    const init = async (user) => {
        const token = await user.getIdToken();
        await AsyncStorage.setItem('token', token)
        const res = await api.post('/auth', user);
        const newUser: firebase.User = {
            ...user,
            ...res.data.user,
            getIdToken: user.getIdToken
        }
        setUser(newUser);
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                init(user)
            } else {
                const user = await signInAnonymously();
                init(user)
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
        signin,
        signInAnonymously,
        signup,
        signout,
        sendPasswordResetEmail,
        confirmPasswordReset
    };
}