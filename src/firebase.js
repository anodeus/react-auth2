import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNISWc8BCzpAigFknrlu8bVNbvX1jjeWM",
  authDomain: "react-authentication-6063d.firebaseapp.com",
  projectId: "react-authentication-6063d",
  storageBucket: "react-authentication-6063d.appspot.com",
  messagingSenderId: "487308424935",
  appId: "1:487308424935:web:94ae4b5c7ba6636b8c9442",
  measurementId: "G-50VHSEFZRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
