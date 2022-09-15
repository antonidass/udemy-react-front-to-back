// Import the functions you need from the SDKs you need
// const firebase = require("firebase");
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCu913sxes4JFtlgY1mq4uvYSPkO6zkw5c",
//   authDomain: "ticketstutorial.firebaseapp.com",
//   projectId: "ticketstutorial",
//   storageBucket: "ticketstutorial.appspot.com",
//   messagingSenderId: "98113808873",
//   appId: "1:98113808873:web:cbba265b1343bbc1020378",
//   measurementId: "G-NWNMT097SF",
// };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// Initialize Firebase
// const Users = db.collection("Users");
// module.exports = Users;
// module.exports = db;

"use-strict";
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  firebaseConfig: {
    apiKey: "AIzaSyCu913sxes4JFtlgY1mq4uvYSPkO6zkw5c",
    authDomain: "ticketstutorial.firebaseapp.com",
    projectId: "ticketstutorial",
    storageBucket: "ticketstutorial.appspot.com",
    messagingSenderId: "98113808873",
    appId: "1:98113808873:web:cbba265b1343bbc1020378",
    measurementId: "G-NWNMT097SF",
  },
};
