import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  authDomain: "messenger-b8a72.firebaseapp.com",
  projectId: "messenger-b8a72",
  storageBucket: "messenger-b8a72.appspot.com",
  messagingSenderId: "993011620522",
  appId: "1:993011620522:web:afcd8115d730815f354ed3",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app;

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, provider, auth };
