// create controller user by ts and express
import { Request, Response } from "express";

class UserController {
  async index(req: Request, res: Response) {
    res.json({ message: "Hello World" });
  }
}

export default new UserController();
