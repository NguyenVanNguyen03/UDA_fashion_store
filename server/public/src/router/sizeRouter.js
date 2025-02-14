"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sizeController_1 = __importDefault(require("../controllers/sizeController"));
const sizeRouter = (0, express_1.Router)();
sizeRouter.get("/:id", sizeController_1.default.getSizeById);
sizeRouter.post("/", sizeController_1.default.addSize);
sizeRouter.put("/:id", sizeController_1.default.updateSize);
sizeRouter.delete("/:id", sizeController_1.default.deleteSize);
sizeRouter.get("/", sizeController_1.default.getAllSize);
exports.default = sizeRouter;
