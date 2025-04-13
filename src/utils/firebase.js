import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV2FyFV2kjghlRdiszH710bIFrdSHDG8c",
  authDomain: "netflix-gpt-b222e.firebaseapp.com",
  projectId: "netflix-gpt-b222e",
  storageBucket: "netflix-gpt-b222e.firebasestorage.app",
  messagingSenderId: "666158260664",
  appId: "1:666158260664:web:b440c18abb9c7667ecaf4d",
  measurementId: "G-FYGQTKENWE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
