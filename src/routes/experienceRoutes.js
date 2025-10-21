import express from "express";
import {
  createExperience,
  getAllExperiences,
  getExperienceById,
  updateExperience,
  deleteExperience,
} from "../controllers/experienceController.js";

const router = express.Router();

router.post("/", createExperience);
router.get("/", getAllExperiences);
router.get("/:id", getExperienceById);
router.put("/:id", updateExperience);
router.delete("/:id", deleteExperience);

export default router;
