import { Router } from "express";
import {
  register,
  login,
  sendRest,
  passwordReset

} from "../controller/auth";
import localVariables from "../middlewares/local-variables";
import { rulesLogin } from "../validators/rulesLogin";
import { rulesRegister } from "../validators/rulesRegister";
import { validationGeneral } from "../validators/validationGeneral";
import {googleLogin} from "../controller/registerGoogle"

const route = Router();

route.post("/register", rulesRegister, validationGeneral, register);
route.post("/login", rulesLogin, validationGeneral, login);
route.post("/sendrest",sendRest)
route.patch("/passwordreset",passwordReset)
route.post("/sing-in", googleLogin)

export default route;
