import {  Request, Response } from "express"
import {verifyGoogle} from "../utils/google-Veryfi"
import { Error } from "mongoose"
import User from "../models/user.model"
import { generateToken } from "../utils/generate.Token"
import { enviar } from "../utils/email"

const googleLogin= async (req:Request, res:Response) => {

    let {id_token}=req.body
    interface TokenPayload {
        name?: string;
        picture?: string;
        email?: string;
        username?:string
        
      }

 try {
    //desestructuramos el token y consegimos datos

    let {email,picture,username}=await verifyGoogle(id_token) as TokenPayload
    
    //corroboramos si existe en la base de datos
    
    let user= await User.findOne({email}).select("-password")
    
    //si no existe lo creamos
    
    if(!user){
        
        let createUser= new User({email,picture,username, password:":P"})
        createUser.save()
        
        const update: any = await User.findOne({ email: createUser.email }).select("-password");
        
        let token = generateToken(update, 18000);
    if (!token) {
        return res.send({
          message: "no se pudo validar al usuario",
          valid: false,
        });
      }
      enviar(update,"bienvenida")
      
      return res.send({ user: update, token: token, valid: true });
     }

     //si existe el usuario
     const update: any = await User.findOne({ email: user.email }).select("-password");
        
        let token = generateToken(update, 18000);
    if (!token) {
        return res.send({
          message: "no se pudo validar al usuario",
          valid: false,
        });
      }
      enviar(update,"bienvenida")
      
      return res.send({ user: update, token: token, valid: true });
    

 } catch (error:any) {
        console.log(error.message);
        res.send({message:"La validacion con google no fue posible intentelo despues",valid:false})
 }
 
}



export {googleLogin}