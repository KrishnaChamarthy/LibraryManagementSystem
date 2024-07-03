import React, { useContext, useEffect } from 'react';
import './Account.css';
import { assets } from '../../assets/assets';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import PersonalInfo from '../../components/PersonalInfo/PersonalInfo';
import IssuedBooks from '../../components/IssuedBooks/IssuedBooks';
import OrderHistory from '../../components/OrderHistory/OrderHistory';
import GiftCards from '../../components/GiftCards/GiftCards';
import { StoreContext } from '../../context/StoreContext';

const Account = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const {user} = useContext(StoreContext);

  useEffect(()=>{
    navigate("/account/personal-info")
  }, [])

  return (
    <div className='account'>
      <div className="container">
        <div className="heading">
          <p>My Account</p>
          <button>Sign Out</button>
        </div>
        <hr />
        {user?<div className="content">
          <div className="content-left">
            <div className="avatar">
              <img src={assets.avatar} alt="" />
              <div className="name">{user.name}</div>
              <div className="email">{user.email}</div>
            </div>
            <ul>
              <li className={location.pathname === "/account/personal-info" ? 'selected' : 'not-selected'}>
                <Link to="/account/personal-info">Personal Information</Link>
              </li>
              <li className={location.pathname === "/account/issued-books" ? 'selected' : 'not-selected'}>
                <Link to="/account/issued-books">Issued Books</Link>
              </li>
              <li className={location.pathname === "/account/order-history" ? 'selected' : 'not-selected'}>
                <Link to="/account/order-history">Order History</Link>
              </li>
              <li className={location.pathname === "/account/gift-cards" ? 'selected' : 'not-selected'}>
                <Link to="/account/gift-cards">Gift Cards</Link>
              </li>
            </ul>
          </div>
          <div className="content-right">
            <Routes>
              <Route path="personal-info" element={<PersonalInfo />} />
              <Route path="issued-books" element={<IssuedBooks />} />
              <Route path="order-history" element={<OrderHistory />} />
              <Route path="gift-cards" element={<GiftCards />} />
            </Routes>
          </div>
        </div>:<div>Please Login First</div>}
      </div>
    </div>
  );
}

export default Account;
