import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";

type IPayload = {
  _id: string;
  iat: number;
  exp: number;
};

interface RequestUserId extends Request {
  userId: string;
}

const verifyToken: any = (
  req: RequestUserId,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
      return res.status(400).json({
        error: "You need to have a token",
      });
    }

    const payload = jwt.verify(token, `${process.env.JWT_SECRET}`) as IPayload;
    req.userId = payload._id;

    next();
  } catch (error) {
    res.status(500).send(error);
  }
};

export default verifyToken;
