import { Router } from "express";
import { getUser } from "../controller/user";

import verifyToken from "../middlewares/verify-token";

const router = Router();

router.get("/", verifyToken, getUser);

export default router;
