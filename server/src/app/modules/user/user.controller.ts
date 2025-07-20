import { Request, Response } from "express";
import { User } from "./user.model.js";

export const saveUserInfo = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      const newUser = await User.create({ ...req.body });
      res.status(201).json(newUser);
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
