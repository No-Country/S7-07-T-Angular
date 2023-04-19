import { Router } from "express";
import {addDiet,createDiet,deletDiet,getDate,updateDiet,deleteFood, allDiet} from "../controller/diet"

const route=Router()

route.get("/getDay/:userId/:date", getDate)
route.get("/allDay/:userId", allDiet)
route.post("/create", createDiet)
route.patch("/add", addDiet)
route.patch("/updateDiet", updateDiet)
route.delete("/delete", deletDiet)
route.delete("/deleteFoot",deleteFood)
export default route