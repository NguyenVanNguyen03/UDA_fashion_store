import { Document, Schema, model } from "mongoose";

export interface ISize extends Document {
  sizeName: string;
}

const sizeSchema = new Schema({
  sizeName: { type: String, require: true },
});

const Size = model<ISize>("sizes", sizeSchema);

export default Size;
