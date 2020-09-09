import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB-DcYyG1KDWDZBlDsgaxXs8dUXzLn6iQ0",
    authDomain: "accountant-1737d.firebaseapp.com",
    databaseURL: "https://accountant-1737d.firebaseio.com",
    projectId: "accountant-1737d",
    storageBucket: "accountant-1737d.appspot.com",
    messagingSenderId: "401763993803",
    appId: "1:401763993803:web:2b65e12918aec5b154b34e",
    measurementId: "G-MDTX67ZR3S"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;