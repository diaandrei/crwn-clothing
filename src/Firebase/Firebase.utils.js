import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

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


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
