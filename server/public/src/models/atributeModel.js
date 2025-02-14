"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const attributeSchema = new mongoose_1.Schema({
    attributeName: { type: String, required: true },
    attributeValue: { type: String, required: true },
    productId: { type: mongoose_1.Schema.Types.ObjectId, required: true },
});
const Attribute = (0, mongoose_1.model)("attributies", attributeSchema);
exports.default = Attribute;
