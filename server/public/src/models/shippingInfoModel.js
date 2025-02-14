"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const shippingInfoSchema = new mongoose_1.Schema({
    shippingCost: { type: Number, required: true },
    phoneNumber: { type: String, required: true },
    shippingAddress: { type: String, required: true },
    shippingMethod: { type: String, required: true },
    shippingStatus: { type: String, required: true },
    recipientName: { type: String, required: true },
    orderId: { type: mongoose_1.Schema.Types.ObjectId, required: true },
});
const ShippingInfo = (0, mongoose_1.model)("shippingInfos", shippingInfoSchema);
exports.default = ShippingInfo;
