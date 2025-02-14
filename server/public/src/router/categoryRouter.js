"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = __importDefault(require("../controllers/categoryController"));
const categoryRouter = (0, express_1.Router)();
categoryRouter.get("/:id", categoryController_1.default.getCategoryById);
categoryRouter.post("/", categoryController_1.default.addCategory);
categoryRouter.put("/:id", categoryController_1.default.updateCategory);
categoryRouter.delete("/:id", categoryController_1.default.deleteCategory);
categoryRouter.get("/", categoryController_1.default.getAllCategory);
exports.default = categoryRouter;
