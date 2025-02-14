"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productImageSchema = new mongoose_1.Schema({
    imageUrl: { type: String, required: true },
    productId: { type: mongoose_1.Schema.Types.ObjectId, required: true },
});
const ProductImage = (0, mongoose_1.model)("productImages", productImageSchema);
exports.default = ProductImage;
