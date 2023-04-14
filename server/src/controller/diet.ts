import { Request, Response } from "express"
import diet from "../models/diet"



const createDiet=(req:Request, res:Response)=>{
    let {userId, foods}=req.body
    try {
     
    let dieta:any= new diet({userId,foods})
    dieta.save()
    res.send({dieta,valid:true})
    
  } catch (error) {
      console.log(error);
    }
    
 }
//agrega una comida a la dieta con sus respectivos alimentos
 const updateDiet=async(req:Request, res:Response)=>{
  let {userId, food}=req.body
  
  try {
    const result = await diet.findOneAndUpdate(
      {userId:userId},
      { $push: { foods: food } },
      { new: true }
    );
    
    return res.send({result, valid:true})  
  } catch (error) {
    console.log(error);
      
  }
  
}
//agrega un alimento a una comida seleccionada
const addDiet=async (req:Request, res:Response)=>{
   
  let {userId, meal, foodId}=req.body
   try {
    const result = await diet.findOneAndUpdate(
      { userId, "foods._id": foodId },
      { $push: { "foods.$.meal": meal } },
      { new: true }
    );
    return res.send({result, valid:true}) 
   } catch (error) {
    console.log(error);
    console.log("error en diet");
   }
   
}
//elimina un alimento de alguna de las comidas seleccionadas
const deletDiet=async (req:Request,res:Response)=>{
  let {userId, foodId, mealId}=req.body
  
  try {
   
    const result = await diet.findOneAndUpdate(
    
      { userId, "foods._id": foodId },
      { $pull: { "foods.$.meal": { mealId: mealId } } },
      { new: true }
    );
    return res.send({result, valid:true})
  } catch (error) {
    console.log(error);
    console.log("error en deletdiet");
    
    
  }
  
}
//trae la dieta seleccionada por una fecha que se requiere
const getDate=async(req:Request, res:Response)=>{
 let {date, userId}=req.params
  try {
    const result = await diet.aggregate([
      { $match: { userId: userId } },
      { $unwind: '$foods' },
      { $match: { 'foods.date': date } },
    ]);
    return res.send({result, valid:true})   
  } catch (error) {
    console.log(error);
  }
}
// retorna todas las comidas sin distinguir fecha
const allDiet=async(req:Request,res:Response)=>{
  const {userId}=req.params
  try {
    const result= await diet.find({userId:userId})
    return res.send({Resultad:result[0].foods,valid:true})  
  } catch (error) {
    console.log(error);
    
  }
  
}
//elimina una comida completa
const deleteFood=async(req:Request, res:Response)=>{
  const {userId, foodId}=req.body
  try {
    const result = await diet.findOneAndUpdate(
      { userId: userId },
      { $pull: { foods: { _id: foodId } } },
      { new: true }
    );
    return res.send({result, valid:true})  
  } catch (error) {
    console.log(error);
    
  }
  
}


export {addDiet, createDiet, deletDiet, getDate, updateDiet, deleteFood, allDiet}