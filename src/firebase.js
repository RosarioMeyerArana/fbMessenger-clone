import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDEloeB7fk16QoLuHW2v8BUS9xWgfpGzcU",
  authDomain: "fbmessenger-5e5ce.firebaseapp.com",
  projectId: "fbmessenger-5e5ce",
  storageBucket: "fbmessenger-5e5ce.appspot.com",
  messagingSenderId: "649872533437",
  appId: "1:649872533437:web:24a179c59ce1a0221d14d4",
  measurementId: "G-6R5Y0JX4GZ"
});

const db = firebaseApp.firestore()

export default db 