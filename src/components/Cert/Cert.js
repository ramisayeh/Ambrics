import React ,{useState} from 'react'
import './Cert.css'
export default function Cert() {
    const [currentimg,setcurrentimg]=useState()
    return (
        <div className="cert-cont">
            <div className="cert-hov">
                <span>Branding & Identity</span>
                <span> Websites & Digital platforms</span>
                <span> E-Commerce Experiences </span>
                <span>Performance Marketing</span>
                <span>VR & AR Environment</span>
            </div>
            <div className='cert-slider'>
                <img src={currentimg}/>
            </div>
        </div>
    )
}
