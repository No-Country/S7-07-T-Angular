import { Router } from "express";
import registerRouter from "./auth";
import userRouter from "./user";
const route = Router();

route.use("/auth", registerRouter);
route.use("/user", userRouter);

export { route as routerGeneral };
