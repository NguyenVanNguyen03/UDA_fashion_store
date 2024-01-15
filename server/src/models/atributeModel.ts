import { Document, Schema, model } from "mongoose";

export interface IAtribute extends Document {
  atributeName: string;
  atributeValue: string;
  productId: Object;
}

const atributeSchema = new Schema<IAtribute>({
  atributeName: { type: String, required: true },
  atributeValue: { type: String, required: true },
  productId: { type: Schema.Types.ObjectId, required: true },
});

const Atribute = model<IAtribute>("atributies", atributeSchema);

export default Atribute;
