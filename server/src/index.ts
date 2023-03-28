import express from "express";
import dotenv from "dotenv"
import db from "./db/config"
dotenv.config({ path: '../.env' });
db


const app = express();

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
