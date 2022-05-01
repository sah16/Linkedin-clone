import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBq3TlvcJfdqcq_qv1vWdxNvx0ZAdLPwjc",
    authDomain: "linkedin-clone-bd8f1.firebaseapp.com",
    projectId: "linkedin-clone-bd8f1",
    storageBucket: "linkedin-clone-bd8f1.appspot.com",
    messagingSenderId: "1000216390605",
    appId: "1:1000216390605:web:987ce304dc43415348f284"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};