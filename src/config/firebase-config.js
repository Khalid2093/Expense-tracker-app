// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFuyKI-lThPhMPqFsjPb723xHckrMtxbg",
  authDomain: "wd-mini-project.firebaseapp.com",
  projectId: "wd-mini-project",
  storageBucket: "wd-mini-project.appspot.com",
  messagingSenderId: "525844496233",
  appId: "1:525844496233:web:5415e640a88bf0fd2587f8",
  measurementId: "G-1J9H3J4L3Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
