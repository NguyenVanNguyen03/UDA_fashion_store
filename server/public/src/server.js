"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database");
const dotenv = __importStar(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./router");
const app = (0, express_1.default)();
dotenv.config();
(0, database_1.connectMongoDb)();
const port = parseInt(process.env.PORT || "3000", 10);
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(`/${process.env.API_VERSION}/users`, router_1.userRouter);
app.use(`/${process.env.API_VERSION}/auth`, router_1.authRouter);
app.use(`/${process.env.API_VERSION}/products`, router_1.productRouter);
app.use(`/${process.env.API_VERSION}/discountCode`, router_1.discountCodeRouter);
app.use(`/${process.env.API_VERSION}/parentCategories`, router_1.parentCategoryRouter);
app.use(`/${process.env.API_VERSION}/categories`, router_1.categoryRouter);
app.use(`/${process.env.API_VERSION}/sizes`, router_1.sizeRouter);
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200); // Preflight Request successful, stop processing
    }
    else {
        next();
    }
});
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
exports.default = app;
