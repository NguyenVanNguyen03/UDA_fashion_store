import mongoose from "mongoose";

export async function connectMongoDb() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("Connect is successful");
  } catch (error) {
    console.log("Connect is fail!");
  }
}
