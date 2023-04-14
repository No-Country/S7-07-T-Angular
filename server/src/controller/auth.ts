import { Request, Response, request } from "express";
import user from "../models/user.model";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generate.Token";
import otpGenerator from "otp-generator";
import { transporter } from "../config/nodemailer.config";
import { enviar } from "../utils/email";
import jwt from "jsonwebtoken";
interface UserType {
  username: string;
  email: string;
}

const login = async (req: Request, res: Response) => {
  try {
    let { email, password } = req.body;

    const User: user | null = await user.findOne({ email: email });

    if (!User || !password) {
      return res.send({
        message: "usuario o contraseña incorrecto",
        valid: false,
      });
    }

    const valid = await bcrypt.compare(password, User.password);

    if (!valid) {
      return res.send({ message: "contraseña incorrecta", valid: false });
    }

    const update: any = await user
      .findOne({ email: User.email })
      .select("-password");
    let token = generateToken(User,18000);
    if (!token) {
      return res.send({
        message: "no se pudo validar al usuario",
        valid: false,
      });
    }

    res.send({ user: update, Token: token, valid: true });
  } catch (error) {
    console.log(error);
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const { email, password, username, picture } = req.body;
    const exist = await user.findOne({ email: email });
    if (exist) {
      return res.send({
        message: "El usuario ya existe en la base de datos",
        valid: false,
      });
    }

    if (password.length <= 6) {
      return res.send({
        message: "El password debe ser mayo a 6 caracteres",
        valid: false,
      });
    }
    let passwordHash = await bcrypt.hash(password, 8);

    const User = new user({ email, password: passwordHash, username, picture });
    User.save();

    const update: any = await user
      .findOne({ email: User.email })
      .select("-password");
    let token = generateToken(update, 18000);
    
    
    if (!token) {
      return res.send({
        message: "no se pudo validar al usuario",
        valid: false,
      });
    }
    enviar(update,"bienvenida")
    
    return res.send({ user: update, token: token, valid: true });
  } catch (error) {
    console.log(error);
  }
};

//Envio de correo con direccion y token de acceso al email registrado

const sendRest= async(req:Request ,res:Response)=>{
  const {email}=req.body
    try {
      const User= await user.findOne({email})
      if (!User) {
        return res.send({message:"No existe unusuario con ese correo electronico",valid:false})
      }
      let token= generateToken(User, 300) //expiracion en 5 minutos
      enviar(User,"password-reset",token)
      return res.send({message:"correo de recuperacion enviado", valid:true})

    } catch (error) {
      console.log("hola");
      console.log(error);
      
      
      
    }
}

const passwordReset=async(req:Request, res:Response)=>{
    const {password, token}=req.body
    
    try {
      let decode:any=jwt.verify(token, process.env.JWT_SECRET as string);
      let passwordHash = await bcrypt.hash(password, 8);
     
   if (decode) {
    const updateUser = await user.findOneAndUpdate(
      { _id: decode.id },
      {  password: passwordHash }
    );
    return res.send({valid:true, user:"contraseña actualizada"}) 
      
    }
    } catch (error) {
      res.send({message:"El token expiro",valid:false})
      
    }
}

export {
  register,
  login,
  sendRest,
  passwordReset
};
