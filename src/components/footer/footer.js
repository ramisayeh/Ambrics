import React from "react";
import "./footer.css";
import miniLogo from '../../assets/lillogo.png'
export default function Footer() {
  return (
    <div className='footer-container'>
<footer className="new_footer_area bg_color">
            <div className="new_footer_top">
                <div className="footer-subcontainer">
                    <div className="huh">
                        <div className="contact-container">
                        <div className="input-container">
          <input className="contact-input" /> <br />
          <button className="contactb"> Hover me</button>
          <br />
        </div>
        <div id="checkbox-container">
          <input type="checkbox" id="box-1" />
          <label id="newsletter-label" htmlFor="box-1">
            I agree to my email address being stored and used to receive DAN
            monthly newsletter.{" "}
          </label>
        </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div >
                          <ul className="list-unstyled f_list">
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Expertise</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                        <div >
                                <ul className="list-unstyled f_list">
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Work</a></li>
                                <li><a href="#">Site map</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div>
                            <img src={miniLogo} height={100} width={100} />
                                <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                <div className="f_social_icon">
                                    <a href="#" className="fab fa-facebook"></a>
                                    <a href="#" className="fab fa-twitter"></a>
                                    <a href="#" className="fab fa-linkedin"></a>
                                    <a href="#" className="fab fa-pinterest"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mb-0">© Ambrics Inc.. 2021 All rights reserved.</p>
        </footer>
    </div>
  );
}
