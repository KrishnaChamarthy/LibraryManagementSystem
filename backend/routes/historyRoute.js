import express from "express";
import { addHistory, removeHistory, clearHistory } from "../controllers/historyController.js";
import authMiddleware from "../middleware/auth.js";

const historyRouter = express.Router();

historyRouter.post("/add", authMiddleware, addHistory);
historyRouter.post("/remove", authMiddleware, removeHistory);
historyRouter.post("/clear", authMiddleware, clearHistory);

export default historyRouter;