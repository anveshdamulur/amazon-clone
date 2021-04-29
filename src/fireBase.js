import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyDMEo34oarAQ-hQOISkX7IeXAlEdLm-vaU",
    authDomain: "app-865f7.firebaseapp.com",
    projectId: "app-865f7",
    storageBucket: "app-865f7.appspot.com",
    messagingSenderId: "960955090477",
    appId: "1:960955090477:web:f999c088dacec18e485aa4",
    measurementId: "G-7P877B2G4G"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };