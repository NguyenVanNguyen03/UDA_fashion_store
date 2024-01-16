import { Request, Response } from "express";
import DiscountCode, { IDiscountCode } from "../models/discountCodeModel";
import { isValidObjectId } from "mongoose";

class DisCountCodeController {
  async getAllDiscountCode(req: Request, res: Response) {
    try {
      const discountCodes: IDiscountCode[] = await DiscountCode.find();

      res.status(200).json(discountCodes);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getDiscountCodeById(req: Request, res: Response) {
    try {
      const discountCodeId: string = req.params.id;

      if (!isValidObjectId(discountCodeId)) {
        return res.status(400).json({ message: "Invalid productId" });
      }

      const discountCode: IDiscountCode | null = await DiscountCode.findById(discountCodeId);

      if (!discountCode) {
        res.status(404).json({ message: "Discount code not found" });
        return;
      }

      res.status(200).json(discountCode);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async deleteDiscountCode(req: Request, res: Response) {
    try {
      const discountCodeId: string = req.params.id;

      if (!isValidObjectId(discountCodeId)) {
        return res.status(400).json({ message: "Invalid productId" });
      }

      const deletedDiscountCode: IDiscountCode | null = await DiscountCode.findByIdAndDelete(
        discountCodeId,
      );
      if (deletedDiscountCode) {
        return res.status(200).json({
          message: "Discount code deleted successfully!",
          dicountCode: deletedDiscountCode,
        });
      } else {
        return res.status(404).json({ message: "Discount code not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateDiscountCode(req: Request, res: Response) {
    try {
      const discountCodeId: string = req.params.id;
      const { code, discountAmmount, timeStart, timeEnd } = req.body;

      if (!code || !timeStart || !timeEnd) {
        return res.status(400).json("Invalid request data!");
      }

      if (!isValidObjectId(discountCodeId)) {
        return res.status(400).json({ message: "Invalid productId" });
      }

      const updatedDiscountCode: IDiscountCode | null = await DiscountCode.findByIdAndUpdate(
        {
          discountCodeId,
        },
        {
          code,
          discountAmmount,
          timeStart,
          timeEnd,
        },
        {
          new: true,
        },
      );

      if (updatedDiscountCode) {
        res.status(200).json({
          message: "discount code updated successfully",
          newDiscountCode: updatedDiscountCode,
        });
      } else {
        res.status(404).json({ message: "Discount code not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async createDiscountCode(req: Request, res: Response) {
    try {
      const { code, discountAmount, timeStart, timeEnd } = req.body;

      if (!code || !timeStart || !timeEnd) {
        return res.status(400).json("Invalid request data!");
      }

      const parsedTimeStart = new Date(timeStart);
      const parsedTimeEnd = new Date(timeEnd);

      if (isNaN(parsedTimeStart.getTime()) || isNaN(parsedTimeEnd.getTime())) {
        return res.status(400).json("Invalid date format for timeStart or timeEnd");
      }

      if (parsedTimeStart >= parsedTimeEnd) {
        return res.status(400).json("timeStart must be before timeEnd");
      }

      const createdDiscountCode: IDiscountCode = await new DiscountCode({
        code,
        discountAmount,
        timeStart: parsedTimeStart,
        timeEnd: parsedTimeEnd,
      }).save();

      res.status(201).json(createdDiscountCode);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default new DisCountCodeController();
