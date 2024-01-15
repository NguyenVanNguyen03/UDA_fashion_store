import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  gender: string;
  dob: Date;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  token: string;
  create_at: Date;
  update_at: Date;
}

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true, unique: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  token: { type: String },
  create_at: { type: Schema.Types.Date, required: true },
  update_at: { type: Schema.Types.Date, required: true },
});

const User = model<IUser>("users", userSchema);

export default User;
