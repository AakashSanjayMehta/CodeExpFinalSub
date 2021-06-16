
var firebaseConfig = {
    apiKey: "AIzaSyBydHWcSolR_erYV3SMjoKZ13xgadArLBY",
    authDomain: "testtaker-1623668563157.firebaseapp.com",
    databaseURL: "https://testtaker-1623668563157-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "testtaker-1623668563157",
    storageBucket: "testtaker-1623668563157.appspot.com",
    messagingSenderId: "278652244495",
    appId: "1:278652244495:web:bdfab1712e2ebcd5b2497a",
    measurementId: "G-MC43KFXRG2"
  };

  const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();