import { Request, Response } from "express";

const getUser = async (req: Request, res: Response) => {
  try {
    res.status(200).send({ msg: "todo bien" });
  } catch (error) {}
};

export { getUser };
