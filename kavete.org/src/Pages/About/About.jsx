import React from 'react'
import './About.css'
import {motion} from "framer-motion";


const About = () => {
  return (
    <motion.div className='app-box' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className='about'>
        <div className="about-left">
        <img src="https://via.placeholder.com/450" className="about-img"/>
        <span className="play-icon"></span>
        </div>
        <div className="about-right">
            <h2>Nurturing Tomorrow's leaders today!</h2>
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
    </div>
    </motion.div>
  )
}

export default About