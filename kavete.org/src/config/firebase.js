// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaW5KcSMIZRd-x1ENtCs7YXt5ExEQda8I",
  authDomain: "kaveteorg-4ffc3.firebaseapp.com",
  projectId: "kaveteorg-4ffc3",
  storageBucket: "kaveteorg-4ffc3.appspot.com",
  messagingSenderId: "179119614250",
  appId: "1:179119614250:web:de32fe0efbf6c8b814d653",
  measurementId: "G-EES489235J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();