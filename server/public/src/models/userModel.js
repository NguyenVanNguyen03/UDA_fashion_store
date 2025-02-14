"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    dob: { type: Date, required: true },
    email: { type: String, required: true, unique: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    token: { type: String },
    create_at: { type: mongoose_1.Schema.Types.Date, required: true },
    update_at: { type: mongoose_1.Schema.Types.Date, required: true },
});
const User = (0, mongoose_1.model)("users", userSchema);
exports.default = User;
