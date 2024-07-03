import React from "react";
import "./AboutUs.css";
import { assets } from "../../assets/assets";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={assets.about_us} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Your Sanctuary for Knowledge and Learning</h2>
        <p>
          At Book Haven Library, we believe that every book is a doorway to a
          world of knowledge, imagination, and discovery. Our mission is to
          provide a welcoming and inspiring space where readers of all ages can
          explore, learn, and grow. Whether you are a student seeking resources
          for your studies, a professional looking to enhance your skills, or
          simply a lover of literature, our library is here to serve your needs.
        </p>
        <p>
          Founded with a passion for books and a commitment to community, Book
          Haven Library has grown into a beloved institution. Our founders
          envisioned a place where individuals could come together to share
          ideas, foster creativity, and support one another in their learning
          journeys. Today, we are proud to be a cornerstone of our community,
          offering a diverse collection of books, digital resources, and
          engaging programs for all.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
