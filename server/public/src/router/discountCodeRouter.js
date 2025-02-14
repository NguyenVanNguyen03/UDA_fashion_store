"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const discountCodeController_1 = __importDefault(require("../controllers/discountCodeController"));
const discountCodeRouter = (0, express_1.Router)();
discountCodeRouter.get("/:id", discountCodeController_1.default.getDiscountCodeById);
discountCodeRouter.delete("/:id", discountCodeController_1.default.deleteDiscountCode);
discountCodeRouter.post("/", discountCodeController_1.default.createDiscountCode);
discountCodeRouter.put("/:id", discountCodeController_1.default.updateDiscountCode);
discountCodeRouter.get("/", discountCodeController_1.default.getAllDiscountCode);
exports.default = discountCodeRouter;
