import { Document, ObjectId, Schema, model } from "mongoose";

export interface IAtribute extends Document {
  attributeName: string;
  attributeValue: string;
  productId: ObjectId;
}

const attributeSchema = new Schema<IAtribute>({
  attributeName: { type: String, required: true },
  attributeValue: { type: String, required: true },
  productId: { type: Schema.Types.ObjectId, required: true },
});

const Attribute = model<IAtribute>("attributies", attributeSchema);

export default Attribute;
