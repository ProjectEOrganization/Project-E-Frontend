//@ts-nocheck
import React, { useState, useEffect, useContext, createContext } from "react";
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
            .then(response => {
                setUser(response.user);
                return response.user;
            });
    };


    const signInAnonymously = () => {
        return firebase
            .auth()
            .signInAnonymously()
            .then(response => {
                setUser(response.user);
                return response.user;
            });
    };

    const signup = (email, password) => {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                setUser(response.user);
                return response.user;
            });
    };

    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(false);
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
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                const res = await api.post('/auth');
                setUser(res.data.user);
            } else {
                setUser();
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
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