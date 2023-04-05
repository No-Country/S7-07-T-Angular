import { model, Schema } from "mongoose";
import { Food } from "../types/food.interface";

const foodSchema = new Schema<Food>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
    },
    macronutrients: {
      carbohydrates: {
        type: Number
      },
      proteins: {
        type: Number,
      },
      fats: {
        type: Number,
      },
    },
    mark: {
      type: String,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model('Food', foodSchema);