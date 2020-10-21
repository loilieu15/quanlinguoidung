import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyDP7oecy2ilflIGAxkvMHjTVXUjT7S9rv0",
  authDomain: "manageuser1-55f96.firebaseapp.com",
  databaseURL: "https://manageuser1-55f96.firebaseio.com",
  projectId: "manageuser1-55f96",
  storageBucket: "manageuser1-55f96.appspot.com",
  messagingSenderId: "511146748000",
  appId: "1:511146748000:web:f831f64b39939a952cfb05",
  measurementId: "G-DN2E6PSB9N"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const dataUserFirebase = firebase.database().ref('dataUser/');

export default dataUserFirebase;
