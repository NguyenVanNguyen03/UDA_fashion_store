"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productDetailSchema = new mongoose_1.Schema({
    stockQuantity: { type: Number, required: true },
    price: { type: Number, required: true },
    productId: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    sizeId: { type: mongoose_1.Schema.Types.ObjectId, required: true },
});
const ProductDetail = (0, mongoose_1.model)("productDetails", productDetailSchema);
exports.default = ProductDetail;
