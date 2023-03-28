import { Request, Response } from "express";

const getUser = (req: Request, res: Response) => {
  res.status(201).json({ msg: "user info" });
};

export { getUser };
