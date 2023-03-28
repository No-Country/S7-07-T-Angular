import { Router } from "express";
import registerRouter from "./register"
const route=Router()


route.use("/auth",registerRouter)


export {route as routerGeneral}