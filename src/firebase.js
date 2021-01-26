

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDqj2PW2skF4iBFd01gjSulks45QFVIcxQ",
    authDomain: "clone-3ed8f.firebaseapp.com",
    projectId: "clone-3ed8f",
    storageBucket: "clone-3ed8f.appspot.com",
    messagingSenderId: "986151178186",
    appId: "1:986151178186:web:993414bb9c0e9143ee0933"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore() 

const auth = firebase.auth()

export {db , auth}
