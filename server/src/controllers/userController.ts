// create controller user by ts and express
import { Request, Response } from "express";
import User, { IUser } from "../models/userModel";

class UserController {
  async addUser(req: Request, res: Response) {
    try {
      const { firstName, lastName, gender, dob, email, password, phoneNumber, address } = req.body;

      const existingUser = await User.findOne({ email, password });

      if (existingUser) {
        return res.status(409).json({ message: "User already exists !" });
      }

      const currentDate = new Date();
      const newUser = new User({
        firstName,
        lastName,
        gender,
        dob,
        email,
        password,
        phoneNumber,
        address,
        create_at: currentDate,
        update_at: currentDate,
      });

      await newUser.save();

      res.status(201).json({ message: "Create Success !" });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Internal server error !" });
    }
  }
  async getUserById(req: Request, res: Response) {
    try {
      const id = req.params.id;

      console.log(id);
      const user = await User.findOne({ _id: id });

      if (!user) {
        return res.status(404).json({ message: "User does not exist !" });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  async deleteUser(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const user = await User.findOneAndDelete({ _id: id });

      if (!user) {
        return res.status(404).json({ message: "User does not exist !" });
      }

      res.status(200).json("Delete Success !");
    } catch (error) {
      res.status(500).json({ message: "Internal server error !" });
    }
  }
  async updateUser(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const { firstName, lastName, gender, dob, email, password, phoneNumber, address } = req.body;
      const currentDate = new Date();
      const updateData = {
        firstName,
        lastName,
        gender,
        dob,
        email,
        password,
        phoneNumber,
        address,
        update_at: currentDate,
      };
      const updatedUser = await User.findOneAndUpdate({ _id: id }, updateData, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: "User does not exist !" });
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: "Internal server error !" });
    }
  }
}

export default new UserController();
