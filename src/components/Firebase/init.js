import * as firebase from "firebase/app";
import 'firebase/auth'
import "firebase/firestore";

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "chattybot-87c51.firebaseapp.com",
    databaseURL: "https://chattybot-87c51.firebaseio.com",
    projectId: "chattybot-87c51",
    storageBucket: "chattybot-87c51.appspot.com",
    messagingSenderId: "157854786433",
    appId: "1:157854786433:web:d54ddfa51abafd3aa07e80"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const auth = firebaseApp.auth()
  export const firestore = firebaseApp.firestore()
  // Initialize Firebase


  export default firebaseApp