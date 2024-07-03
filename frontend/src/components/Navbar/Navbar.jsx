import React, { useState, useEffect, useContext } from 'react';
import "./Navbar.css";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ openSidebar, isLogin, setIsLogin, setShowLogin }) => {

  const [sticky, setSticky] = useState(false);
  const { token, setToken, user } = useContext(StoreContext);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const onLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <div className={sticky ? 'navbar dark' : 'navbar'}>
      <div className="left">
        <img src={assets.menu_icon} alt="" className='menu-icon' onClick={() => openSidebar()} />
        <img src={assets.logo} alt="" className='logo' />
        <p>Book Haven</p>
      </div>
      <div className="right">
        <ul>
          <li className='btn'>Help</li>
          <li className='separator'></li>
          {!token ? (
            <>
              <li className='btn' onClick={() => {
                setIsLogin(true);
                setShowLogin(true);
              }}>Sign In</li>
              <li><button className='signup' onClick={() => {
                setShowLogin(true);
                setIsLogin(false);
              }}>Sign Up</button></li>
            </>
          ) : (
            <li><button className='signup' onClick={() => {
              onLogout();

            }}>Log Out</button></li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
