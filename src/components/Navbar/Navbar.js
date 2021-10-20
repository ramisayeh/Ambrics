import React from "react";
import img from "../../assets/logo.png";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo">
        <img className="img" src={img} alt="" />
      </div>
      <div className="navs">
        <div className="nav-btn">About us</div>
        <div className="nav-btn">MKG services</div>
        <div className="nav-btn">Web & Mobile</div>
        <div className="nav-btn">Business</div>
        <div className="nav-btn">Services</div>
        <div className="nav-btn">Our work</div>
        <div className="nav-btn">Media</div>
        <div className="nav-btn">Carrers</div>
        <div className="contact">Contact Us</div>
      </div>
    </div>
  );
}
