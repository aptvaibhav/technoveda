
import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAtHxhoGAxR_pYU_TbUh4BSP1RjXa_9opo",
    authDomain: "technoveda-66fce.firebaseapp.com",
    databaseURL: "https://technoveda-66fce-default-rtdb.firebaseio.com",
    projectId: "technoveda-66fce",
    storageBucket: "technoveda-66fce.appspot.com",
    messagingSenderId: "557343213802",
    appId: "1:557343213802:web:b6a835498cf0de15a46f93",
    measurementId: "G-5X9D82JC1E"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;