import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB0cCjElYSEfUabWTHNikKA8_q70Hgn3-I",
  authDomain: "crown-db-6d375.firebaseapp.com",
  databaseURL: "https://crown-db-6d375.firebaseio.com",
  projectId: "crown-db-6d375",
  storageBucket: "crown-db-6d375.appspot.com",
  messagingSenderId: "825862677141",
  appId: "1:825862677141:web:2bcc0ebcf61765ac48f19c",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
