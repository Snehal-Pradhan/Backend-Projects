import express from "express"
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;


const app = express();

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "../views"));

app.get("/",(req,res)=>{
    res.render("p2")
})  





app.listen(PORT,()=>{
    console.log(`app listening at port ${PORT}`)
})