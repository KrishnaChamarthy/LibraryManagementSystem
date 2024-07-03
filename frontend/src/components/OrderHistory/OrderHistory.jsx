import React, {useContext, useState, useEffect} from "react";
import "./OrderHistory.css";
import { StoreContext } from "../../context/StoreContext";

const OrderHistory = () => {
  const { user, getHistory } = useContext(StoreContext);
  const [history, sethistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const books = await getHistory();
      sethistory(books);
    };
    fetchHistory();
  }, [getHistory]);

  return (
    <div className="order-history">
      <div className="title">Order History</div>
      <div className="table">
        <div className="table-title">
          <p>Name</p>
          <p>Genre</p>
          <p>Issued On</p>
          <p>Returned On</p>
          <p>Status</p>
        </div>
        <hr />
        {history.map((book, index) => {
          return <React.Fragment key={index}>
            <div className="table-item">
              <p>{book.name}</p>
              <p>{book.genre}</p>
              <p>{book.issuedOn}</p>
              <p>{book.returnedOn}</p>
              <p>{book.status}</p>
            </div>
            <hr />
          </React.Fragment>;
        })}

        <div className="table-item">
          <p>Harry Potter and the Philosopher's Stone</p>
          <p>Fantasy Literature</p>
          <p>10/6/24</p>
          <p>17/6/24</p>
          <p>Returned</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default OrderHistory;
