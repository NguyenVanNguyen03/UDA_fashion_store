"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoryModel_1 = __importDefault(require("../models/categoryModel"));
const productModel_1 = __importDefault(require("../models/productModel"));
class CategoryController {
    async addCategory(req, res) {
        try {
            const { categoryName } = req.body;
            const existingCategory = await categoryModel_1.default.findOne({
                categoryName,
            });
            if (existingCategory) {
                return res.status(409).json({ message: "Category already exists !" });
            }
            const newCategory = await new categoryModel_1.default({ categoryName });
            await newCategory.save();
            res.status(201).json({ message: "Create Success !" });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
    async getAllCategory(req, res) {
        try {
            const name = await categoryModel_1.default.find();
            res.status(200).json({ name });
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error !" });
        }
    }
    async getCategoryById(req, res) {
        try {
            const id = req.params.id;
            const name = await categoryModel_1.default.findById({ _id: id });
            if (!name) {
                return res.status(404).json({ message: "Category does not exist !" });
            }
            res.status(200).json(name);
        }
        catch (error) {
            res.status(500).json({ error });
        }
    }
    async updateCategory(req, res) {
        try {
            const CategoryId = req.params.id;
            const { categoryName } = req.body;
            const updateData = {
                categoryName,
            };
            const updatedCategory = await categoryModel_1.default.findOneAndUpdate({ _id: CategoryId }, updateData, {
                new: true,
            });
            if (!updatedCategory) {
                return res.status(404).json({ message: "Category does not exist !" });
            }
            res.status(200).json({ updatedCategory });
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error !" });
        }
    }
    async deleteCategory(req, res) {
        try {
            const CategoryId = req.params.id;
            const productCount = await productModel_1.default.countDocuments({ CategoryId });
            if (productCount > 0) {
                return res.status(409).json({ message: "Cannot delete Category with associated products" });
            }
            const existingCategory = await categoryModel_1.default.findByIdAndDelete(CategoryId);
            if (!existingCategory) {
                return res.status(404).json({ message: "Category not found" });
            }
            res.status(200).json({ message: "Delete Success!" });
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
}
exports.default = new CategoryController();
