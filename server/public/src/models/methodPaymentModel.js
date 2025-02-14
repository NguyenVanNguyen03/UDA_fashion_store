"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const methodPaymentSchema = new mongoose_1.Schema({
    methodName: { type: String, required: true },
});
const MethodPayment = (0, mongoose_1.model)("methodPayments", methodPaymentSchema);
exports.default = MethodPayment;
