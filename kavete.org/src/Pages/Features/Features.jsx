import React from 'react'
import './Features.css'
import {motion} from "framer-motion";

const Features = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><h1>Features</h1></motion.div>
  )
}

export default Features