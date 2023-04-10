import { Request, Response } from "express";
import axiosInstance from "../utils/axios.instance";

const searchFoods = async (req: Request, res: Response) => {
  try {
    const { query } = req.query;

    const { data } = await axiosInstance.get(`search?query=${query}`);

    res.status(200).send(data);
  } catch (error) {
    res.status(501).send(error);
  }
};

const searchFoodById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { data } = await axiosInstance.get(`${id}`);

    let food = {
      id: data.id,
      title: data.title,
      calories: data.nutrition.calories,
      macronutrients: {
        protein: data.nutrition.protein,
        carbs: data.nutrition.carbs,
        fat: data.nutrition.fat,
      },
      description: data.description,
      image: data.image,
      brand: data.brand,
      percent: data.nutrition.caloricBreakdown,
    };

    res.status(200).send(food);
  } catch (error) {
    res.status(501).send(error);
  }
};

export { searchFoods, searchFoodById };
