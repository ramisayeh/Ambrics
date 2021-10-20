import Navbar from "../Navbar/Navbar.js";
import vid from "../../assets/video.mp4";
import "./Home.css";
import Wands from "../workandservices/ws.js";
import Blogs from "../Blogs/Blogs.js";
import Footer from "../footer/footer.js";
import Cert from "../Cert/Cert.js";
export default function Home() {
  return (
    <div className="home-cont">
      <Navbar />
      <div className="mid-part">
        <div className="video">
          <video loop autoPlay width="100%" height="100%">
            <source src={vid} type="video/mp4" />
          </video>
        </div>
        <div className="text">
          <div className="text-part2">
            <span>
              We Do Everything<span className="dots">...</span>
            </span>
            <br />
            {/* <span></span><br/> */}
            <span>We Do it Better</span>
            <br />
          </div>
        </div>
      </div>
      <Wands className='wands'/>
      <Cert className="cert"/>
      <Blogs />
      <Footer/>
    </div>
  );
}
