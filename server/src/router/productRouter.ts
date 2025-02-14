import { Router } from "express";
import productController from "../controllers/productController";

const productRouter = Router();

productRouter.get("//", productController.getProductsByCategory);
productRouter.get("/:id", productController.getProductById);
productRouter.get("/", productController.getAllProducts);
productRouter.post("/", productController.createProducts);
productRouter.delete("/:id", productController.deleteProduct);
productRouter.put("/:id", productController.updateProduct);

export default productRouter;
