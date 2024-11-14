// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from "firebase";
//import "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDtL9tGSUZnuuwLfUFG9iD3JgAU6bw_4Lw",
    authDomain: "jobseeker-f4f0f.firebaseapp.com",
    projectId: "jobseeker-f4f0f",
    storageBucket: "jobseeker-f4f0f.appspot.com",
    messagingSenderId: "630982297155",
    appId: "1:630982297155:web:af9d0f9eafdb08bfe4f6f6",
    measurementId: "G-3SJ7BZQWL5",
  };

//https://w7.pngwing.com/pngs/484/293/png-transparent-elon-musk-thumbnail.png


//const firebaseApp = firebase.initializeApp(firebaseConfig);

//const database = firebaseApp.firestore();


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const database = getFirestore(firebaseApp);


const auth = getAuth(firebaseApp);

export { database, auth };

export default database;