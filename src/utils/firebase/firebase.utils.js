import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrSe7BqY9mbjPKYgdQaB_CSKNT4pzBfUA",
  authDomain: "crwn-clothing-21737.firebaseapp.com",
  projectId: "crwn-clothing-21737",
  storageBucket: "crwn-clothing-21737.appspot.com",
  messagingSenderId: "328599099504",
  appId: "1:328599099504:web:d7a189a3f9fb718075bcb5",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
