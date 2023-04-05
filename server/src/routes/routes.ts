import { Router } from "express";
import registerRouter from "./auth";
import userRouter from "./user";
import foodRouter from "./food.route";

const route = Router();

route.use("/auth", registerRouter);
route.use("/user", userRouter);

route.use("/foods", foodRouter);

export { route as routerGeneral };
