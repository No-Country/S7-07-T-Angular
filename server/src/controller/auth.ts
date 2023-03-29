import { Request, Response } from "express";
import user from "../models/user.model";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generate.Token";

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
    let token = generateToken(User);
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
    let token = generateToken(update);
    if (!token) {
      return res.send({
        message: "no se pudo validar al usuario",
        valid: false,
      });
    }
    return res.send({ user: update, token: token, valid: true });
  } catch (error) {
    console.log(error);
  }
};

export { register, login };
