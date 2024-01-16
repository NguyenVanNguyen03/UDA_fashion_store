import { Router } from "express";
import userController from "../controllers/userController";

const userRouter = Router();

userRouter.get("/:id", userController.getUserById);
userRouter.post("/", userController.addUser);
userRouter.put("/:id",userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.get("/", userController.getAllUsers);

export default userRouter;
