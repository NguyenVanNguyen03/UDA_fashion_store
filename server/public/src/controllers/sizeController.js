"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sizeModel_1 = __importDefault(require("../models/sizeModel"));
const productDetailModel_1 = __importDefault(require("../models/productDetailModel"));
class SizeController {
    async addSize(req, res) {
        try {
            const { sizeName } = req.body;
            const existingSize = await sizeModel_1.default.findOne({
                sizeName,
            });
            if (existingSize) {
                return res.status(409).json({ message: "Size already exists !" });
            }
            const newSize = await new sizeModel_1.default({ sizeName });
            await newSize.save();
            res.status(201).json({ message: "Create Success !" });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async getAllSize(req, res) {
        try {
            const Sizes = await sizeModel_1.default.find();
            res.status(200).json({ Sizes });
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error !" });
        }
    }
    async getSizeById(req, res) {
        try {
            const id = req.params.id;
            const name = await sizeModel_1.default.findById({ _id: id });
            if (!name) {
                return res.status(404).json({ message: "Size does not exist !" });
            }
            res.status(200).json(name);
        }
        catch (error) {
            res.status(500).json({ error });
        }
    }
    async updateSize(req, res) {
        try {
            const SizeId = req.params.id;
            const { sizeName } = req.body;
            const updateData = {
                sizeName,
            };
            const updatedSize = await sizeModel_1.default.findOneAndUpdate({ _id: SizeId }, updateData, { new: true });
            if (!updatedSize) {
                return res.status(404).json({ message: "Size does not exist !" });
            }
            res.status(200).json({ updatedSize });
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error !" });
        }
    }
    async deleteSize(req, res) {
        try {
            const SizeId = req.params.id;
            const ProductDetailCount = await productDetailModel_1.default.countDocuments({ SizeId });
            if (ProductDetailCount > 0) {
                return res
                    .status(409)
                    .json({ message: "Cannot delete Size with associated ProductDetails" });
            }
            const existingSize = await sizeModel_1.default.findByIdAndDelete(SizeId);
            if (!existingSize) {
                return res.status(404).json({ message: "Size not found" });
            }
            res.status(200).json({ message: "Delete Success!" });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
}
exports.default = new SizeController();
