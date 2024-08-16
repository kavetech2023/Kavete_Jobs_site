import React, { useRef, useState } from 'react'
import './About.css'
import { FaRegCirclePlay } from "react-icons/fa6";
import img from '../../assets/about_img.svg';


const About = () => {

  const [playVideo, setPlayVideo] = useState(false);

  const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayVideo(false);
    }
}


  return (


    
    <div className='fadein'>

<div className="hero">
            <h1>About Us</h1>
            
        </div>

<div className="app-box">
      <div className='about'>
        <div className="about-holder">
        <img src={img} className="about-img"/>
        <span className="play-icon" onClick={()=>{setPlayVideo(true)}}><FaRegCirclePlay size={50}/></span>
        </div>
    </div>
    </div>
    <div className={`video-player ${playVideo?"":"hide"}`} ref={player} onClick={closePlayer}>
    <iframe width="90%"  height="90%" className="video" src="https://www.youtube.com/embed/mqr_wZxmQK8?si=33qA-5v6fxZg7AaT" title="YouTube video player" ></iframe>
</div>
    </div>
  )
}

export default About