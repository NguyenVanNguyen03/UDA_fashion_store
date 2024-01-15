import { Document, Schema, model } from "mongoose";

export interface IProductImage extends Document {
  imageUrl: string;
  productId: Object;
}

const productImageSchema = new Schema<IProductImage>({
  imageUrl: { type: String, required: true },
  productId: { type: Schema.Types.ObjectId, required: true },
});

const ProductImage = model<IProductImage>("productImages", productImageSchema);

export default ProductImage;
