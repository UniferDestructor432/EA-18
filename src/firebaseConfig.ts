// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2avEaxAlLyqjmE0KD-Fo-1x25QK7P530",
  authDomain: "inventario-e0a37.firebaseapp.com",
  projectId: "inventario-e0a37",
  storageBucket: "inventario-e0a37.firebasestorage.app",
  messagingSenderId: "465315206166",
  appId: "1:465315206166:web:8b85688c79f626143b5137"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const auth = getAuth(app);
