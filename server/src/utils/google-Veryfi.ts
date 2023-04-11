import {OAuth2Client} from 'google-auth-library' 
import dotenv from 'dotenv';
dotenv.config();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT);

interface TokenPayload {
    name?: string;
    picture?: string;
    email?: string;
    
  }
        async function verifyGoogle(token:string="") {
            try {
          const ticket = await client.verifyIdToken({
              idToken: token,
              audience: process.env.GOOGLE_CLIENT,  // Specify the CLIENT_ID of the app that accesses the backend
              // Or, if multiple clients access the backend:
              //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
          });
          const {name, picture, email}  = ticket.getPayload() as TokenPayload;
          
          return{
            username:name,
            picture,
            email
          }
    } catch (error:any) {
         if(error.message== "The verifyIdToken method requires an ID Token"){
            console.log("Esperando el id_token");
        
        }else{
            console.log(error.message);
        
        }
    }}


verifyGoogle()

export {verifyGoogle}