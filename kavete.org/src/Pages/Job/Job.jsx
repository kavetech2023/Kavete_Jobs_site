import React, { useEffect } from "react";
import "./Job.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { jobs } from '../../Data/data'
import Charts from "../../Components/Charts/Charts";
import {motion} from "framer-motion";

const Job = () => {
  const { jobId } = useParams();
  const [jobData, setJobData] = useState({});

  const fetchJobData = async () => {
    const job = jobs.find(item => item.id == jobId);
    if (job) {
      console.log('Job fetched:', job);
      setJobData(job);
    } else {
      console.log('Job not found');
    }
  }

  useEffect(() => {
    fetchJobData();
  }, [jobId]); // Add jobId as a dependency to re-fetch data when it changes

  if (!jobData) {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  } else {
    return (
      <motion.div className="job" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>

<div className="app-box">
        <div className="job-name">
          <img src="https://via.placeholder.com/150" alt="" />
        </div>
        <div className="job-description">
          <h1>{jobData.title}</h1>
          <h4>{jobData.company}</h4>
          <h3>Job Description: </h3>
            <p>{jobData.description}</p>
            </div>
        
        <div className="job-info">
          <ul>
            <li><b>Job title</b></li>
            <li>{jobData.title}</li>
          </ul>
          <ul>
            <li><b>Company</b></li>
            <li>{jobData.company}</li>
          </ul>
          <ul>
            <li><b>Location</b></li>
            <li>{jobData.location}</li>
          </ul>
          <ul>
            <li><b>Qualifications:</b></li>
            <li>{jobData.qualifications}</li>
          </ul>
          <ul>
            <li><b>Key Skills:</b></li>
            <li>{jobData.key_skills}</li>
          </ul>
          <ul>
            <li><b>Responsibilities:</b></li>
            <li>{jobData.responsibilities}</li>
          </ul>
          <ul>
            <li><b>Benefits:</b></li>
            <li>{jobData.benefits}</li>
          </ul>
          <ul>
            <li><b>Perks:</b></li>
            <li>{jobData.perks}</li>
          </ul>
          <ul>
            <li><b>Link:</b></li>
            <li><a href={`${jobData.link}`}>Go to Page</a></li>
          </ul>

          <button className="btn">Generate Tailored CV</button>
        </div>
        </div>
      </motion.div>
    );
  }
};

export default Job;
