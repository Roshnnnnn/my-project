import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBst5nSOmJFdGiw4s8Iv_Re0_oeIAPx1Pw",
  authDomain: "react-intermediate.firebaseapp.com",
  projectId: "react-intermediate",
  storageBucket: "react-intermediate.appspot.com",
  messagingSenderId: "932834617241",
  appId: "1:932834617241:web:8fc285bfb22dbfaa67d508",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fireDB = getFirestore(app);

export default app;
