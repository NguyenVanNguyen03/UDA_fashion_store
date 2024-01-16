// create controller user by ts and express
import { Request, Response } from "express";
import Size, { ISize } from "../models/sizeModel";
import ProductDetail from "../models/productDetailModel";

class SizeController {
  async addSize(req: Request, res: Response) {
    try {
      const { sizeName } = req.body;
      const existingSize: ISize | null = await Size.findOne({
        sizeName,
      });

      if (existingSize) {
        return res.status(409).json({ message: "Size already exists !" });
      }

      const newSize: ISize = await new Size({ sizeName });

      await newSize.save();

      res.status(201).json({ message: "Create Success !" });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAllSize(req: Request, res: Response) {
    try {
      const Sizes = await Size.find();
      res.status(200).json({ Sizes });
    } catch (error) {
      res.status(500).json({ message: "Internal server error !" });
    }
  }
  async getSizeById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const name = await Size.findById({ _id: id });

      if (!name) {
        return res.status(404).json({ message: "Size does not exist !" });
      }

      res.status(200).json(name);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async updateSize(req: Request, res: Response) {
    try {
      const SizeId = req.params.id;
      const { sizeName } = req.body;

      const updateData = {
        sizeName,
      };
      const updatedSize = await Size.findOneAndUpdate(
        { _id: SizeId },
        updateData,
        { new: true },
      );
      if (!updatedSize) {
        return res.status(404).json({ message: "Size does not exist !" });
      }

      res.status(200).json({ updatedSize });
    } catch (error) {
      res.status(500).json({ message: "Internal server error !" });
    }
  }
  async deleteSize(req: Request, res: Response) {
    try {
      const SizeId = req.params.id;
  
      const ProductDetailCount = await ProductDetail.countDocuments({ SizeId });

      if (ProductDetailCount > 0) {
        return res
          .status(409)
          .json({ message: "Cannot delete Size with associated ProductDetails" });
      }
      const existingSize: ISize | null = await Size.findByIdAndDelete(
        SizeId,
      );

      if (!existingSize) {
        return res.status(404).json({ message: "Size not found" });
      }
      res.status(200).json({ message: "Delete Success!" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new SizeController();
