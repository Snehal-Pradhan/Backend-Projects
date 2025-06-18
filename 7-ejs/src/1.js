import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

const todos = [
  { task: "Learn EJS templates", done: true },
  { task: "Build a Node.js server", done: true },
  { task: "Style the todo list with CSS", done: false },
  { task: "Add task completion toggle", done: false },
  { task: "Implement delete functionality", done: false },
  { task: "Connect to MongoDB database", done: false },
  { task: "Create user authentication", done: false },
  { task: "Add due dates to tasks", done: false },
  { task: "Make the UI responsive", done: false },
  { task: "Deploy to Heroku/Render", done: false }
];

const app = express();

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "../views")); 

app.get("/",(req,res)=>{
    res.render("p1",{todos})
})



app.listen(PORT,()=>{
    console.log(`app listening at port ${PORT}`)
});
