"use-strict";
const firebase = require("../db");
const firestore = firebase.firestore();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const asyncHandler = require("express-async-handler");
const uuid = require("uuid");

const getTickets = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT

  console.log("req id = ", req.user.id);
  const usersRef = firestore.collection("users");
  const userSnapshot = await usersRef.where("id", "==", req.user.id).get();
  let user;

  userSnapshot.forEach((doc) => {
    // token = doc.data().token;
    user = doc.data();
    // console.log("token = ", token);
    console.log(doc.id, "=>", doc.data());
  });

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const tickets = user.tickets;

  res.status(200).json(tickets);
});

const createTicket = asyncHandler(async (req, res) => {
  const { product, description } = req.body;

  if (!product || !description) {
    res.status(400);
    throw new Error("Please add a product and description");
  }

  const usersRef = firestore.collection("users");
  const userSnapshot = await usersRef.where("id", "==", req.user.id).get();
  let user;
  let docId;

  userSnapshot.forEach((doc) => {
    // token = doc.data().token;
    user = doc.data();
    docId = doc.id;
    // console.log("token = ", token);
    console.log(doc.id, "=>", doc.data());
  });

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const newTicket = {
    id: uuid.v4(),
    product,
    description,
  };

  if (user.tickets) {
    user.tickets = [...user.tickets, newTicket];
  } else {
    user.tickets = [newTicket];
  }

  await firestore
    .collection("users")
    .doc(docId)
    .update({ ...user });

  res.status(201).json("Successfully updated!");
});

const getTicket = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const usersRef = firestore.collection("users");
  const userSnapshot = await usersRef.where("id", "==", req.user.id).get();
  let user;

  userSnapshot.forEach((doc) => {
    user = doc.data();
  });

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = user.tickets.find((tick) => tick.id === req.params.id);

  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }
  return res.status(200).json(ticket);
});

const updateTicket = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const usersRef = firestore.collection("users");
  const userSnapshot = await usersRef.where("id", "==", req.user.id).get();
  let user, docId;

  userSnapshot.forEach((doc) => {
    docId = doc.id;
    user = doc.data();
  });

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  user.tickets = user.tickets.map((ticket) => {
    if (ticket["id"] === req.params.id) {
      return {
        id: req.params.id,
        description: req.body.description,
        product: req.body.product,
      };
    }

    return ticket;
  });

  await firestore
    .collection("users")
    .doc(docId)
    .update({ ...user });

  return res.status(200).json(user.tickets);
});

const deleteTitcket = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const usersRef = firestore.collection("users");
  const userSnapshot = await usersRef.where("id", "==", req.user.id).get();
  let user, docId;

  userSnapshot.forEach((doc) => {
    docId = doc.id;
    user = doc.data();
  });

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  user.tickets = user.tickets.filter((tick) => tick.id !== req.params.id);

  await firestore
    .collection("users")
    .doc(docId)
    .update({ ...user });

  return res.status(200).json(user.tickets);
});

module.exports = {
  getTickets,
  createTicket,
  getTicket,
  deleteTitcket,
  updateTicket,
};
