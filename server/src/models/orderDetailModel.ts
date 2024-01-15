import { Document, Schema, model } from "mongoose";

export interface IOrderDetail extends Document {
  orderId: Object;
  productDetailId: Object;
}

const orderDetailSchema = new Schema<IOrderDetail>({
  orderId: { type: Schema.Types.ObjectId, required: true },
  productDetailId: { type: Schema.Types.ObjectId, required: true },
});

const OrderDetail = model<IOrderDetail>("orderDetails", orderDetailSchema);

export default OrderDetail;
