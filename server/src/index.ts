import express, { json } from "express";
import dotenv from "dotenv"
import connectDb from "./config/db.config";
import {routerGeneral} from "./rotues/routes"
dotenv.config({path:"../.env"})

connectDb();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(routerGeneral)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
