"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongoDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
async function connectMongoDb() {
    try {
        await mongoose_1.default.connect(`${process.env.MONGODB_URI}`);
        console.log("Connect is successful");
    }
    catch (error) {
        console.log("Connect is fail!");
    }
}
exports.connectMongoDb = connectMongoDb;
