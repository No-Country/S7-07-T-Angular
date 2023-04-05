import { Request, NextFunction, Response } from "express";

import jwt from "jsonwebtoken";
import CustomRequest from "../types/types";

type IPayload = {
  id: string;
  iat: number;
  exp: number;
};

const verifyToken = (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
      return res.status(400).json({
        error: "You need to have a token",
      });
    }

    const payload = jwt.verify(token, `${process.env.JWT_SECRET}`) as IPayload;

    req.userId = payload.id;

    next();
  } catch (error) {
    res.status(500).send(error);
  }
};

export default verifyToken;
