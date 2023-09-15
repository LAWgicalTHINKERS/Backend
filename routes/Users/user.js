//js
import express from "express";
import  {register,login} from "../../controllers/Users/loginController.js";

const router = express.Router();
// router.get("/register", registerView);


// Define the register API route
router.post("/register",register);
router.post("/login", login);

export default router ;
