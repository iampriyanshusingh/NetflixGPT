// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKP8v1YZzUA-I4hvPTsyKMFma39Ii7_sE",
  authDomain: "netflix-gpt-72408.firebaseapp.com",
  projectId: "netflix-gpt-72408",
  storageBucket: "netflix-gpt-72408.firebasestorage.app",
  messagingSenderId: "876883011303",
  appId: "1:876883011303:web:4dbe2b737ef76586646442",
  measurementId: "G-SJ136WCK4D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//
export const auth = getAuth();
