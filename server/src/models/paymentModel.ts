import { Document, Schema, model } from "mongoose";

export interface IPayment extends Document {
  status: string;
  totalPrice: number;
  methodId: Object;
  orderId: Object;
}

const paymentSchema = new Schema<IPayment>({
  status: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  methodId: { type: Schema.Types.ObjectId, required: true },
  orderId: { type: Schema.Types.ObjectId, required: true },
});

const Payment = model<IPayment>("payments", paymentSchema);

export default Payment;
