import express from "express";
import "dotenv/config";
import connectDb from "./config/db.config";

connectDb();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
