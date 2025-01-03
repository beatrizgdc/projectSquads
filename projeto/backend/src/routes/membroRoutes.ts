import { Router } from "express";
import { addMembro } from "../modules/membro/controllers/MembroController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/add", authMiddleware, addMembro);

export default router;

/**
 * @swagger
 * /api/membros/add:
 *   post:
 *     summary: Adiciona um novo membro
 *     security:
 *       - BearerAuth: []  # Indica que esta rota precisa de autenticação via JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "João Silva"
 *               cargo:
 *                 type: string
 *                 example: "Desenvolvedor"
 *     responses:
 *       201:
 *         description: Membro adicionado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Membro adicionado com sucesso"
 *       401:
 *         description: Não autorizado
 *       400:
 *         description: Requisição inválida
 */
router.post("/add", authMiddleware, addMembro);
