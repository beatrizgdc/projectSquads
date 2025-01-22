import { Router } from "express";
import {
  register,
  getAll,
  getProjectsBySquad,
} from "../modules/projeto/controllers/ProjetoController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/", authMiddleware, register);
router.get("/", authMiddleware, getAll);
router.get("/squad/:squadId", authMiddleware, getProjectsBySquad);

export default router;

router.post("/", authMiddleware, register);
