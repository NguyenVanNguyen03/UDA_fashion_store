//create user router by typescript and express
import { Router } from "express";
import userController from "../controllers/userController";

const userRouter = Router();

userRouter.get("/", userController.index);
// userRouter.get("/", getAllUsers);
// userRouter.get("/:id", getUserById);
// userRouter.put("/:id", updateUser);
// userRouter.delete("/:id", deleteUser);

export default userRouter;
