// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAVAWAMXUjXW5MbzuTSRcG1YNlxgAZqi3w',
  authDomain: 'uber-next-clone-33335.firebaseapp.com',
  projectId: 'uber-next-clone-33335',
  storageBucket: 'uber-next-clone-33335.appspot.com',
  messagingSenderId: '276967996370',
  appId: '1:276967996370:web:27fa3f2b0377baee43a60b',
  measurementId: 'G-K2Y8WP0DJC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
