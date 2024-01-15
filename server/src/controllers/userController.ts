// create controller user by ts and express
import { Request, Response } from "express";
import User, { IUser } from "../models/userModel";

class UserController {
  async index(req: Request, res: Response) {
    let user: IUser[] = await User.find();
    res.json(user);
  }
}

export default new UserController();
