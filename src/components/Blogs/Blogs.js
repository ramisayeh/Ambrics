import "./Blogs.css";
import "../workandservices/ws.css";
import work from "../../assets/work.jpg";
import ITEMS from "../../assets/items.jpg";
import AI from "../../assets/AI.jpg";
import VR from "../../assets/VR.jpg";

export default function Blogs() {
  return (
    <div className="blog-cont">
      <div className="blogs-text-container">Blogs</div>
      <div className="blogs-images">
        <figure className="snip1033">
          <img className='blogs-images' src={ITEMS} alt="sample20" />
          <figcaption>
            <div className="left">
              <h3>read</h3>
            </div>
            <div className="right">
              <h3 className="white">blog</h3>
            </div>
          </figcaption>
          <div className="center">
            <i className="ion-ios-loop-strong"></i>
          </div>
          <a></a>
        </figure>
        <figure className="snip1033">
          <img className='blogs-images' src={work} alt="sample20" />
          <figcaption>
            <div className="left">
              <h3>read</h3>
            </div>
            <div className="right">
              <h3 className="white">blog</h3>
            </div>
          </figcaption>
          <div className="center">
            <i className="ion-ios-loop-strong"></i>
          </div>
          <a></a>
        </figure>
        <figure className="snip1033">
          <img className='blogs-images' src={AI} alt="sample20" />
          <figcaption>
            <div className="left">
              <h3>read</h3>
            </div>
            <div className="right">
              <h3 className="white">blog</h3>
            </div>
          </figcaption>
          <div className="center">
            <i className="ion-ios-loop-strong"></i>
          </div>
          <a></a>
        </figure>
        <figure className="snip1033">
          <img className='blogs-images' src={VR} alt="sample20" />
          <figcaption>
            <div className="left">
              <h3>read</h3>
            </div>
            <div className="right">
              <h3 className="white">blog</h3>
            </div>
          </figcaption>
          <div className="center">
            <i className="ion-ios-loop-strong"></i>
          </div>
          <a></a>
        </figure>
      </div>
      <div className="blogs-text-container2">
        <h2>
          Let's keep in touch, tell us about your business and the goals you
          wish to achieve from
          <br />
          our services, and we will make those goals a reality
        </h2>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
