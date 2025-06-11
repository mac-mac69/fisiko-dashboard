import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBc0MZggkCgkz-lk-B85Cg6ve6QYjI6k0",
  authDomain: "fisiko-app.firebaseapp.com",
  projectId: "fisiko-app",
  storageBucket: "fisiko-app.firebasestorage.app",
  messagingSenderId: "801160176437",
  appId: "1:801160176437:web:0ccad00ef2fe191894a27c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);