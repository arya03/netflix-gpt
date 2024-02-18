// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGPTfYrfKYYMQxWMX1tRkLsnDdEpBieEI",
  authDomain: "netflixgpt-a85db.firebaseapp.com",
  projectId: "netflixgpt-a85db",
  storageBucket: "netflixgpt-a85db.appspot.com",
  messagingSenderId: "557488160531",
  appId: "1:557488160531:web:7075cd92b44fe84ef964e6",
  measurementId: "G-2F2MFVNJMP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
