"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSChema = new mongoose_1.Schema({
    orderTime: { type: mongoose_1.Schema.Types.Date, required: true },
    priceTotal: { type: Number, required: true },
    userId: { type: mongoose_1.Schema.Types.ObjectId, required: true },
});
const Order = (0, mongoose_1.model)("orders", orderSChema);
exports.default = Order;
