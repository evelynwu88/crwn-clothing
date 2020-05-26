import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBmYEc2LPrqCXNeZovhjPBaJ8xbqX22tdA",
  authDomain: "crwn-db-b1781.firebaseapp.com",
  databaseURL: "https://crwn-db-b1781.firebaseio.com",
  projectId: "crwn-db-b1781",
  storageBucket: "crwn-db-b1781.appspot.com",
  messagingSenderId: "368756236574",
  appId: "1:368756236574:web:220e57a8affd41bfcde90f",
  measurementId: "G-JRZ3D13HP8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
