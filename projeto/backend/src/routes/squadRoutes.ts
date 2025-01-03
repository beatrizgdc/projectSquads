import { Router } from "express";
import { register, getAll } from "../modules/squad/controllers/SquadController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/", authMiddleware, register);
router.get("/", authMiddleware, getAll);

export default router;

/**
 * @swagger
 * /api/squads:
 *   post:
 *     summary: Registra uma nova squad
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
 *                 example: "Squad Alpha"
 *               logo_url:
 *                 type: string
 *                 example: "https://exemplo.com/logo.png"
 *               descricao:
 *                 type: string
 *                 example: "Squad responsável pelo desenvolvimento de sistemas."
 *               data_criacao:
 *                 type: string
 *                 format: date
 *                 example: "2023-01-01"
 *               area_atuacao:
 *                 type: string
 *                 example: "Tecnologia"
 *               status:
 *                 type: string
 *                 example: "Ativa"
 *     responses:
 *       201:
 *         description: Squad registrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Squad registrada com sucesso"
 *       401:
 *         description: Não autorizado
 *       400:
 *         description: Dados inválidos
 */

/**
 * @swagger
 * /api/squads:
 *   get:
 *     summary: Retorna todas as squads
 *     security:
 *       - BearerAuth: []  # Indica que esta rota precisa de autenticação via JWT
 *     responses:
 *       200:
 *         description: Lista de squads
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nome:
 *                     type: string
 *                   descricao:
 *                     type: string
 *                   area_atuacao:
 *                     type: string
 *                   status:
 *                     type: string
 *                   data_criacao:
 *                     type: string
 *                     format: date
 *                   logo_url:
 *                     type: string
 *       401:
 *         description: Não autorizado
 */
router.post("/", authMiddleware, register);
router.get("/", authMiddleware, getAll);
