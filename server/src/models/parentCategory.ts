import { Document, Schema, model } from "mongoose";

export interface IParentCategory extends Document {
  parentCategoryName: string;
}

const parentCategorySchema = new Schema<IParentCategory>({
  parentCategoryName: { type: String, required: true },
});

const ParentCategory = model<IParentCategory>("parentCategories", parentCategorySchema);

export default ParentCategory;
