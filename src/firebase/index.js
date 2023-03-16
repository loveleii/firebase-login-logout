// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKq9t4w14vvcJeXXrLXsVCFzbveGwTpog",
  authDomain: "auth-c5cfd.firebaseapp.com",
  projectId: "auth-c5cfd",
  storageBucket: "auth-c5cfd.appspot.com",
  messagingSenderId: "50661371758",
  appId: "1:50661371758:web:a6bad220b23d35b33e1b7f",
  measurementId: "G-PT30M8BZQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };