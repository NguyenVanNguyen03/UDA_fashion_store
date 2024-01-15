import { Document, Schema, model } from "mongoose";

export interface IProduct extends Document {
  productName: string;
  productDesc: string;
  stockQuantity: number;
  discountPercent: number;
}

const productSchema = new Schema<IProduct>({
  productName: { type: String, required: true },
  productDesc: { type: String, required: true },
  stockQuantity: { type: Number, required: true },
  discountPercent: { type: Number, required: true },
});

const Product = model<IProduct>("products", productSchema);

export default Product;
