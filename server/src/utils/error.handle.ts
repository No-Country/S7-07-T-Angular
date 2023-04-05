import { Response } from "express";

const handleResponse = (res: Response, error: string) => {
  res.status(500)
  res.send({error})
};

export { handleResponse };