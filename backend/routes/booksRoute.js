import express from "express";
import { addBook, findBook, listBooks, removeBook } from "../controllers/booksController.js";
import multer from "multer";

const booksRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({storage: storage})

booksRouter.post("/add", upload.single("image"), addBook);
booksRouter.get("/list", listBooks);
booksRouter.post("/remove", removeBook);
booksRouter.post("/find", findBook);

export default booksRouter;