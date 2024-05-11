import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAIfZGSdEZR_Id9sDM1zTOabbcQdiWZDS0",
  authDomain: "react-messaging-app-894b6.firebaseapp.com",
  projectId: "react-messaging-app-894b6",
  storageBucket: "react-messaging-app-894b6.appspot.com",
  messagingSenderId: "588103282425",
  appId: "1:588103282425:web:62e3581d33aced0111fc28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)