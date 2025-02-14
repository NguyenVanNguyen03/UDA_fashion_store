"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discountCodeModel_1 = __importDefault(require("../models/discountCodeModel"));
const mongoose_1 = require("mongoose");
class DisCountCodeController {
    async getAllDiscountCode(req, res) {
        try {
            const discountCodes = await discountCodeModel_1.default.find();
            res.status(200).json(discountCodes);
        }
        catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async getDiscountCodeById(req, res) {
        try {
            const discountCodeId = req.params.id;
            if (!(0, mongoose_1.isValidObjectId)(discountCodeId)) {
                return res.status(400).json({ message: "Invalid productId" });
            }
            const discountCode = await discountCodeModel_1.default.findById(discountCodeId);
            if (!discountCode) {
                res.status(404).json({ message: "Discount code not found" });
                return;
            }
            res.status(200).json(discountCode);
        }
        catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async deleteDiscountCode(req, res) {
        try {
            const discountCodeId = req.params.id;
            if (!(0, mongoose_1.isValidObjectId)(discountCodeId)) {
                return res.status(400).json({ message: "Invalid productId" });
            }
            const deletedDiscountCode = await discountCodeModel_1.default.findByIdAndDelete(discountCodeId);
            if (deletedDiscountCode) {
                return res.status(200).json({
                    message: "Discount code deleted successfully!",
                    dicountCode: deletedDiscountCode,
                });
            }
            else {
                return res.status(404).json({ message: "Discount code not found" });
            }
        }
        catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async updateDiscountCode(req, res) {
        try {
            const discountCodeId = req.params.id;
            const { code, discountAmmount, timeStart, timeEnd } = req.body;
            if (!code || !timeStart || !timeEnd) {
                return res.status(400).json("Invalid request data!");
            }
            if (!(0, mongoose_1.isValidObjectId)(discountCodeId)) {
                return res.status(400).json({ message: "Invalid productId" });
            }
            const updatedDiscountCode = await discountCodeModel_1.default.findByIdAndUpdate({
                discountCodeId,
            }, {
                code,
                discountAmmount,
                timeStart,
                timeEnd,
            }, {
                new: true,
            });
            if (updatedDiscountCode) {
                res.status(200).json({
                    message: "discount code updated successfully",
                    newDiscountCode: updatedDiscountCode,
                });
            }
            else {
                res.status(404).json({ message: "Discount code not found" });
            }
        }
        catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async createDiscountCode(req, res) {
        try {
            const { code, discountAmount, timeStart, timeEnd } = req.body;
            if (!code || !timeStart || !timeEnd) {
                return res.status(400).json("Invalid request data!");
            }
            const parsedTimeStart = new Date(timeStart);
            const parsedTimeEnd = new Date(timeEnd);
            if (isNaN(parsedTimeStart.getTime()) || isNaN(parsedTimeEnd.getTime())) {
                return res.status(400).json("Invalid date format for timeStart or timeEnd");
            }
            if (parsedTimeStart >= parsedTimeEnd) {
                return res.status(400).json("timeStart must be before timeEnd");
            }
            const createdDiscountCode = await new discountCodeModel_1.default({
                code,
                discountAmount,
                timeStart: parsedTimeStart,
                timeEnd: parsedTimeEnd,
            }).save();
            res.status(201).json(createdDiscountCode);
        }
        catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
exports.default = new DisCountCodeController();
