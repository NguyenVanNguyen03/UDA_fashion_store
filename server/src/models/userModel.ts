import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  firstName: string;
  lastName: string;
  gender: string;
  dob: Date;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  token: string;
}

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  token: { type: String },
});

const User = model<IUser>("users", userSchema);

export default User;
