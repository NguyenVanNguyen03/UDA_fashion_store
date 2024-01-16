import { Router } from "express";
import discountCodeController from "../controllers/discountCodeController";

const discountCodeRouter = Router();

discountCodeRouter.get("/:id", discountCodeController.getDiscountCodeById);
discountCodeRouter.delete("/:id", discountCodeController.deleteDiscountCode);
discountCodeRouter.post("/", discountCodeController.createDiscountCode);
discountCodeRouter.put("/:id", discountCodeController.updateDiscountCode);
discountCodeRouter.get("/", discountCodeController.getAllDiscountCode);

export default discountCodeRouter;
