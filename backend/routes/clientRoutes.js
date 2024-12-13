import express from "express";
import {
  createClient,
  getClients,
  deleteClient,
} from "../controllers/clientController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", createClient); // Admin only
router.get("/", getClients); // Public
router.delete("/:id", deleteClient); // Admin only

export default router;
