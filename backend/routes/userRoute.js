import express from "express";
import { getUserInfo, loginUser, registerUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/info", getUserInfo);

export default userRouter;