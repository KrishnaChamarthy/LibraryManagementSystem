import React, { useState } from "react";
import "./Dropdown.css";
import { assets } from "../../assets/assets";

const Dropdown = ({ele, title, func}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    func(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="content" onClick={toggleDropdown}>
        <p  className="dropdown-toggle">
          {title}
        </p>
        <img src={assets.down} alt="" />
      </div>

      {isOpen && (
        <ul className="dropdown-menu">
          {ele.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
