import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcmmAiXvKwiorKwu9wxUfrH88Hc3DDq48",
  authDomain: "e-therapy-8f44c.firebaseapp.com",
  projectId: "e-therapy-8f44c",
  storageBucket: "e-therapy-8f44c.appspot.com",
  messagingSenderId: "1002764493823",
  appId: "1:1002764493823:web:397bf39c88c3472a63bdca",
  measurementId: "G-68RJVK93MJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
export { app, auth };
