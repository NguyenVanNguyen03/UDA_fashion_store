import { Document, ObjectId, Schema, model } from "mongoose";

export interface ICategory extends Document {
  categoryName: string;
}

const categorySchema = new Schema<ICategory>({
  categoryName: { type: String, required: true },
});

const Category = model<ICategory>("categories", categorySchema);

export default Category;
