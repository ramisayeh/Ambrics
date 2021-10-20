import React, { useState } from "react";
import "./Cert.css";
import AI from "../../assets/AI.jpg";
import items from "../../assets/items.jpg";
import ecommerce from "../../assets/ecommerce.jpg";
import work from "../../assets/work.jpg";
import desk from "../../assets/desk.jpg";

export default function Cert() {
  const [currentimg, setcurrentimg] = useState(items);
  const changeimg = (img) => {
    setcurrentimg(img);
  };
  return (
    <>
      <div className="cert-title">CERTIFICATION</div>
      <div className="cert-cont">
        <div className="cert-hov">
          <span onMouseEnter={() => changeimg(items)}>Branding & Identity</span>
          <span onMouseEnter={() => changeimg(desk)}>
            {" "}
            Websites & Digital platforms
          </span>
          <span onMouseEnter={() => changeimg(ecommerce)}>
            {" "}
            E-Commerce Experiences{" "}
          </span>
          <span onMouseEnter={() => changeimg(work)}>
            Performance Marketing
          </span>
          <span onMouseEnter={() => changeimg(AI)}>VR & AR Environment</span>
        </div>
        <div className="cert-slider">
          <img className="cert-pic" src={currentimg} />
        </div>
      </div>
    </>
  );
}
