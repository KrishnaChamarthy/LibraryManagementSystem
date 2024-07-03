import React from "react";
import "./Hero.css";
import { assets } from "../../assets/assets";

const Hero = ({setIsLogin,setShowLogin}) => {
  return (
    <div className="hero">
      
    <div className="info">
        <h1>Welcome to <br/><span>Book Haven Library</span></h1>
        <h3>Your Sanctuary for <span>Knowledge</span> and <span>Learning</span></h3>
        <button onClick={()=> {
          setIsLogin(false);
          setShowLogin(true);
        }}>Get Started</button>
    </div>
    <img src={assets.hero} alt="" />
    </div>
  );
};

export default Hero;
