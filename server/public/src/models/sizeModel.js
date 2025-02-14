"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sizeSchema = new mongoose_1.Schema({
    sizeName: { type: String, require: true },
});
const Size = (0, mongoose_1.model)("sizes", sizeSchema);
exports.default = Size;
