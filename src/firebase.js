
import firebase from "firebase/app";
import "firebase/auth"
export const auth=firebase.initializeApp({
    apiKey: "AIzaSyDih2m459Z9KRbI7eb7VhYHJRmN5q-78qc",
    authDomain: "unichat-8bf57.firebaseapp.com",
    projectId: "unichat-8bf57",
    storageBucket: "unichat-8bf57.appspot.com",
    messagingSenderId: "861855918998",
    appId: "1:861855918998:web:aed06afca94360179b4bb7"
  }).auth();