import { Document, ObjectId, Schema, model } from "mongoose";
export interface IProductDetail extends Document {
  stockQuantity: number;
  price: number;
  productId: ObjectId;
  sizeId: ObjectId;
}

const productDetailSchema = new Schema<IProductDetail>({
  stockQuantity: { type: Number, required: true },
  price: { type: Number, required: true },
  productId: { type: Schema.Types.ObjectId, required: true },
  sizeId: { type: Schema.Types.ObjectId, required: true },
});
const ProductDetail = model<IProductDetail>("productDetails", productDetailSchema);
export default ProductDetail;
