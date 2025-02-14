"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const paymentSchema = new mongoose_1.Schema({
    status: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    methodId: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    orderId: { type: mongoose_1.Schema.Types.ObjectId, required: true },
});
const Payment = (0, mongoose_1.model)("payments", paymentSchema);
exports.default = Payment;
