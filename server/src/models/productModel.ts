import { Document, Schema, model } from "mongoose";

export interface IProduct extends Document {
  productName: string;
  productDesc: string;
  discountPercent: number;
  categoryId: Object;
  parentCategoryId: Object;
}

const productSchema = new Schema<IProduct>({
  productName: { type: String, required: true },
  productDesc: { type: String },
  discountPercent: { type: Number, required: true },
  categoryId: { type: Schema.Types.ObjectId },
  parentCategoryId: { type: Schema.Types.ObjectId },
});

const Product = model<IProduct>("products", productSchema);

export default Product;
