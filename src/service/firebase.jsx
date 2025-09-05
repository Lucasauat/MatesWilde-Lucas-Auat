// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoCz7MXu0uK6nCwzxs4svANvO2ynayByg",
  authDomain: "mateswilde.firebaseapp.com",
  projectId: "mateswilde",
  storageBucket: "mateswilde.firebasestorage.app",
  messagingSenderId: "164965481713",
  appId: "1:164965481713:web:ceb32d590832b80c64bd50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)