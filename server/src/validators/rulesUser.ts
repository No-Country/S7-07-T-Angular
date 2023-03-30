import { check } from "express-validator";

const rulesUser = [
  check("username").isString().isLength({ min: 3 }),
  check("picture").isString(),
];

export default rulesUser;
