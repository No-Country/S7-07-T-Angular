import { Request, Response } from "express";
import user from "../models/user.model";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generate.Token";
import otpGenerator from "otp-generator";
import { transporter } from "../config/nodemailer.config";
import { enviar } from "../utils/email";

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
    enviar(update,"bienvenida")
    
    return res.send({ user: update, token: token, valid: true });
  } catch (error) {
    console.log(error);
  }
};

// Se genera un codigo de verificacion con el que el usuario podra cambiar su contraseña

const generateOTP = async (req: Request, res: Response) => {
  req.app.locals.OTP = await otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  const { username } = req.query;

  const User: UserType | null = await user.findOne({ username });

  let code = req.app.locals.OTP;

  let mail = {
    from: process.env.GMAIL_SECRET,
    to: User?.email,
    subject: "Message title",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>",
  };

  transporter
    .sendMail(mail)
    .then(() =>
      res.status(201).json({
        msg: "Email enviado exitosamente",
        code,
      })
    )
    .catch(() => res.status(400).send({ error: "Algo malo paso" }));
};

const verifyOTP = (req: Request, res: Response) => {
  const { code }: any = req.query;
  if (parseInt(req.app.locals.OTP) === parseInt(code)) {
    req.app.locals.OTP = null;
    req.app.locals.resetSession = true;
    return res.status(200).send({ msg: "Verification succesfull" });
  }
  return res.status(400).send({ error: "OTP verification code invalid" });
};

const createResetSession = async (req: Request, res: Response) => {
  if (req.app.locals.resetSession) {
    req.app.locals.resetSession = false;
    return res.status(200).send({ msg: "Access concibed" });
  }
  return res.status(440).send({ error: "Session expired" });
};

// Si la session es exitosa se redirecciona el cliente a una pagina para poder cambiar su contraseña

const resetPassword = async (req: Request, res: Response) => {
  try {
    if (!req.app.locals.resetSession) {
      return res.status(440).send({ error: "Session expired" });
    }
    const { username, password } = req.body;

    const User = await user.findOne({ username });

    if (!user) {
      return res.status(404).send({ error: "No user found" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    await user.findOneAndUpdate({ username }, { password: hash });

    req.app.locals.resetSession = false;
    return res.status(201).send({ msg: "Password updated succesfully" });
  } catch (error) {
    return res.status(401).send({ error });
  }
};

export {
  register,
  login,
  generateOTP,
  verifyOTP,
  createResetSession,
  resetPassword,
};
