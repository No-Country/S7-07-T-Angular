import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config({ path: '../.env' });

main().catch(err => console.log(err));
let url:string|undefined ="mongodb+srv://miguel:WFzvSiZaLvf2QA9J@fit.gviaw7j.mongodb.net/?retryWrites=true&w=majority"

async function main() {
    
  await mongoose.connect(url ?? "");
  console.log("conectado a la base de datos");
  
  
  

}

export default main