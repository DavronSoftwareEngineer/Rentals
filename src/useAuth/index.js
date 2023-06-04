import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase';

function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({});

  const SignUp = async (email, password) => {
    setIsLoading(true);
    await createUserWithEmailAndPassword(auth, email, password).then((res) => {
        setUser(res.user);
    }).catch((error) => {
        setError(error.message);
    }).finally(() => {
        setIsLoading(false)
    })
  };
  
  const SignIn = async (email, password) => {
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, email, password).then((res) => {
        setUser(res.user);
    }).catch((error) => {
        setError(error.message);
    }).finally(() => {
        setIsLoading(false)
    })
  };
  
  const LogOut = () => {
    setIsLoading(true)

    signOut(auth)
        .then((res) => {
            setUser({});
            setIsLoading(false)
        }).catch((error) => {
            setError(error.message);
        }).finally(() => {
            setIsLoading(false)
        })
  };
  
  return {SignIn, SignUp, LogOut, user, error, isLoading};
}

export default useAuth;