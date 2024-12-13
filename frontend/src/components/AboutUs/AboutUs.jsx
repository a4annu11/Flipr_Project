import React from "react";
import "./About.css";
import bigImg from "../../assets/pexels-andres-ayrton-6578391.svg";
import s2img from "../../assets/pexels-fauxels-3182834.svg";
import s1img from "../../assets/pexels-brett-sayles-2881232.svg";

const AboutUs = () => {
  return (
    <section className="about">
      <div className="img-container">
        <div className="small-img">
          <img src={s1img} alt="" />
        </div>
        <div className="big-img">
          <img src={bigImg} alt="" />
        </div>
        <div className="small-img2">
          <img src={s2img} alt="" />
        </div>
      </div>
      <div className="aboutsection">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          iusto quisquam incidunt ex exercitationem inventore eligendi modi
          voluptate at ab ipsum hic, magnam nihil aut voluptatem labore fuga?
          Porro, repudiandae.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
