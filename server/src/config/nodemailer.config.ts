import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_SECRET,
    pass: process.env.GOOGLE_SECRET,
  },
});

// let mailGenerator = new Mailgen({
//   theme: "default",
//   product: {
//     name: "mailgen",
//     link: "https://mailgen.js/",
//   },
// });

transporter
  .verify()
  .then(() => console.log("connected"))
  .catch(() => console.log("algo malo paso en la conexion"));

export { transporter };
