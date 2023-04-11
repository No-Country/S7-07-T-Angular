import express from "express";
import "dotenv/config";
import connectDb from "./config/db.config";
import { routerGeneral } from "./routes/routes";
import fileUpload from "express-fileupload";

connectDb();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.static("public"))
// middleware para poder reconocer imagenes
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    createParentPath: true,
  })
);
app.use(routerGeneral);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
