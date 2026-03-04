import express from "express";
import {
  getVisits,
  getVisitById,
  createVisit,
  updateVisit,
  deleteVisit,
} from "../controllers/visitController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect); // protect all visit routes

router.get("/", getVisits);
router.get("/:id", getVisitById);
router.post("/", createVisit);
router.put("/:id", updateVisit);
router.delete("/:id", deleteVisit);

export default router;