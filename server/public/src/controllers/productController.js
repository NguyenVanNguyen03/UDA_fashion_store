"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productDetailModel_1 = __importDefault(require("../models/productDetailModel"));
const atributeModel_1 = __importDefault(require("../models/atributeModel"));
const productModel_1 = __importDefault(require("../models/productModel"));
const productImageModel_1 = __importDefault(require("../models/productImageModel"));
class ProductController {
    async getProductById(req, res) {
        try {
            const productId = req.params.id;
            if (!(0, mongoose_1.isValidObjectId)(productId)) {
                return res.status(400).json({ message: "Invalid productId" });
            }
            const product = await productModel_1.default.findById(productId);
            if (!product) {
                res.status(404).json({ message: "Product not found" });
                return;
            }
            const productDetails = await productDetailModel_1.default.find({ productId });
            const productImages = await productImageModel_1.default.find({ productId });
            const attributes = await atributeModel_1.default.find({ productId });
            const result = {
                product,
                productDetails,
                productImages,
                attributes,
            };
            res.status(200).json(result);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async getAllProducts(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            const products = await productModel_1.default.find().skip(startIndex).limit(endIndex);
            const allProduct = await Promise.all(products.map(async (product) => {
                const productDetails = await productDetailModel_1.default.find({
                    productId: product._id,
                });
                const productImages = await productImageModel_1.default.find({
                    productId: product._id,
                });
                const attributes = await atributeModel_1.default.find({
                    productId: product._id,
                });
                return {
                    product,
                    productDetails,
                    productImages,
                    attributes,
                };
            }));
            const result = {
                products: allProduct,
                pageInfo: {
                    totalProduct: await productModel_1.default.countDocuments(),
                    totalPages: Math.ceil((await productModel_1.default.countDocuments()) / limit),
                    currentPage: page,
                },
            };
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    async getProductsByCategory(req, res) {
        try {
            const categoryId = req.query.categoryId;
            const parentCategoryId = req.query.parentCategoryId;
            if (!(0, mongoose_1.isValidObjectId)(categoryId) || !(0, mongoose_1.isValidObjectId)(parentCategoryId)) {
                return res.status(400).json({ message: "Invalid productId and parentCategoryId" });
            }
            const products = await productModel_1.default.find({
                categoryId,
                parentCategoryId,
            });
            if (!products) {
                res.status(404).json({ message: "Product not found" });
                return;
            }
            const allProduct = await Promise.all(products.map(async (product) => {
                const productDetails = await productDetailModel_1.default.find({
                    productId: product._id,
                });
                const productImages = await productImageModel_1.default.find({
                    productId: product._id,
                });
                const attributes = await atributeModel_1.default.find({
                    productId: product._id,
                });
                return {
                    product,
                    productDetails,
                    productImages,
                    attributes,
                };
            }));
            res.status(200).json(allProduct);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async createProducts(req, res) {
        try {
            const productSizes = req.body.productSizes ?? [];
            const productAttributes = req.body.productAttributes ?? [];
            const imageUrls = req.body.imageUrls ?? [];
            const discountPercent = req.body.discountPercent ?? 0;
            const productDesc = req.body.productDesc ?? "";
            const { productName, categoryId, parentCategoryId } = req.body;
            if (!productName ||
                !categoryId ||
                !parentCategoryId ||
                productSizes.length === 0 ||
                imageUrls.length === 0 ||
                productAttributes.length === 0) {
                return res.status(400).json({ message: "Invalid request data" });
            }
            const newProduct = new productModel_1.default({
                productName,
                productDesc,
                discountPercent,
                categoryId,
                parentCategoryId,
            });
            const savedProduct = await newProduct.save();
            const savedAttributes = await atributeModel_1.default.insertMany(productAttributes.map((attribute) => ({
                attributeName: attribute.attributeName,
                attributeValue: attribute.attributeValue,
                productId: savedProduct._id,
            })));
            const savedProductImage = await productImageModel_1.default.insertMany(imageUrls.map((imageUrl) => ({
                imageUrl: imageUrl.imageUrl,
                productId: savedProduct._id,
            })));
            const productDetails = [];
            for (let i = 0; i < productSizes.length; i++) {
                const savedProductDetail = await new productDetailModel_1.default({
                    stockQuantity: productSizes[0].stockQuantity,
                    price: productSizes[0].price,
                    productId: savedProduct._id,
                    sizeId: productSizes[i].sizeId,
                });
                productDetails.push(savedProductDetail);
            }
            return res.status(201).json({
                product: savedProduct,
                attributes: savedAttributes,
                productDetails: productDetails,
                productImage: savedProductImage,
            });
        }
        catch (error) {
            return res.status(400).json(error);
        }
    }
    async deleteProduct(req, res) {
        try {
            const productId = req.params.id;
            await productDetailModel_1.default.deleteMany({ productId });
            await atributeModel_1.default.deleteMany({ productId });
            await productImageModel_1.default.deleteMany({ productId });
            const deletedProduct = await productModel_1.default.findByIdAndDelete(productId);
            if (deletedProduct) {
                res.status(200).json({ message: "Product deleted successfully", product: deletedProduct });
            }
            else {
                res.status(404).json({ message: "Product not found" });
            }
        }
        catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
    async updateProduct(req, res) {
        try {
            const productId = req.params.id;
            const productSizes = req.body.productSizes ?? [];
            const productAttributes = req.body.productAttributes ?? [];
            const imageUrls = req.body.imageUrls ?? [];
            const discountPercent = req.body.discountPercent ?? 0;
            const productDesc = req.body.productDesc ?? "";
            const { productName, categoryId, parentCategoryId } = req.body;
            if (!(0, mongoose_1.isValidObjectId)(productId)) {
                return res.status(400).json({ message: "Invalid productId" });
            }
            if (!productName ||
                !categoryId ||
                !parentCategoryId ||
                imageUrls.length === 0 ||
                productAttributes.length === 0 ||
                productSizes.length === 0) {
                return res.status(400).json({ message: "Invalid request data" });
            }
            const updatedProduct = await productModel_1.default.findByIdAndUpdate(productId, {
                productName,
                productDesc,
                discountPercent,
                categoryId,
                parentCategoryId,
            }, { new: true });
            if (!updatedProduct) {
                return res.status(404).json({ message: "Product not found" });
            }
            await productDetailModel_1.default.updateMany({ productId }, {
                stockQuantity: req.body.productSizes.map((size) => size.stockQuantity),
                price: req.body.productSizes.map((size) => size.price),
            });
            await atributeModel_1.default.updateMany({ productId }, {
                atributeName: req.body.productAttributes.map((attr) => attr.attributeName),
                atributeValue: req.body.productAttributes.map((attr) => attr.attributeValue),
            });
            await productImageModel_1.default.updateMany({ productId }, {
                imageUrl: req.body.imageUrls.map((url) => url.imageUrl),
            });
            res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
        }
        catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
exports.default = new ProductController();
