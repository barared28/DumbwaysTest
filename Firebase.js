import firebase from 'firebase';

const Config = {
    apiKey: "AIzaSyAn-X_nWWRiSrkXMEEzVRU0aak8KCufJYI",
    authDomain: "library-dumb.firebaseapp.com",
    databaseURL: "https://library-dumb.firebaseio.com",
    projectId: "library-dumb",
    storageBucket: "library-dumb.appspot.com",
    messagingSenderId: "232811670570",
    appId: "1:232811670570:web:0e95224d075c9f1dc76753",
    measurementId: "G-JBNBXHGTZ5"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);

  export default firebase ;