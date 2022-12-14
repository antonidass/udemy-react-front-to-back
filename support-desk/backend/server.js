"use strict";

const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const colors = require("colors");
const cors = require("cors");
const config = require("./config");


const { errorHandler } = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome suka",
  });
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("kek");
});
