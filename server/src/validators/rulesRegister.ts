import { body } from "express-validator";

const rulesRegister = [
  body("username").exists().not().notEmpty(),
  // password must be at least 5 chars long
  body("password").isLength({ min: 6 }).notEmpty(),
  body("email").isEmail().notEmpty(),
];

export { rulesRegister };
