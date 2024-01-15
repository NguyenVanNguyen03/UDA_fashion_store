import { Document, ObjectId, Schema, model } from "mongoose";

export interface ICategory extends Document {
  categoryName: string;
  productId: ObjectId;
}

const categorySchema = new Schema<ICategory>({
  categoryName: { type: String, required: true },
  productId: { type: Schema.Types.ObjectId, required: true },
});

const Category = model<ICategory>("categories", categorySchema);

export default Category;
