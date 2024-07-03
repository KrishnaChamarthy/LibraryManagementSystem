import React, { useContext, useEffect, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin, isLogin }) => {
  const [currState, setCurrState] = useState('Sign Up');

  const {url, setToken, setUser} = useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    if (isLogin) {
      setCurrState('Login');
    } else {
      setCurrState('Sign Up');
    }
  }, [isLogin]);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({
      ...data,
      [name]: value
    }));
  }

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login"){
      newUrl += "/api/user/login"
    }
    else{
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success){      
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    }else{
      alert(response.data.message);
    }
  }


  return (
    <div className='login-popup' >
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.black_cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && <input name='name' onChange={onChangeHandler} type="text" placeholder='Your name' required />}
          <input name='email' onChange={onChangeHandler} type="email" placeholder='Your email' required />
          <input name='password' onChange={onChangeHandler} type="password" placeholder='Password' required />
        </div>
        <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login"
          ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>}
      </form>
    </div>
  );
}

export default LoginPopup;
