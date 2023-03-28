import express from "express";
import "dotenv/config";
import connectDb from "./config/db.config";
import userRouter from "./routes/user.route";

connectDb();

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
