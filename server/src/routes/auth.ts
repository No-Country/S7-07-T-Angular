import { Router } from "express";
import {
  register,
  login,
  sendRest
} from "../controller/auth";
import localVariables from "../middlewares/local-variables";
import { rulesLogin } from "../validators/rulesLogin";
import { rulesRegister } from "../validators/rulesRegister";
import { validationGeneral } from "../validators/validationGeneral";

const route = Router();

route.post("/register", rulesRegister, validationGeneral, register);
route.post("/login", rulesLogin, validationGeneral, login);
route.post("/sendrest",sendRest)

export default route;
