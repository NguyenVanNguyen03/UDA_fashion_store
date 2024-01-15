"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//create user router by typescript and express
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const userRouter = (0, express_1.Router)();
userRouter.get("/", userController_1.default.index);
// userRouter.get("/", getAllUsers);
// userRouter.get("/:id", getUserById);
// userRouter.put("/:id", updateUser);
// userRouter.delete("/:id", deleteUser);
exports.default = userRouter;
