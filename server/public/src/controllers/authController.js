"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../models/userModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class IndexController {
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await userModel_1.default.findOne({ email });
            if (!user) {
                return res.status(401).json({ message: "Incorrect email" });
            }
            const isPasswordVaild = await bcrypt_1.default.compare(password, user.password);
            if (!isPasswordVaild) {
                return res.status(401).json({ message: "Incorrect password" });
            }
            const token = jsonwebtoken_1.default.sign({ userId: user._id, email: user.email }, "auth01", {
                expiresIn: "1h",
            });
            user.token = token;
            await user.save();
            return res.status(200).json({ userId: user._id, token: token });
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
    async logout(req, res) {
        try {
            const token = req.headers.authorization;
            if (!token) {
                return res.status(401).json({ message: "Not is authorized" });
            }
            const decode = jsonwebtoken_1.default.verify(token, "auth01");
            const user = await userModel_1.default.findById(decode.userId);
            if (!user || user.token !== token) {
                return res.status(401).json({ message: "Invalid user" });
            }
            user.token = "";
            await user.save();
            return res.status(200).json({ message: "Logout successful" });
        }
        catch (error) {
            return res.status(401).json({ message: "Invalid token" });
        }
    }
}
exports.default = new IndexController();
