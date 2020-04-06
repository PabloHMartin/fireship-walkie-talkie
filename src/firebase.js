import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBz5fId1jc03F8zXY6_nPj8vKrNZpH4U9U",
    authDomain: "fireship-wolkie-talkie.firebaseapp.com",
    databaseURL: "https://fireship-wolkie-talkie.firebaseio.com",
    projectId: "fireship-wolkie-talkie",
    storageBucket: "fireship-wolkie-talkie.appspot.com",
    messagingSenderId: "952684552784",
    appId: "1:952684552784:web:606ef5ad6fad6f7abaa755",
    measurementId: "G-HER17MCFMB"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
