import firebase from 'firebase';


  // Initialize Firebase
const config = {
    apiKey: "AIzaSyDT7HE_Ry5ocsUR7gxkYRC7nLThFSOXYio",
    authDomain: "closet-1b41f.firebaseapp.com",
    databaseURL: "https://closet-1b41f.firebaseio.com",
    projectId: "closet-1b41f",
    storageBucket: "closet-1b41f.appspot.com",
    messagingSenderId: "347259715796"
  };
  firebase.initializeApp(config);


export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.database();
export const storage = firebase.storage();
export const auth = firebase.auth();