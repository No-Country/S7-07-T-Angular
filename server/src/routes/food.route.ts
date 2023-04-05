import { Router } from "express";
import foodController from '../controller/food.controller';

const foodRouter = Router();

foodRouter.get("/", foodController.getFoods);
foodRouter.get("/:id", foodController.getFood);
foodRouter.post("/", foodController.createFood);
foodRouter.put("/:id", foodController.updateFood);
foodRouter.delete("/:id", foodController.deleteFood);

export default foodRouter;