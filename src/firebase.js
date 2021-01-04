import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiULDoCyAzG47WE_AfSaXDSnvVY_xXbUY",
  authDomain: "cloneamzon.firebaseapp.com",
  databaseURL: "https://cloneamzon.firebaseio.com",
  projectId: "cloneamzon",
  storageBucket: "cloneamzon.appspot.com",
  messagingSenderId: "571612053616",
  appId: "1:571612053616:web:d9ea0d0054211baeb9b4b5",
  measurementId: "G-F9DQ05WNXQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };