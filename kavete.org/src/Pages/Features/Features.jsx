import React from 'react'
import './Features.css'
import {motion} from "framer-motion";

const Features = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className="hero">
        <h1>Features</h1>
        <p>
          Welcome to the Africa's largest Jobs board. Sign up to explore more
          about jobs.
        </p>
      </div>

      <div className="app-box">hellp</div>

    </motion.div>
  )
}

export default Features