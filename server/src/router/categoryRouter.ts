import { Router } from "express";
import categoryController from "../controllers/categoryController";

const categoryRouter = Router();

categoryRouter.get("/:id", categoryController.getCategoryById);
categoryRouter.post("/", categoryController.addCategory);
categoryRouter.put("/:id", categoryController.updateCategory);
categoryRouter.delete("/:id", categoryController.deleteCategory);
categoryRouter.get("/", categoryController.getAllCategory);

export default categoryRouter;
