import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();
    const [search, setSearch] = useState()
    const [searchTerm, setSearchTerm] = useState('');
    const [tutorCounter, setTutorCount] = useState({})
    const [userCounter, setUserCounter] = useState({})





    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //update profile
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updatedData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updatedData)
    }
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }


    //handle current User
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    //logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }



    const authInfo = {
        user,
        createUser,
        updateUser,
        setUser,
        logOut,
        login,
        loading,
        setLoading,
        signInWithGoogle,
        setSearch,
        search,
        searchTerm, setSearchTerm,
        tutorCounter, setTutorCount,
        userCounter, setUserCounter,
        







    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;