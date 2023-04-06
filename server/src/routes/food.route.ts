import { Router } from "express";
import foodController from "../controller/food.controller";
import validator from "../validators/food.validator";

const foodRouter = Router();

foodRouter.get("/", foodController.getFoods);
foodRouter.get("/:id", validator.getFoodByIdValidator, foodController.getFood);
foodRouter.post("/", validator.createFoodValidator, foodController.createFood);
foodRouter.put("/:id", validator.updateFoodValidator, foodController.updateFood);
foodRouter.delete("/:id", validator.deleteFoodValidator, foodController.deleteFood);

export default foodRouter;