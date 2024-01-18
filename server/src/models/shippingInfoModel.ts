import { Document, Schema, model } from "mongoose";

export interface IShippingInfo extends Document {
  shippingCost: number;
  phoneNumber: string;
  shippingAddress: string;
  shippingMethod: string;
  shippingStatus: string;
  recipientName: string;
  orderId: Object;
}

const shippingInfoSchema = new Schema<IShippingInfo>({
  shippingCost: { type: Number, required: true },
  phoneNumber: { type: String, required: true },
  shippingAddress: { type: String, required: true },
  shippingMethod: { type: String, required: true },
  shippingStatus: { type: String, required: true },
  recipientName: { type: String, required: true },
  orderId: { type: Schema.Types.ObjectId, required: true },
});

const ShippingInfo = model<IShippingInfo>("shippingInfos", shippingInfoSchema);

export default ShippingInfo;
