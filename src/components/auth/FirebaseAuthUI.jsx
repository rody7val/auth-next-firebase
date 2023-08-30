'use client'
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';

import {useAuth} from '@/context/auth/UserContext';
import {firebase, auth} from '@/services/auth/firebase'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const firebaseAuthConfig = {
  signInFlow: 'redirect',
  signInSuccessUrl: '/', 
  //tosUrl: '/terms-of-service',
  //privacyPolicyUrl: '/privacy-policy',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

const FirebaseAuth = () => {
  const { authUser, loading } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && authUser)
      router.push('/')
  }, [authUser, loading])

  return (
    <div>
      {loading && 'cargando...'}
      {!loading && <StyledFirebaseAuth
        uiConfig={firebaseAuthConfig}
        firebaseAuth={auth}
      />}
    </div>
  );
};

export default FirebaseAuth;