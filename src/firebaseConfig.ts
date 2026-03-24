// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAC5Nl1iz4RYl38nfmhAU0d_IvhxgRZNY",
  authDomain: "inventariocedi-2104f.firebaseapp.com",
  projectId: "inventariocedi-2104f",
  storageBucket: "inventariocedi-2104f.firebasestorage.app",
  messagingSenderId: "373946613788",
  appId: "1:373946613788:web:442123f5e78689c38f1fd9"
};


// Initialize Firebase
const app =  initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);