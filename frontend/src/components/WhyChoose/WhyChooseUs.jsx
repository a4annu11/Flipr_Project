import React from "react";
import "./WhyChooseUs.css";
import { LuPaintbrushVertical } from "react-icons/lu";
import { IoHome } from "react-icons/io5";
import { CgDollar } from "react-icons/cg";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="why-title">
        <h2>Why Choose Us?</h2>
        <p>Your trusted partner for all your needs</p>
      </div>
      <div className="why-features">
        <div className="feature">
          <div className="icon-container">
            <i className="icon-house">
              <IoHome />
            </i>
          </div>
          <h3>Potential ROI</h3>
          <p>
            Optimize your investments with strategies that provide consistent
            returns.
          </p>
        </div>
        <div className="feature">
          <div className="icon-container">
            <i className="icon-design">
              <LuPaintbrushVertical />
            </i>
          </div>
          <h3>Design</h3>
          <p>
            We deliver modern and functional designs tailored to your specific
            requirements.
          </p>
        </div>
        <div className="feature">
          <div className="icon-container">
            <i className="icon-marketing">
              {" "}
              <CgDollar />
            </i>
          </div>
          <h3>Marketing</h3>
          <p>
            Effective marketing solutions that drive results and grow your
            business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
