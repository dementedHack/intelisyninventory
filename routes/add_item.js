var express = require('express');
var router = express.Router();

// Firebase
var firebase = require("firebase");

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAqVtjnVwoi5HhyWnsW7qLNSwPGYaZ-2TA",
    authDomain: "intelisynassetmanagement.firebaseapp.com",
    databaseURL: "https://intelisynassetmanagement.firebaseio.com",
    projectId: "intelisynassetmanagement",
    storageBucket: "intelisynassetmanagement.appspot.com",
    messagingSenderId: "241325053027"
  };
  firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('User is logged in');
  } else {
    // No user is signed in.
    console.log('User is not logged in')
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('add_item', { title: 'Express' });
});

module.exports = router;
