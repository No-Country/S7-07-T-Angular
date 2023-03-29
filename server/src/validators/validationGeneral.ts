import { Request, Response } from "express";
import { validationResult } from "express-validator";

const validationGeneral = (req: Request, res: Response, next: any) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array(), valid: false });
  }
  next();
};

export { validationGeneral };
