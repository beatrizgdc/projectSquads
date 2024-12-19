import { Router } from "express";
import { addMembro } from "../modules/membro/controllers/MembroController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/add", authMiddleware, addMembro);

export default router;
