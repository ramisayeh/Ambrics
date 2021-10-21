import React, { useState } from "react";
import "./Cert.css";
import AI from "../../assets/AI.jpg";
import desk from "../../assets/desk.jpg";
import items from "../../assets/items.jpg";
import ecommerce from "../../assets/ecommerce.jpg";
import work from "../../assets/work.jpg";


export default function Cert() {
  const [currentimg, setcurrentimg] = useState(items);
  const changeimg = (img) => {
    setcurrentimg(img);
  };
  return (
    <>
      <div className="cert-title"> <span data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >CERTIFICATION </span></div>
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
