import { Router } from "express";
import sizeController from "../controllers/sizeController";

const sizeRouter = Router();

sizeRouter.get("/:id", sizeController.getSizeById);
sizeRouter.post("/", sizeController.addSize);
sizeRouter.put("/:id", sizeController.updateSize);
sizeRouter.delete("/:id", sizeController.deleteSize);
sizeRouter.get("/", sizeController.getAllSize);

export default sizeRouter;
