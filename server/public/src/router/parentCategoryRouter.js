"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const parentCategoryController_1 = __importDefault(require("../controllers/parentCategoryController"));
const parentCategoryRouter = (0, express_1.Router)();
parentCategoryRouter.get("/:id", parentCategoryController_1.default.getParentCategoryById);
parentCategoryRouter.post("/", parentCategoryController_1.default.addParentCategory);
parentCategoryRouter.put("/:id", parentCategoryController_1.default.updateParentCategory);
parentCategoryRouter.delete("/:id", parentCategoryController_1.default.deleteParentCategory);
parentCategoryRouter.get("/", parentCategoryController_1.default.getAllParentCategory);
exports.default = parentCategoryRouter;
