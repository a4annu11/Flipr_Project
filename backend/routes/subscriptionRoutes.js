import express from "express";
import {
  subscribe,
  getSubscriptions,
} from "../controllers/subscriptionController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/subscribe", subscribe); // Public
router.get("/", getSubscriptions); // Admin only

export default router;
