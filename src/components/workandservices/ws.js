import React from 'react';
import './ws.css';
import pretendimg from '../../assets/pretend.jpg';
import industrieimg from '../../assets/industries.jpg';
import medicalimg from '../../assets/medical.jpg';
import hospiimg from '../../assets/hospital.jpg';
import businessesimg from '../../assets/smallb.jpg';
export default function Wands() {
    return (
        <div className='wscon'>
        <div className="text-container1">
            <h2 id='ourwork'>OUR WORK</h2>
            <h1 id='ourwork2'>Ambrics sarl can help you throughout yourdigital journey</h1>
            </div>  
            <div className='body-con'>
            <div className='hero-container'>
            <div className='imgcontainer1'>
            <img className="imghome1" src={pretendimg} />
            </div>
            <div className='text-container2'>
            <p>She looked at her student wondering if she could ever get through.<br/>
             "You need to learn to think for yourself," she wanted to tell him.<br/>
             "Your friends are holding you back and bringing you down."<br/>
             But she didn't because she knew his friends were all that he had and even if that meant a life of misery, he would never give them up.<br/>
             Peter always saw the world in black and white. There were two choices for every situation and you had to choose one of them.<br/>
              It was therefore terribly uncomfortable for him to spend time with Ashley.<br/>
              She saw the world in shades of gray with hundreds of choices to choose from in every situation.</p><br/>
              <button className='ourworkb'> Hover me</button>
              </div>
              </div>
              </div>
              <div className="text-container2">
            <h2 id='ourservices'>OUR SERVICES</h2>
            <h1 className='ourservices2'>We do everything and we do it better</h1>
            <h1 className="ourservices2">Ambrics Sarl does it all We provide services for all businesses that may range from</h1>
            </div>
            <div className='hero-container2'>
            <div className="item clean">
    <img src={industrieimg}  className="imghome1" alt="image"/>
    <div className="overlay">
    <span>Industries & Commercials</span>
      <span></span>
      <span></span>
    </div>
</div>
   <div className="item clean">
    <img src={medicalimg}  className="imghome1" alt="image"/>
    <div className="overlay">
    <span>Medical healthcare</span>
      <span></span>
      <span></span>
    </div>
</div>
   <div className="item clean">
    <img src={hospiimg}  className="imghome1" alt="image"/>
    <div className="overlay">
    <span>Hospitality</span>
      <span></span>
      <span></span>
    </div>
</div>
   <div className="item clean">
    <img src={businessesimg }  className="imghome1" alt="image"/>
    <div className="overlay">
    <span>Small businesses</span>
      <span></span>
      <span></span>
    </div>
</div>
            </div>  
    </div>
   
    )
}