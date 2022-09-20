// @desc Register new user
// @route /api/users
// @access Public
"use-strict";
const firebase = require("../db");
const firestore = firebase.firestore();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    res.status(400);
    throw new Error("please include all fields");
  }

  const userCredential = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = userCredential.user;
  // Create user
  const token = generateToken(user.uid);
  await firestore.collection("users").doc().set({
    id: user.uid,
    name: name,
    email: email,
    password: hashedPassword,
    isAdmin: false,
    token: token,
  });

  res.status(201).json({ id: user.uid, name, email, token });
});

// @desc Login new user
// @route /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  let user;
  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    user = userCredential.user;
  } catch (error) {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  const usersRef = firestore.collection("users");

  const userSnapshot = await usersRef.where("email", "==", user.email).get();
  let userName;
  userSnapshot.forEach((doc) => {
    token = doc.data().token;
    console.log("token = ", token);
    console.log(doc.id, "=>", doc.data());
    userName = doc.data()["name"];
  });

  res.status(200).json({
    id: user.uid,
    name: userName,
    email: user.email,
    token,
  });
});

// @desc Get info about me
// @route /api/users/me
// @access Public
const getMe = asyncHandler(async (req, res) => {
  console.log(req.user.id, req.user.email, req.user.name);
  const user = {
    id: req.user.id,
    email: req.user.email,
    name: req.user.name,
  };
  res.status(200).json(user);
});

// Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
