import { Router } from "express";
import {
  getDevocionales,
  createDevocionales,
  updateDevocionales,
  deleteDevocionales,
  getDevocional,
  deleteDevocional,
} from "../controllers/devocionales.controller.js";

const router = Router();

router.get("/devocionales", getDevocionales);

router.get("/devocionales/:id", getDevocional);

router.post("/devocionales", createDevocionales);

//update parcial
router.patch("/devocionales", updateDevocionales);

router.delete("/devocionales", deleteDevocionales);

router.delete("/devocionales/:id", deleteDevocional);

export default router;
