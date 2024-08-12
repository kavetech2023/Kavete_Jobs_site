import React from 'react'
import './Contact.css'
import {motion} from "framer-motion";

const Contact = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><h1>Contact</h1></motion.div>
  )
}

export default Contact