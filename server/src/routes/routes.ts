import { Router } from "express";
import registerRouter from "./auth";
import userRouter from "./user";
import foodRouter from "./food.route";
import searchRouter from "./search";

const route = Router();

route.use("/auth", registerRouter);
route.use("/user", userRouter);
route.use("/foods", foodRouter);
route.use("/search", searchRouter);

export { route as routerGeneral };
