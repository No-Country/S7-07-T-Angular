import express, { json } from "express";
import "dotenv/config";
import connectDb from "./config/db.config";
<<<<<<< HEAD
import userRouter from "./routes/user.route";
=======
import { routerGeneral } from "./routes/routes";
>>>>>>> 39c320775c074a81e055e2df0e856ea39ba978f8

connectDb();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(routerGeneral);

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
