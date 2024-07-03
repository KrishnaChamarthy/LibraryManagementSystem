import React, { useContext, useEffect, useState } from 'react';
import "./History.css";
import { StoreContext } from '../../context/StoreContext';

const History = () => {
  const { getFullHistory, url } = useContext(StoreContext);
  const [fullHistory, setFullHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const books = await getFullHistory();
      setFullHistory(books);
    };
    fetchHistory();
  }, [getFullHistory]);

  return (
    <div className='history'>
      <div className="container">
        <div className="heading">
          <p>Reading History</p>
          <button>Clear History</button>
        </div>
        <hr />
        <div className="reading-info">
          <p>Books Read: <span>{fullHistory.length}</span></p>
          <p>Favourite Genre: <span>Mystery</span></p>
        </div>
        <hr />
        <div className="history-table">
          <div className="table-title">
            <p>Name</p>
            <p>Cover Image</p>
            <p>Author</p>
            <p>Genre</p>
            <p>Date Borrowed</p>
            <p>Date Returned</p>
            <p>Reading Status</p>
          </div>
          <hr />
          {fullHistory.map((item, index) => (
            <React.Fragment key={index}>
              <div className="table-row">
                <p>{item.name}</p>
                <div className="book-cover">
                  <img src={`${url}/images/${item.image}`} alt={item.name} />
                </div>
                <p>{item.author}</p>
                <p>{item.genre}</p>
                <p>{item.issuedOn}</p>
                <p>{item.returnedOn}</p>
                <p>{item.status}</p>
              </div>
              <hr />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
