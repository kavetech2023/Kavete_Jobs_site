import React, { useEffect,useState } from "react";
import "./Job.css";
import { useParams } from "react-router-dom";
import { jobs } from "../../Data/data";
import { FaHeart } from "react-icons/fa";
import Navbar from "../../Components/Navbar/Navbar";


const Job = () => {
  const { jobId } = useParams();
  const [jobData, setJobData] = useState({});
  const [savedJobs, setSavedJobs] = useState("Save Job");
  const saveJob = () => {

    setSavedJobs("Job Saved");
  };

  const fetchJobData = async () => {
    const job = jobs.find((item) => item.id == jobId);
    if (job) {
      console.log("Job fetched:", job);
      setJobData(job);
    } else {
      console.log("Job not found");
    }
  };

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
      <div className="fadein">
        <div className="hero">
          <h1>{jobData.title}</h1>
          <p>
            Welcome to the Africa's largest Jobs board. Sign up to explore more
            about jobs.
          </p>
          <button onClick={saveJob} className="btn">{savedJobs}  <FaHeart color={"red"} /> </button>
        </div>

        <div className="app-box">
          <div className="job-info">
            <ul>
              <li>
                <b>Job title</b>
              </li>
              <li>{jobData.title}</li>
            </ul>
            <ul>
              <li>
                <b>Company</b>
              </li>
              <li>{jobData.company}</li>
            </ul>
            <ul>
              <li>
                <b>Location</b>
              </li>
              <li>{jobData.location}</li>
            </ul>
            <ul>
              <li>
                <b>Qualifications:</b>
              </li>
              <li>{jobData.minimum_qualifications}</li>
            </ul>
            <ul>
              <li>
                <b>Preferred Qualifications:</b>
              </li>
              <li>{jobData.preferred_qualifications}</li>
            </ul>
            <ul>
              <li>
                <b>Responsibilities:</b>
              </li>
              <li>{jobData.responsibilities}</li>
            </ul>
            <ul>
              <li>
                <b>Benefits:</b>
              </li>
              <li>{jobData.benefits}</li>
            </ul>
            <ul>
              <li>
                <b>Perks:</b>
              </li>
              <li>{jobData.perks}</li>
            </ul>
            <ul>
              <li>
                <b>Link:</b>
              </li>
              <li>
                <a href={`${jobData.link}`}>Go to Page</a>
              </li>
            </ul>

            
          </div>
        </div>
      </div>
    );
  }
};

export default Job;
