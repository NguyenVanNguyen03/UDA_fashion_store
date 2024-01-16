import { Document, Schema, model } from "mongoose";

export interface IDiscountCode extends Document {
  code: string;
  discountAmmount: number;
  timeStart: Date;
  timeEnd: Date;
}

const discountCodeSchema = new Schema<IDiscountCode>({
  code: { type: String, required: true },
  discountAmmount: { type: Number, required: true, default: 0 },
  timeStart: { type: Schema.Types.Date, required: true },
  timeEnd: { type: Schema.Types.Date, required: true },
});

const DiscountCode = model<IDiscountCode>("discountCodes", discountCodeSchema);

export default DiscountCode;
