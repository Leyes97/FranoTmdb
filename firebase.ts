// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVpK-ySYiwsjR_JpUMH0-Pow2bstP0pr8",
  authDomain: "frano-tmdb.firebaseapp.com",
  projectId: "frano-tmdb",
  storageBucket: "frano-tmdb.appspot.com",
  messagingSenderId: "22932248296",
  appId: "1:22932248296:web:63ee6c98f12f907da7db5d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }