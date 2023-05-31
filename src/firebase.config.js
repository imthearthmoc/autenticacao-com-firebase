
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC6UOkDR9sT4FNoC6Y8YxrEeIpcuG6ckc8",
  authDomain: "loginfirebase-77a59.firebaseapp.com",
  projectId: "loginfirebase-77a59",
  storageBucket: "loginfirebase-77a59.appspot.com",
  messagingSenderId: "499198818583",
  appId: "1:499198818583:web:c5c988eb4660ce8fbd1f52"
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);