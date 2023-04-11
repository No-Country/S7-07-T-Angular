import * as nodemailer from 'nodemailer';
import User from "../models/user.model";

const enviar = (user:User | undefined, template:string) => {
    
    let templates = [
      {
        id: "bienvenida",
        subject: "Bienvenido a ClasseMote",
        text: "Bienvenido a ClasseMote",
        html: `<h1>${user?.username}</h1>`,
      }
     
    ];
  
    let datos = templates.filter((dato) => dato.id === template);
  
  
    if (datos.length == 0) {
      return console.log("No se ha seleccionado ningun template");
    }
    
    let transport = nodemailer.createTransport({
      host: "smtp.gmail.com", //Servidor del email.
      port: 25,
      secure: false,
      auth: {
        user: process.env.user,
        pass: process.env.pass,
      },
    });

 
    if (!user) {
        return console.log("Usuario no definido");
      }
    
    
    let mailOptions = {
      form: "remitente",
      to: user.email,
      subject: datos[0].subject,
      html: datos[0].html,
    };
  
    transport.sendMail(mailOptions, (error) => {
      if (error) {
        console.log(error.message);
        
        
      } else {
        console.log("email enviado");
      }
    });
  };
  
  export { enviar };