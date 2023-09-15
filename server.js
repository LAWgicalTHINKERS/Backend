import express from "express";
import cors from "cors";
import { render } from "ejs";
import {config} from "dotenv";
import { connectDB } from "./data/database.js";
import loginRouter from "./routes/login/login.js";

const app = express();
const port = process.env.PORT || 5000;
//Mongodb connection
connectDB();

//setting view engines
app.set("view engine", "ejs");

//middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/login",loginRouter);

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
