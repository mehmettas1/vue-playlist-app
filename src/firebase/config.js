
import firebase from "firebase/app ";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB3VR_OlU36XkxBO5vHS64sMt29F61FHnk",
    authDomain: "playlist-vue-6006c.firebaseapp.com",
    projectId: "playlist-vue-6006c",
    storageBucket: "playlist-vue-6006c.appspot.com",
    messagingSenderId: "468710570695",
    appId: "1:468710570695:web:df11155c373d57d5d3dce2"
  };

  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore();
  
  const projectAuth = firebase.auth();

  const timestamp = firebase.firestore.Fieldvalue.serverTimestamp

  export{projectFirestore,projectAuth,timestamp }