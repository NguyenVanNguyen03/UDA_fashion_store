import { Request, Response } from "express";
import User from "../models/userModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

type Account = {
  email: string;
  password: string;
};

type Decode = {
  userId: string;
  email: string;
};
class IndexController {
  async login(req: Request, res: Response) {
    try {
      const { email, password }: Account = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Incorrect email" });
      }

      const isPasswordVaild = await bcrypt.compare(password, user!.password);

      if (!isPasswordVaild) {
        return res.status(401).json({ message: "Incorrect password" });
      }

      const token: string = jwt.sign({ userId: user!._id, email: user!.email }, "auth01", {
        expiresIn: "1h",
      });

      user!.token = token;
      await user!.save();

      return res.status(200).json({ userId: user!._id, token: token });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async logout(req: Request, res: Response) {
    try {
      const token: string | undefined = req.headers.authorization;

      if (!token) {
        return res.status(401).json({ message: "Not is authorized" });
      }

      const decode: Decode | any = jwt.verify(token, "auth01");
      const user = await User.findById(decode.userId);

      if (!user || user.token !== token) {
        return res.status(401).json({ message: "Invalid user" });
      }

      user!.token = "";
      await user!.save();

      return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  }
}

export default new IndexController();
