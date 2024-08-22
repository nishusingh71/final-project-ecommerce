// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDehE-19IdcZGLQCi8sdX4F84eQnWqsr1k",
  authDomain: "weekdayecommerce11amjan.firebaseapp.com",
  projectId: "weekdayecommerce11amjan",
  storageBucket: "weekdayecommerce11amjan.appspot.com",
  messagingSenderId: "366702933966",
  appId: "1:366702933966:web:4ac76a56a1a0d303ec1d9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);