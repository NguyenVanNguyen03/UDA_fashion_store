import { Document, Schema, model } from "mongoose";

export interface IMethodPayment extends Document {
  methodName: string;
}

const methodPaymentSchema = new Schema<IMethodPayment>({
  methodName: { type: String, required: true },
});

const MethodPayment = model<IMethodPayment>("methodPayments", methodPaymentSchema);

export default MethodPayment;
