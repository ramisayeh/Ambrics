import "./Blogs.css";
import work from '../../assets/work.jpg';
import ITEMS from '../../assets/items.jpg';
import AI from '../../assets/AI.jpg';
import VR from '../../assets/VR.jpg';

export default function Blogs() {
  return (
    <div className="blog-cont" >
    <div className='blogs-text-container'>
        <h2>Blogs</h2>
    </div>
    <div className='blogs-images'>
    <figure className="snip1033">
  <img src={ITEMS} alt="sample20" />
  <figcaption>
    <div className="left">
      <h3>read</h3>
    </div>
    <div className="right">
      <h3 className="white">blog</h3>
    </div>
  </figcaption>
  <div className="center"><i className="ion-ios-loop-strong"></i></div>
  <a href="#"></a>
</figure>
<figure className="snip1033">
  <img src={work} alt="sample20" />
  <figcaption>
    <div className="left">
      <h3>read</h3>
    </div>
    <div className="right">
      <h3 className="white">blog</h3>
    </div>
  </figcaption>
  <div className="center"><i className="ion-ios-loop-strong"></i></div>
  <a href="#"></a>
</figure>
<figure className="snip1033">
  <img src={AI} alt="sample20" />
  <figcaption>
    <div className="left">
      <h3>read</h3>
    </div>
    <div className="right">
      <h3 className="white">blog</h3>
    </div>
  </figcaption>
  <div className="center"><i className="ion-ios-loop-strong"></i></div>
  <a href="#"></a>
</figure>
<figure className="snip1033">
  <img src={VR} alt="sample20" />
  <figcaption>
    <div className="left">
      <h3>read</h3>
    </div>
    <div className="right">
      <h3 className="white">blog</h3>
    </div>
  </figcaption>
  <div className="center"><i className="ion-ios-loop-strong"></i></div>
  <a href="#"></a>
</figure> 
    </div>
    <div className='blogs-text-container2'>
        <h2>Let's keep in touch, tell us about your business and the goals you wish to achieve from</h2>
        <h2>our services, and we will make those goals a reality</h2>
    </div>
    
    </div>
  );
}
