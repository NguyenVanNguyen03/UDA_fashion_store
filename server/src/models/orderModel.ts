import { Document, Schema, model } from "mongoose";

export interface IOrder extends Document {
  orderTime: Date;
  priceTotal: number;
  userId: Object;
}

const orderSChema = new Schema<IOrder>({
  orderTime: { type: Schema.Types.Date, required: true },
  priceTotal: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
});

const Order = model<IOrder>("orders", orderSChema);

export default Order;
