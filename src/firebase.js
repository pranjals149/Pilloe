import firebase from 'firebase';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAjmeBZMxd04BDsz4TSbugk0BAVCfHn310",
    authDomain: "pilloe.firebaseapp.com",
    projectId: "pilloe",
    storageBucket: "pilloe.appspot.com",
    messagingSenderId: "331953880964",
    appId: "1:331953880964:web:0c79dac5b87bba1dd327d1",
    measurementId: "G-34PQCEB7BJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export { db, auth, provider, firebaseApp, storage };