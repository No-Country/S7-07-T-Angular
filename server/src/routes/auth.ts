import { Router } from "express";
import { register, login } from "../controller/auth";
import { rulesLogin } from "../validators/rulesLogin";
import { rulesRegister } from "../validators/rulesRegister";
import { validationGeneral } from "../validators/validationGeneral";

const route = Router();

route.post("/register", rulesRegister, validationGeneral, register);
route.post("/login", rulesLogin, validationGeneral, login);
export default route;
