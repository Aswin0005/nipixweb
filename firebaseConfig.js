// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyACzr9-kQJhGtrIcSOo1VKbxM6pZmQOV-Q',
  authDomain: 'nipixtest.firebaseapp.com',
  projectId: 'nipixtest',
  storageBucket: 'nipixtest.firebasestorage.app',
  messagingSenderId: '611212317511',
  appId: '1:611212317511:web:00b753011dc8f3f87df262',
  measurementId: 'G-N8ZFDMGP2B',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
