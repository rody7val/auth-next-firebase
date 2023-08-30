import {useState, useEffect} from 'react'
import {firebase} from './firebase';

const formatAuthUser = (user) => ({
  uid: user.uid,
  providerData: user.providerData,
  emailVerified: user.emailVerified,
  email: user.email || null,
  photoUrl: user.photoUrl || null,
  displayName: user.displayName || null,
  phoneNumber: user.phoneNumber || null,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null)
      setLoading(false)
      return;
    }

    setLoading(true)
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);    
    setLoading(false);
  };

  // listen for firebase state change
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading
  };
}