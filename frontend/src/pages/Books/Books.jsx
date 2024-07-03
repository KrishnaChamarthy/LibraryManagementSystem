import React, { useContext, useState } from "react";
import "./Books.css";
import { assets } from "../../assets/assets";
import BookList from "../../components/BookList/BookList";
import Dropdown from "../../components/Dropdown/Dropdown";
import BookInfo from "../../components/BookInfo/BookInfo";
import { StoreContext } from "../../context/StoreContext";

const Books = () => {
  const [category, setCategory] = useState("All");
  const [selectedBook, setSelectedBook] = useState(null);
  const {booksList} = useContext(StoreContext);
  
  

  const categories = [
    "All",
    "Fiction",
    "Non-Fiction",
    "Children's Books",
    "Others",
  ];

  const sub_categories = {
    "Fiction": ["Romance", "Science Fiction", "Fantasy", "Mystery", "Thriller", "Historical Fiction", "Horror", "Literary Fiction"],
    "Non-Fiction": ["Biography", "Memoir", "Self-Help", "True Crime", "History", "Science", "Philosophy", "Business", "Travel"],
    "Children's Books": ["Picture Books", "Middle Grade", "Young Adult"],
    "Others": ["Poetry", "Graphic Novels", "Essays", "Religion & Spirituality"]
  }

  const types = ["All", "Ebook", "Audiobook", "Hardcover", "Paperback"];


  return (
    <div className="books">
      {selectedBook !== null ?<BookInfo selectedBook={selectedBook} setSelectedBook={setSelectedBook}/>:<></>}
      <div className="navbar-padding"></div>
      <div className="books-container">
        <div className="search-bar">
          <form className="search">
            <input type="text" placeholder="Search" name="search" />
            <button>
              <img src={assets.search} alt="" />
            </button>
          </form>
          <Dropdown ele={categories} title="Categories" func={setCategory}/>
          <Dropdown ele={types} title="Type" />
        </div>
        {category === "All" ? (
          <div className="book-lists-container">
            <BookList title="New Arrivals" book_list={booksList} selectedBook={selectedBook} setSelectedBook={setSelectedBook}/>
            <BookList title="Popular Picks" book_list={booksList} />
           
          </div>
        ) : (
          <div className="book-lists-container">
            
            {sub_categories[category].map((item, index) => {
              return <BookList key={index} title={item} book_list={booksList} />
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
