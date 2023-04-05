import { Router } from "express";
import {
  register,
  login,
  generateOTP,
  verifyOTP,
  createResetSession,
  resetPassword,
} from "../controller/auth";
import localVariables from "../middlewares/local-variables";
import { rulesLogin } from "../validators/rulesLogin";
import { rulesRegister } from "../validators/rulesRegister";
import { validationGeneral } from "../validators/validationGeneral";

const route = Router();

route.post("/register", rulesRegister, validationGeneral, register);
route.post("/login", rulesLogin, validationGeneral, login);
route.get("/generateOTP", localVariables, generateOTP);
route.get("/verifyOTP", verifyOTP);
route.get("/create-reset-session", createResetSession);
route.put("/reset-password", resetPassword);

export default route;
