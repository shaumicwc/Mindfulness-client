import React, { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignInUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = ( name, photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName : name,
            photoURL: photo
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signInUser,
        googleSignInUser,
        signOutUser,
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
