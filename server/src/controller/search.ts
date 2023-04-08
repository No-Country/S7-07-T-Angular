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

    res.status(200).send(data);
  } catch (error) {
    res.status(501).send(error);
  }
};

export { searchFoods, searchFoodById };
