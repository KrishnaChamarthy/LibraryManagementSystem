import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
    name: {type: String, required: true},
    author: {type:String, required: true},
    genre: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    rating: {type: Number, required: true}
})

const booksModel = mongoose.models.books || mongoose.model("books", booksSchema);

export default booksModel;