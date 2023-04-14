import { model, Schema } from "mongoose";
import { Food } from "../types/food.interface";

const dietSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    
    foods:[{
      title:String,
      date: String,
      meal:[{
      name:String,
      calories:String,
      carboidratos:String,
      proteins:String,
      fats:String,
      mark:String,
      }],
      
    }]
},
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model('diet', dietSchema);