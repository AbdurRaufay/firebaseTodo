//Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";

import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxKnGeLgxWaEx2AS5cURp5jmY_y-wSLGY",
  authDomain: "fir-todo-9f36d.firebaseapp.com",
  projectId: "fir-todo-9f36d",
  storageBucket: "fir-todo-9f36d.appspot.com",
  messagingSenderId: "736198387180",
  appId: "1:736198387180:web:4112e9d5ed404accb58cc9",
  measurementId: "G-KGGC249XDB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fs = getFirestore(app);
