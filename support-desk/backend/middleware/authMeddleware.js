const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const firebase = require("../db");
const firestore = firebase.firestore();

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Get user from token
      console.log("decoded = ", decoded);
      const usersRef = firestore.collection("users");
      const userSnapshot = await usersRef.get();
      userSnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        req.user = doc.data();
      });

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized");
  }
});

module.exports = { protect };
