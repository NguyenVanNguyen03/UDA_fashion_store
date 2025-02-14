"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const roleSchema = new mongoose_1.Schema({
    roleName: { type: String, required: true },
    userId: { type: mongoose_1.Schema.Types.ObjectId, required: true },
});
const Role = (0, mongoose_1.model)("roles", roleSchema);
exports.default = Role;
