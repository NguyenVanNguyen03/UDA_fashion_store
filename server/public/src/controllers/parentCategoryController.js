"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parentCategory_1 = __importDefault(require("../models/parentCategory"));
const productModel_1 = __importDefault(require("../models/productModel"));
class ParentCategoryController {
    async addParentCategory(req, res) {
        try {
            const { parentCategoryName } = req.body;
            const existingParentCategory = await parentCategory_1.default.findOne({
                parentCategoryName,
            });
            if (existingParentCategory) {
                return res.status(409).json({ message: "Parent Category already exists !" });
            }
            const newParentCategory = await new parentCategory_1.default({ parentCategoryName });
            await newParentCategory.save();
            res.status(201).json({ message: "Create Success !" });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async getAllParentCategory(req, res) {
        try {
            const name = await parentCategory_1.default.find();
            res.status(200).json({ name });
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error !" });
        }
    }
    async getParentCategoryById(req, res) {
        try {
            const id = req.params.id;
            const name = await parentCategory_1.default.findById({ _id: id });
            if (!name) {
                return res.status(404).json({ message: "Parent Category does not exist !" });
            }
            res.status(200).json(name);
        }
        catch (error) {
            res.status(500).json({ error });
        }
    }
    async updateParentCategory(req, res) {
        try {
            const parentCategoryId = req.params.id;
            const { parentCategoryName } = req.body;
            const updateData = {
                parentCategoryName,
            };
            const updatedParentCategory = await parentCategory_1.default.findOneAndUpdate({ _id: parentCategoryId }, updateData, { new: true });
            if (!updatedParentCategory) {
                return res.status(404).json({ message: "Parent Category does not exist !" });
            }
            res.status(200).json({ updatedParentCategory });
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error !" });
        }
    }
    async deleteParentCategory(req, res) {
        try {
            const parentCategoryId = req.params.id;
            const productCount = await productModel_1.default.countDocuments({ parentCategoryId });
            if (productCount > 0) {
                return res
                    .status(409)
                    .json({ message: "Cannot delete Parent Category with associated products" });
            }
            const existingParentCategory = await parentCategory_1.default.findByIdAndDelete(parentCategoryId);
            if (!existingParentCategory) {
                return res.status(404).json({ message: "Parent Category not found" });
            }
            res.status(200).json({ message: "Delete Success!" });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
}
exports.default = new ParentCategoryController();
