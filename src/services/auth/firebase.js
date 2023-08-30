import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
//import 'firebase/compat/storage'
//import 'firebase/compat/firestore'

import {firebaseConfig} from '@/services/auth/config'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth()

export function logOut() {
  firebase.auth().signOut()
}

export {firebase};