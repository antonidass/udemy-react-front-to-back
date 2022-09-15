// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import { setDoc, doc, serverTimestamp } from "firebase/firestore";

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
