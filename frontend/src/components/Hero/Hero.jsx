import React from "react";
import "./Hero.css";
import mainImg from "../../assets/Ellipse 11.png";
import s1Img from "../../assets/Ellipse 12.png";
import s2Img from "../../assets/Ellipse 13.png";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Not Your Average Realtor</h1>
        <p className="hero-description">
          Find strategies to get the highest ROI with personalized service and
          designs. Let’s make your dream a reality.
        </p>
      </div>
      <div className="hero-images">
        <div className="hero-main-image">
          {/* Placeholder for Main Image */}
          <img src={mainImg} alt="" />
        </div>
        <div className="hero-small-images">
          <div className="hero-small-image">
            <img src={s1Img} alt="" />
          </div>
          <div className="hero-small-image">
            <img src={s2Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
