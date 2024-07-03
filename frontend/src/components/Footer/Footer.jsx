import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <div className="footer-company">
                    <img src={assets.logo} alt="" />
                    <p>Book Haven</p>
                </div>
                
                <p>Book Haven Library is more than just a library. It is a sanctuary for knowledge and learning, a place where ideas come to life and dreams are nurtured. Join us in our journey to create a better, more informed, and connected world.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-123-456-7890</li>
                    <li>contact@bookhaven.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 © BookHaven.com - All Rights Reserved
        </p>
    </div>
  )
}

export default Footer
