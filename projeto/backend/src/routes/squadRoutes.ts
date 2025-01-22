import { Router } from "express";
import { register, getAll } from "../modules/squad/controllers/SquadController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/", authMiddleware, register);
router.get("/", authMiddleware, getAll);

export default router;

router.post("/", authMiddleware, register);
router.get("/", authMiddleware, getAll);
