import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Account from './pages/Account/Account';
import Books from './pages/Books/Books';
import History from './pages/History/History';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} isLogin={isLogin} />}
      <Navbar openSidebar={toggleSidebar} setShowLogin={setShowLogin} isLogin={isLogin} setIsLogin={setIsLogin} />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} activePage={activePage} setActivePage={setActivePage} />
      <Routes>
        <Route path="/" element={<Home setShowLogin={setShowLogin} setIsLogin={setIsLogin} />} />
        <Route path="/account/*" element={<Account />} />
        <Route path="/books/*" element={<Books />} />
        <Route path="/history/*" element={<History />} />
        <Route path="/notifications/*" element={<div>Notifications</div>} />
        <Route path="/feedback/*" element={<div>Feedback</div>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
