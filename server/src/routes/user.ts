import { Router } from "express";
import { getUser, updateUser } from "../controller/user";

import verifyToken from "../middlewares/verify-token";
import rulesUser from "../validators/rulesUser";
import { validationGeneral } from "../validators/validationGeneral";

const router = Router();

router.get("/", verifyToken, getUser);
router.put("/", rulesUser, validationGeneral, verifyToken, updateUser);

export default router;
