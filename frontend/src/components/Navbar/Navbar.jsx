import React from "react";
import logo from "../../assets/logo.jpg";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="nav-item">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="n-names">
          <ul>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#clients">Clients</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#newsletter">Newsletter</a>
            </li>
            <button className="admin-btn" onClick={() => navigate("/admin")}>
              Admin
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
