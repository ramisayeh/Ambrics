import React from "react";
import "./ws.css";
import pretendimg from "../../assets/pretend.jpg";
import industrieimg from "../../assets/industries.jpg";
import medicalimg from "../../assets/medical.jpg";
import hospiimg from "../../assets/hospital.jpg";
import businessesimg from "../../assets/smallb.jpg";
export default function Wands() {
  return (
    <div  className="wscon" data-aos="fade-up">
      <div className="text-container1">
        <h2  data-aos="fade-in"  id="ourwork">OUR WORK</h2>
        <h1 data-aos="fade-in"   id="ourwork2">
          Ambrics sarl can help you throughout yourdigital journey
        </h1>
      </div>
      <div  data-aos="fade-up" data-aos-easing="ease-in-sine" className="cont">
        <img   data-aos="fade-right"  data-aos-easing="ease-in-sine" className="image1" src={pretendimg} alt="" />
        <div className="text-ourwork">
     <span data-aos="fade-right"  data-aos-easing="ease-in-sine" >
          She looked at her student wondering if she could ever get through.
          "You need to learn to think for yourself," she wanted to tell him.
          "Your friends are holding you back and bringing you down." But she
          didn't because she knew his friends were all that he had and even if
          that meant a life of misery, he would never give them up. Peter always
          saw the world in black and white. There were two choices for every
          situation and you had to choose one of them. It was therefore terribly
          uncomfortable for him to spend time with Ashley. She saw the world in
          shades of gray with hundreds of choices to choose from in every
          situation.
          </span>
        </div>
      </div>
      <div className="text-container3">
        <h2 data-aos="fade-right"  data-aos-easing="ease-in-sine" id="ourservices">OUR SERVICES</h2>
        <h1 data-aos="fade-left"  data-aos-easing="ease-in-sine" className="ourservices2">We do everything and we do it better</h1>
        <h1  data-aos="fade-left"  data-aos-easing="ease-in-sine" className="ourservices2">
          Ambrics Sarl does it all We provide services for all businesses that
          may range from
        </h1>
      </div>
      <div  className="hero-container2">
        <figure data-aos="fade-up"  className="snip1573">
          <img src={industrieimg} alt="sample89" />
          <figcaption>
            <h3>Buy Now</h3>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure data-aos="fade-up"  className="snip1573">
          <img src={medicalimg} alt="sample89" />
          <figcaption>
            <h3>Buy Now</h3>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure data-aos="fade-up"  className="snip1573">
          <img src={hospiimg} alt="sample89" />
          <figcaption>
            <h3>Buy Now</h3>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure data-aos="fade-up"  className="snip1573">
          <img src={businessesimg} alt="sample89" />
          <figcaption>
            <h3>Buy Now</h3>
          </figcaption>
          <a href="#"></a>
        </figure>
      </div>
    </div>
  );
}
