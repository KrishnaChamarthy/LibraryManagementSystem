import booksModel from "../models/booksModel.js";
import fs from "fs";


const addBook = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const book = new booksModel({
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre,
        description: req.body.description,
        rating: req.body.rating,
        image: image_filename
    })

    try {
        await book.save();
        res.json({
            success: true,
            message:"Book Added"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error"
        });
    }
}


const listBooks = async (req, res) => {
    try {
        const books = await booksModel.find({});
        res.json({
            success: true,
            data: books
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error"
        })
    }
}

const findBook = async (req, res) => {
    try {
        const book = await booksModel.findById(req.body.id);
        res.json({
            success:true,
            data: book
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:"Error"
        })
    }
}

const removeBook = async (req, res) => {
    try {
        const book = await booksModel.findById(req.body.id);
        fs.unlink(`uploads/${book.image}`, ()=> {});

        await booksModel.findByIdAndDelete(req.body.id);
        res.json({
            success: true,
            message: "Book removed"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error"
        })
    }
}

export {addBook, listBooks, removeBook, findBook}