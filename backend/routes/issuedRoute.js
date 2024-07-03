import express from "express";
import { addIssued, removeIssued } from "../controllers/issuedController.js";
import authMiddleware from "../middleware/auth.js";

const issuedRouter = express.Router();

issuedRouter.post("/add", authMiddleware, addIssued);
issuedRouter.post("/remove", authMiddleware, removeIssued);

export default issuedRouter;