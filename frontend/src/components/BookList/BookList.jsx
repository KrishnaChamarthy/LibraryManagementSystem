import React, { useContext } from "react";
import "./BookList.css";
import { StoreContext } from "../../context/StoreContext";

const BookList = ({ title, book_list, selectedBook, setSelectedBook }) => {
  
  const {url } = useContext(StoreContext);     
  


  return (
    <div className="book-list">
      <div className="list-title">{title}</div>
      <div className="book-list-container">
        {book_list.map((book, index) => (
          <div className="book-item" key={index} onClick={()=>{
            setSelectedBook(book);
          }}>
            <img src={url + "/images/" + book.image} alt={book.name} />
            <div className="book-info">
              <div className="book-title"><span>{book.name}</span></div>
              <hr />
              <div className="book-author">{book.author}</div>
              <div className="book-genre">{book.genre}</div>
              <div className="book-rating">{book.rating}/5</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
