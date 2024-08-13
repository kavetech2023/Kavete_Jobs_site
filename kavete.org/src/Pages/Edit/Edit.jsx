import React, {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import './Edit.css'
import {motion} from "framer-motion";


const Edit = () => {

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
  useDropzone({});

  
  

const files = acceptedFiles.map((file) => (
  <li key={file.path}>
    {file.path} - {file.size} bytes
  </li>
));
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className="hero">
        <h1>Ai Edit CV</h1>
        <p>
          Welcome to the Africa's largest Jobs board. Sign up to explore more
          about jobs.
        </p>
      </div>

      <div className="app-box">
      <div {...getRootProps({ className: "dropzone" })}>
      <input className="input-zone" {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
          <p className="dropzone-content">
            Release to drop the files here
          </p>
        ) : (
          <p className="dropzone-content">
            Drag’n’drop some files here, or click to select files
          </p>
        )}
        
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
      </div>

    </motion.div>
  )
}

export default Edit