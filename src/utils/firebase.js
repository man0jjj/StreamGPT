// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; //

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbyw_Sqza7kz2PVkGagm6SnCctn2uE3QM",
  authDomain: "streamgpt-66103.firebaseapp.com",
  projectId: "streamgpt-66103",
  storageBucket: "streamgpt-66103.firebasestorage.app",
  messagingSenderId: "756082504550",
  appId: "1:756082504550:web:791d8d4886ef79e15c0ea7",
  measurementId: "G-M0XNTE9GL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();