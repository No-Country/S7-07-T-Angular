import express, { json } from "express";
import "dotenv/config";

import { routerGeneral } from "./routes/routes";
import connectDb from "./config/db.config";

connectDb();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(routerGeneral);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
