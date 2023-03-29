import express, { json } from "express";
import "dotenv/config";
<<<<<<< HEAD
import connectDb from "./config/db.config";
<<<<<<< HEAD
import userRouter from "./routes/user.route";
=======
import { routerGeneral } from "./routes/routes";
>>>>>>> 39c320775c074a81e055e2df0e856ea39ba978f8
=======

import { routerGeneral } from "./routes/routes";
import connectDb from "./config/db.config";
>>>>>>> juan

connectDb();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(routerGeneral);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
