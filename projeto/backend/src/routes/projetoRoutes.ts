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

/**
 * @swagger
 * /api/projetos:
 *   post:
 *     summary: Registra um novo projeto
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Projeto X"
 *               descricao:
 *                 type: string
 *                 example: "Projeto de integração"
 *     responses:
 *       201:
 *         description: Projeto registrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Projeto registrado com sucesso"
 *       401:
 *         description: Não autorizado
 */
router.post("/", authMiddleware, register);
