import { Document, Schema, model } from "mongoose";

export interface IRole extends Document {
  roleName: string;
  userId: Object;
}

const roleSchema = new Schema<IRole>({
  roleName: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
});

const Role = model<IRole>("roles", roleSchema);

export default Role;
