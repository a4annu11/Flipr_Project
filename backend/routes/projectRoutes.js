import express from "express";
import {
  createProject,
  getProjects,
  deleteProject,
} from "../controllers/projectController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", createProject); // Admin only
router.get("/", getProjects); // Public
router.delete("/:id", deleteProject);

export default router;
