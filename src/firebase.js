import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUEBVC_q2w-shLaMSCeRcNwmKHaT2wPJ4",
  authDomain: "challenge-228cf.firebaseapp.com",
  projectId: "challenge-228cf",
  storageBucket: "challenge-228cf.appspot.com",
  messagingSenderId: "651264655373",
  appId: "1:651264655373:web:61311503c5563c9719d544",
  measurementId: "G-7KK3GEQ0TP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
