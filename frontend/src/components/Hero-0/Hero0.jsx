import React from "react";
import "./Hero0.css";
import backgroundImage from "../../assets/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.jpg";
import Contact from "../Contact/ContactForm.jsx";

const Hero0 = () => {
  return (
    <section>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="hero-text">
          Consultation,
          <br />
          Design <br />& Marketing
        </div>
        <Contact />
      </div>
    </section>
  );
};

export default Hero0;
