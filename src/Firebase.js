import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDt4Fd2lESagIzD7ErKv8o31Jy7zRjMXFg",
    authDomain: "mancity-dda7a.firebaseapp.com",
    databaseURL: "https://mancity-dda7a.firebaseio.com",
    projectId: "mancity-dda7a",
    storageBucket: "mancity-dda7a.appspot.com",
    messagingSenderId: "438712731274"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const FirebaseMatches = firebaseDB.ref('matches');
  const firebasePromotions = firebaseDB.ref('promotions');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseDB,
    FirebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers
}