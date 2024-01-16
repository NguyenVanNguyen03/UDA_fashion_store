//create user router by typescript and express
import { Router } from "express";
import parentCategoryController from "../controllers/parentCategoryController";

const parentCategoryRouter = Router();

parentCategoryRouter.get("/:id", parentCategoryController.getParentCategoryById);
parentCategoryRouter.post("/", parentCategoryController.addParentCategory);
parentCategoryRouter.put("/:id",parentCategoryController.updateParentCategory);
parentCategoryRouter.delete("/:id", parentCategoryController.deleteParentCategory);
parentCategoryRouter.get("/", parentCategoryController.getAllParentCategory);



export default parentCategoryRouter;
