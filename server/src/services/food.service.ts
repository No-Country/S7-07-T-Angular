import foodModel from "../models/food.model";
import { Food } from "../types/food.interface";

export default class FoodService {

  /**
    * Find all foods
    * and return an array of foods
  **/
  public async getFoods() {
    try {
      const foods = await foodModel.find();
      return foods;
    } catch (error: any) {
      return `Error in food service: ${error.message}`;
    }
  }

  /**
    * Find a food by Id
    * @param { string } id
    * @returns { Promise<> }
    *
  **/
  public async getFoodById(id: string) {
    try {
      const food = await foodModel.findById(id);
      return food;
    } catch (error: any) {
      return `Error in food service: ${error.message}`;
    }
  }

  /**
    * Create a new food
    * @param { Food } food
    * @returns { Promise<> }
    *
  **/
  public async createFood(food: Food) {
    try {
      const newFood = await foodModel.create(food);
      return newFood;
    } catch (error: any) {
      return `Error in create food service: ${error.message}`;
    }
  }

  /**
    * Update a food
    * @param { string } id
    * @param { Food } food
    * @returns { Promise<> }
    *
  **/
  public async updateFood(id: string, food: Food) {
    try {
      const updatedFood = await foodModel.findByIdAndUpdate(id, food);
      return updatedFood;
    } catch (error: any) {
      return `Error in update food service: ${error.message}`;
    }
  }

  /**
    * Delete a food
    * @param { string } id
    * @returns { void }
    *
  **/
  public async deleteFood(id: string) {
    try {
      await foodModel.findByIdAndDelete(id);
    } catch (error: any) {
      return `Error in delete food service: ${error.message}`;
    }
  }
}