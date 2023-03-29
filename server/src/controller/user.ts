import { Response } from "express";
import User from "../models/user.model";
import CustomRequest from "../types/types";

const getUser = async (req: CustomRequest, res: Response) => {
  try {
    const userId = req.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        error: "User not found",
      });
    }

    res.status(201).json({
      user,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getUser };
