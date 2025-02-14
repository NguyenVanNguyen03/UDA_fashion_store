"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const parentCategorySchema = new mongoose_1.Schema({
    parentCategoryName: { type: String, required: true },
});
const ParentCategory = (0, mongoose_1.model)("parentCategories", parentCategorySchema);
exports.default = ParentCategory;
