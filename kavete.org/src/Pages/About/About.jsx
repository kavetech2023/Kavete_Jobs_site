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
    <iframe width="560" className="video" height="315" src="https://www.youtube.com/embed/vkdLST5UkEQ?si=E4k_uPh6jScaMGxH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
    </div>
  )
}

export default About