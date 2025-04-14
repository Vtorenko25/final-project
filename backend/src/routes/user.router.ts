import { Router } from "express";

import { userController } from "../controllers/user.controler";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", authMiddleware.checkAccessToken, userController.getAllUsers);

export const userRouter = router;
