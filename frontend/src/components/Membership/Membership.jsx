import React from 'react'
import "./Membership.css"
import { assets } from '../../assets/assets'

const Membership = ({ setIsLogin, setShowLogin}) => {

    const handleJoinUsClick = () => {
        setIsLogin(false);
        setShowLogin(true);
      };

  return (
    <div className='membership'>
      <div className="diamond-icon">
        <img src={assets.diamond} alt="" />
      </div>
      <div className="membership-container">
        <ul>
            <li>
                <div className="item-left">
                    <img src={assets.books_black} alt="" />
                </div>
                <div className="item-right">
                    <span>Access to Extensive Collection</span>
                    <p>Borrow books, e-books, and audiobooks from our vast collection.</p>
                </div>
            </li>
            <li>
                <div className="item-left">
                    <img src={assets.events_black} alt="" />
                </div>
                <div className="item-right">
                    <span>Exclusive Events</span>
                    <p>Early access to author events, workshops, and special programs.</p>
                </div>
            </li>
            <li>
                <div className="item-left">
                    <img src={assets.community} alt="" />
                </div>
                <div className="item-right">
                    <span>Community Programs</span>
                    <p>Participate in book clubs, educational classes, and community events.</p>
                </div>
            </li>
            <li>
                <div className="item-left">
                    <img src={assets.study} alt="" />
                </div>
                <div className="item-right">
                    <span>Study and Work Spaces</span>
                    <p>Enjoy quiet study areas, comfortable reading nooks, and collaborative spaces.</p>
                </div>
            </li>
            <li>
                <div className="item-left">
                    <img src={assets.discount} alt="" />
                </div>
                <div className="item-right">
                    <span>Discounts and Offers</span>
                    <p>Avail discounts on event tickets, workshops, and library merchandise.</p>
                </div>
            </li>
            <li>
                <div className="item-left">
                    <img src={assets.user} alt="" />
                </div>
                <div className="item-right">
                    <span>Personalized Recommendations</span>
                    <p>Receive book recommendations tailored to your interests.</p>
                </div>
            </li>
        </ul>
      </div>
      <button className='join-btn' onClick={handleJoinUsClick}>Join Us</button>

    </div>
  )
}

export default Membership
