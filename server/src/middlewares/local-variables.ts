import { NextFunction, Request, Response } from "express";

const localVariables = (req: Request, res: Response, next: NextFunction) => {
  req.app.locals = {
    OTP: null,
    resetSession: null,
  };

  next();
};

export default localVariables;
