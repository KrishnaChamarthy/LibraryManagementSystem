import React from 'react'
import "./BookInfo.css"
import { assets } from '../../assets/assets'

const BookInfo = ({selectedBook, setSelectedBook}) => {
  return (
    <div className='book-info-popup'>
        <div className="book-info-container">
          <div className="book-info-title">
            <h2>Book Infomation</h2>
            <img onClick={() => {
              setSelectedBook(null);
            }} src={assets.black_cross_icon} alt="Close" />
          </div>
          {selectedBook.title}
        </div>
    </div>
  )
}

export default BookInfo
