import { Router } from "express";
import * as UserController from "../modules/user/controllers/UserController";

const router = Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);

export default router;

router.post("/register", UserController.register);
router.post("/login", UserController.login);
