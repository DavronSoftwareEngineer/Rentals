import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_6fBOJ3QCv68OXQ-A96J3IX_SLn2ZAw4",
    authDomain: "fierbase-reactjs-rentals.firebaseapp.com",
    projectId: "fierbase-reactjs-rentals",
    storageBucket: "fierbase-reactjs-rentals.appspot.com",
    messagingSenderId: "851141048589",
    appId: "1:851141048589:web:61657808efe9ee2b715844"
  };

const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const auth = getAuth(app);

export default app;
export { db, auth }
