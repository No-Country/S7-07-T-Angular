import { Router } from "express";
import registerRouter from "./auth"
const route=Router()


route.use("/auth",registerRouter)


export {route as routerGeneral}
