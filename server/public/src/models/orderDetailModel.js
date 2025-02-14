"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderDetailSchema = new mongoose_1.Schema({
    orderId: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    productDetailId: { type: mongoose_1.Schema.Types.ObjectId, required: true },
});
const OrderDetail = (0, mongoose_1.model)("orderDetails", orderDetailSchema);
exports.default = OrderDetail;
