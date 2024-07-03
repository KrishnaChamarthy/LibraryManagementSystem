import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js"
import booksRouter from "./routes/booksRoute.js";
import issuedRouter from "./routes/issuedRoute.js";
import historyRouter from "./routes/historyRoute.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/user", userRouter);
app.use("/images", express.static("uploads"));
app.use("/api/books", booksRouter);
app.use("/api/issued", issuedRouter);
app.use("/api/history", historyRouter);

app.get("/", (req, res)=>{
    res.send("API WORKING");
})


app.listen(port, ()=> {
    console.log(`Server started on port http://localhost:${port}`);
})