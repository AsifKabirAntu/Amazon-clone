import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_wv6RcK8Ak4_KIYzCdz3LPHbkZ8em6eM",
  authDomain: "clone-df890.firebaseapp.com",
  databaseURL: "https://clone-df890.firebaseio.com",
  projectId: "clone-df890",
  storageBucket: "clone-df890.appspot.com",
  messagingSenderId: "82319147837",
  appId: "1:82319147837:web:1d3f02af90009a30f7fb54",
  measurementId: "G-MDSR75EF8E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
