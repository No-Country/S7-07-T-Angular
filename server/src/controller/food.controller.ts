import { Request, Response } from 'express';
import FoodService from '../services/food.service';
import { handleResponse } from '../utils/error.handle';

const foodService = new FoodService();

const getFoods = async (req: Request, res: Response) => {
  try {
    const response = await foodService.getFoods();
    return res.status(200).json(response);
  } catch (error) {
    handleResponse(res, "Error: get foods");
  }
}

const getFood = async (req: Request, res: Response) => {
  try {
    const response = await foodService.getFoodById(req.params.id);
    return res.status(200).json(response);
  } catch (error) {
    handleResponse(res, "Error: get food");
  }
}

const createFood = async (req: Request, res: Response) => {
  try {
    let response = await foodService.createFood( req.body );
    res.status(201).json(response);
  } catch (error) {
    handleResponse(res, "Error: create food");
  }
}

const updateFood = async (req: Request, res: Response) => {
  try {
    const response = await foodService.updateFood(req.params.id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    handleResponse(res, "Error: update food");
  }
}

const deleteFood = async (req: Request, res: Response) => {
  try {
    await foodService.deleteFood(req.params.id);
    return res.status(200).json({msg: "food successfully deleted"});
  } catch (error) {
    handleResponse(res, "Error: delete food");
  }
}

export default {
  getFood,
  getFoods,
  createFood,
  updateFood,
  deleteFood,
};