// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAxjEjXjb3OgIOfwRV8qdAK6jd71LoNWfo',
  authDomain: 'firestorm-auth-first.firebaseapp.com',
  projectId: 'firestorm-auth-first',
  storageBucket: 'firestorm-auth-first.appspot.com',
  messagingSenderId: '1022485684752',
  appId: '1:1022485684752:web:5d094ea80587a47f0d2095',
  measurementId: 'G-W10SD9QP0L',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
