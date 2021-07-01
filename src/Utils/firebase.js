import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore';
import 'firebase/storage'

 const Config = {
    apiKey: "AIzaSyBcyumbv128GbLqZKIKmVf83k5Cge_T4Ss",
    authDomain: "commerce1-586cd.firebaseapp.com",
    databaseURL: "https://commerce1-586cd.firebaseio.com",
    projectId: "commerce1-586cd",
    storageBucket: "commerce1-586cd.appspot.com",
    messagingSenderId: "490447760574",
    appId: "1:490447760574:web:c4413148bc341585e642ef",
    measurementId: "G-9MSWZMRCDC"
  };

  firebase.initializeApp(Config);
  firebase.firestore().settings({});

  export const { auth } = firebase;
  export const storage = firebase.storage();
  export const provider = new firebase.auth.GoogleAuthProvider();


  export default firebase;