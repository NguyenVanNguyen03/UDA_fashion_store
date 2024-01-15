import { Router } from "express";
import AuthController from "../controllers/authController";

const authRouter = Router();

authRouter.post("/login", AuthController.login);
authRouter.post("/logout", AuthController.logout);

export default authRouter;
