const express = require("express");
const router = express.Router();
const {
  getTickets,
  createTicket,
  getTicket,
  deleteTitcket,
  updateTicket,
} = require("../controllers/ticketController");

const { protect } = require("../middleware/authMeddleware");

router.route("/").get(protect, getTickets).post(protect, createTicket);
router.route("/:id").get(protect, getTicket);
router.route("/:id").delete(protect, deleteTitcket);
router.route("/:id").put(protect, updateTicket);

module.exports = router;
