import jwt from "jsonwebtoken";

interface user {
  _id: string;
  username: string;
  email: string;
  password: string;
  picture?: string;
  state: Boolean;
}

function generateToken(user: user) {
  if (user) {
    let token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET as string, //confirmamos que es un string lo que va a recibir
      {
        expiresIn: 18000, // 5 hours in seconds
      }
    );
    return token;
  }
}

export { generateToken };
