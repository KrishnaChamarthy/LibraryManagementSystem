import React from 'react';
import './Sidebar.css'; 
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose, setActivePage, activePage }) => {

    const handleClick = (name) => {
        setActivePage(name);
        onClose(false);
    }

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <img src={assets.cross_icon} alt="" className='cross' onClick={() => onClose()}/>
      <hr />
      <div className="sidebar-content">
        <ul>
            <Link  to="/" className={activePage==="Home"?"active":""} onClick={() => handleClick("Home")}><img src={assets.home} alt="" />Home</Link>
            <Link to="/account" className={activePage==="Account"?"active":""} onClick={() => handleClick("Account")}><img src={assets.account} alt="" />My Account</Link>
        </ul>
        <hr />
        <ul>
        <Link  to="/books" className={activePage==="Books"?"active":""} onClick={() => handleClick("Books")}><img src={assets.books} alt="" />Browse Books</Link>
        <Link  to="/history" className={activePage==="History"?"active":""} onClick={() => handleClick("History")}><img src={assets.history} alt="" />Reading History</Link>
        </ul>
        <hr />
        <ul>
        <Link to="/notifications" className={activePage==="Notifications"?"active":""} onClick={() => handleClick("Notifications")}><img src={assets.notifications} alt="" />Notifications</Link>
        <Link to="/feedback" className={activePage==="Feedback"?"active":""} onClick={() => handleClick("Feedback")}><img src={assets.feedback} alt="" />Feedback</Link>
        </ul>
        <hr />
      </div>
      <div className="logout">
        <img src={assets.logout} alt="" />
        Logout
      </div>
    </div>
  );
};

export default Sidebar;