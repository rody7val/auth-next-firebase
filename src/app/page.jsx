'use client'
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {useAuth} from '@/context/auth/UserContext';
import {logOut} from '@/services/auth/firebase'

const Admin = () => {
  const {authUser, loading} = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    console.log(authUser)
    if (!loading && !authUser)
      router.push('/auth')
  }, [authUser, loading])

  return (
    <div>
      <h1>Admin page</h1>
      {loading && 'cargando...'}
      {authUser && <>
        <button onClick={() => logOut()}>Salir</button>
        <pre>{JSON.stringify(authUser, null, 2)}</pre>
      </>}

    </div>
  );
}

export default Admin;