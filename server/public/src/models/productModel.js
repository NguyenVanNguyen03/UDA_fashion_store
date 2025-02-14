"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    productName: { type: String, required: true },
    productDesc: { type: String },
    discountPercent: { type: Number, required: true },
    categoryId: { type: mongoose_1.Schema.Types.ObjectId },
    parentCategoryId: { type: mongoose_1.Schema.Types.ObjectId },
});
const Product = (0, mongoose_1.model)("products", productSchema);
exports.default = Product;
