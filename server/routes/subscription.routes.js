const express = require("express");
const router = express.Router();
const {
  createSubscription,
  getSubscriptions,
} = require("../controllers/subscription.controller");
const authMiddleware = require("../middleware/auth"); 
router.post("/", authMiddleware, createSubscription);
router.get("/", authMiddleware, getSubscriptions);
module.exports = router;
