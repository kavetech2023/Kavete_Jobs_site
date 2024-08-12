import React from 'react'
import './Pricing.css'
import {motion} from "framer-motion";

const Pricing = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><h1>Pricing</h1></motion.div>
  )
}

export default Pricing