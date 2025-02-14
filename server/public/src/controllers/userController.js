"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../models/userModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserController {
    async addUser(req, res) {
        try {
            const { firstName, lastName, gender, dob, email, password, phoneNumber, address } = req.body;
            const existingUser = await userModel_1.default.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ message: "User already exists!" });
            }
            const saltRounds = 10;
            const hashedPassword = await bcrypt_1.default.hash(password, saltRounds);
            const currentDate = new Date();
            const newUser = new userModel_1.default({
                firstName,
                lastName,
                gender,
                dob,
                email,
                password: hashedPassword,
                phoneNumber,
                address,
                create_at: currentDate,
                update_at: currentDate,
            });
            await newUser.save();
            res.status(201).json({ message: "Create Success!" });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async getAllUsers(req, res) {
        try {
            const user = await userModel_1.default.find();
            res.status(200).json(user);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error !" });
        }
    }
    async getUserById(req, res) {
        try {
            const id = req.params.id;
            const user = await userModel_1.default.findOne({ _id: id });
            if (!user) {
                return res.status(404).json({ message: "User does not exist !" });
            }
            res.status(200).json({ user });
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
    async deleteUser(req, res) {
        try {
            const id = req.params.id;
            const user = await userModel_1.default.findOneAndDelete({ _id: id });
            if (!user) {
                return res.status(404).json({ message: "User does not exist !" });
            }
            res.status(200).json("Delete Success !");
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error !" });
        }
    }
    async updateUser(req, res) {
        try {
            const id = req.params.id;
            const { firstName, lastName, gender, dob, email, password, phoneNumber, address } = req.body;
            const currentDate = new Date();
            const existingUser = await userModel_1.default.findById(id);
            if (!existingUser) {
                return res.status(404).json({ message: "User does not exist!" });
            }
            let hashedPassword = existingUser.password;
            if (password) {
                const saltRounds = 10;
                hashedPassword = await bcrypt_1.default.hash(password, saltRounds);
            }
            const updateData = {
                firstName,
                lastName,
                gender,
                dob,
                email,
                password: hashedPassword,
                phoneNumber,
                address,
                update_at: currentDate,
            };
            const updatedUser = await userModel_1.default.findByIdAndUpdate(id, updateData, { new: true });
            res.status(200).json(updatedUser);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error!" });
        }
    }
}
exports.default = new UserController();
