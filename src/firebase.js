/* eslint-disable no-unused-vars */
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB9hLiji_zoooQ-JYAusmdzuqSo6tgsKfk",
    authDomain: "photo-gellery-9fe65.firebaseapp.com",
    databaseURL: "https://photo-gellery-9fe65.firebaseio.com",
    projectId: "photo-gellery-9fe65",
    storageBucket: "photo-gellery-9fe65.appspot.com",
    messagingSenderId: "721568466248",
    appId: "1:721568466248:web:fdba2597409ce3bbecdf7d",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();

export { storage, firestore };
