import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCHTfql7TVbxDkj_5PdzuKhtd1mttZqyA0",
    authDomain: "crud-firebase-1de2b.firebaseapp.com",
    projectId: "crud-firebase-1de2b",
    storageBucket: "crud-firebase-1de2b.appspot.com",
    messagingSenderId: "843270245359",
    appId: "1:843270245359:web:7e99a8582cbbd3324bc41a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export {firebase};