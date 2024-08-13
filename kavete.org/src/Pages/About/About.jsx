import React, { useRef, useState } from 'react'
import './About.css'
import {motion} from "framer-motion";
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


    
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>

<div className="hero">
            <h1>About Us</h1>
            
        </div>

<div className="app-box">
      <div className='about'>
        <div className="about-holder">
        <img src={img} className="about-img"/>
        <span className="play-icon" onClick={()=>{setPlayVideo(true)}}><FaRegCirclePlay size={50}/></span>
        </div>
        <div className="about-right">
            <h2>Nurturing Tomorrow's leaders today!</h2>
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
    </div>
    </div>
    <div className={`video-player ${playVideo?"":"hide"}`} ref={player} onClick={closePlayer}>
    <iframe width="90%"  height="90%" className="video" src="https://www.youtube.com/embed/mqr_wZxmQK8?si=33qA-5v6fxZg7AaT" title="YouTube video player" ></iframe>
</div>
    </motion.div>
  )
}

export default About