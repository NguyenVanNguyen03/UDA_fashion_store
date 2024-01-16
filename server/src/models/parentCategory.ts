import { Document, Schema, model } from "mongoose";

export interface IParentCategory extends Document {
  parentCategoryName: string;
  categoryId: Object;
}

const parentCategorySchema = new Schema<IParentCategory>({
  parentCategoryName: { type: String, required: true },
  categoryId: { type: Schema.Types.ObjectId },
});

const ParentCategory = model<IParentCategory>("parentCategories", parentCategorySchema);

export default ParentCategory;
