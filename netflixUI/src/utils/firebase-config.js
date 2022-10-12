import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALRJ_HFnD8CuHsrpIY_2hYTv2ZTVoBb5M",
  authDomain: "netflix-clone-4430b.firebaseapp.com",
  projectId: "netflix-clone-4430b",
  storageBucket: "netflix-clone-4430b.appspot.com",
  messagingSenderId: "1088264958614",
  appId: "1:1088264958614:web:572336c510fa0bcd3e48b7"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);