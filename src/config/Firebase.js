// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy_s2f4kY4IDwcaGeVdYUq0jBtyEPC6BI",
  authDomain: "aulafirebase-61bc2.firebaseapp.com",
  projectId: "aulafirebase-61bc2",
  storageBucket: "aulafirebase-61bc2.appspot.com",
  messagingSenderId: "846618501399",
  appId: "1:846618501399:web:4d6d17a8bf57386a27d752"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth};