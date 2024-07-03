import React from 'react'
import "./Features.css"
import { assets } from '../../assets/assets'

const Features = () => {
  return (
    <div className='features'>
        <div className="item">
            <div className="item-img">
            <img src={assets.bookshelves} alt="" />
            </div>
            <div className="content">
                <h1>Extensive Book <br /> Collection</h1>
                <ul>
                    <li><span>Diverse Genres:</span><br />From fiction to non-fiction, classics to bestsellers, and children's books to academic texts, our library boasts a wide range of genres.</li>
                    <li><span>New Arrivals:</span><br />Regular updates with the latest releases and new additions to keep our collection fresh and exciting.</li>
                    <li><span>Rare and Special Collections:</span><br />Access to rare books, first editions, and special collections for enthusiasts and researchers.</li>
                </ul>
            </div>
        </div>
        <div className="item">
            <div className="item-img">
            <img src={assets.digital} alt="" />
            </div>
            <div className="content">
                <h1>Digital Resources</h1>
                <ul>
                    <li><span>E-books and Audiobooks:</span><br />A vast collection of digital books and audiobooks available for online borrowing.</li>
                    <li><span>Online Databases:</span><br />Access to numerous academic and research databases for comprehensive information.</li>
                    <li><span>Multimedia Content:</span><br />Videos, podcasts, and interactive content to enhance the learning experience.</li>
                </ul>
            </div>
        </div>
        <div className="item">
            <div className="item-img">
            <img src={assets.events} alt="" />
            </div>
            <div className="content">
                <h1>Community Programs and Events</h1>
                <ul>
                    <li><span>Workshops and Classes:</span><br />Educational workshops, language classes, and skill-building sessions.</li>
                    <li><span>Book Clubs:</span><br />Join various book clubs to discuss and explore different genres with fellow readers.</li>
                    <li><span>Children’s Programs:</span><br />Storytime sessions, educational activities, and interactive learning for kids.</li>
                </ul>
            </div>
        </div>
        <div className="item">
            <div className="item-img">
            <img src={assets.open_lib} alt="" />
            </div>
            <div className="content">
                <h1>Comfortable and Inviting Spaces</h1>
                <ul>
                    <li><span>Reading Nooks:</span><br />Cozy corners and comfortable seating areas for uninterrupted reading.</li>
                    <li><span>Study Areas:</span><br />Quiet and well-equipped study areas for students and researchers.</li>
                    <li><span>Community Spaces:</span><br />Open spaces for group discussions, collaborative work, and community events.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Features
