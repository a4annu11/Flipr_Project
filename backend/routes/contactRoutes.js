import express from "express";
import {
  submitContact,
  getContacts,
} from "../controllers/contactController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/submit", submitContact);
router.get("/", getContacts);

export default router;
