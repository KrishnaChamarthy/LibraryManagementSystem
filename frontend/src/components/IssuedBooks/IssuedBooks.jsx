import React, { useContext, useEffect, useState } from "react";
import "./IssuedBooks.css";
import { StoreContext } from "../../context/StoreContext";

const IssuedBooks = () => {
  const { user, getIssued } = useContext(StoreContext);
  const [issuedBooks, setIssuedBooks ] = useState([]);

  useEffect(() => {
    const fetchIssuedBooks = async () => {
      const books = await getIssued();
      setIssuedBooks(books);
    };
    fetchIssuedBooks();
  }, [getIssued]);

  return (
    <div className="issued-books">
      <div className="title">Issued Books</div>
      <div className="table">
        <div className="table-title">
          <p>Name</p>
          <p>Genre</p>
          <p>Issued On</p>
          <p>Return By</p>
        </div>
        <hr />
        {issuedBooks.map((book, index) => (
          <React.Fragment key={index}>
            <div className="table-item">
              <p>{book.name}</p>
              <p>{book.genre}</p>
              <p>{book.issuedOn}</p>
              <p>{book.returnBy}</p>
            </div>
            <hr />
          </React.Fragment>
        ))}

        <div className="table-item">
          <p>Harry Potter and the Philosopher's Stone</p>
          <p>Fantasy Literature</p>
          <p>10/6/24</p>
          <p>17/6/24</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default IssuedBooks;
