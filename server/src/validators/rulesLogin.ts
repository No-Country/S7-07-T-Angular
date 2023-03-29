import { body } from "express-validator";

const rulesLogin = [
  body("password").isLength({ min: 6 }).notEmpty(),
  body("email").isEmail().notEmpty(),
];

export { rulesLogin };
