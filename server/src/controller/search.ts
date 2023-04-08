import { Request, Response } from "express";
import axiosInstance from "../utils/axios.instance";

const searchFoods = async (req: Request, res: Response) => {
  try {
    const { query } = req.query;
    console.log(query);
    const { data } = await axiosInstance.get(`/search?query=${query}`);

    res.status(200).send(data);
  } catch (error) {
    res.status(501).send(error);
  }
};

const searchFoodById = () => {
  try {
  } catch (error) {}
};

export { searchFoods, searchFoodById };
