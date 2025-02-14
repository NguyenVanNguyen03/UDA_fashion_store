"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const discountCodeSchema = new mongoose_1.Schema({
    code: { type: String, required: true },
    discountAmmount: { type: Number, required: true, default: 0 },
    timeStart: { type: mongoose_1.Schema.Types.Date, required: true },
    timeEnd: { type: mongoose_1.Schema.Types.Date, required: true },
});
const DiscountCode = (0, mongoose_1.model)("discountCodes", discountCodeSchema);
exports.default = DiscountCode;
