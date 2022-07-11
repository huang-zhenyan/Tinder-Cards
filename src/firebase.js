import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAAY3OcVHicXlTRvE2TunwBonU51jU3uJI",
    authDomain: "tinder-clone-1c82f.firebaseapp.com",
    projectId: "tinder-clone-1c82f",
    storageBucket: "tinder-clone-1c82f.appspot.com",
    messagingSenderId: "590955530691",
    appId: "1:590955530691:web:c677996275788cf795d576",
    measurementId: "G-KDWP1EH1R3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const database = firebaseApp.firestore();

  export default database;