import React, { useContext, useEffect, useState } from "react";
import "./Job.css";
import { Link, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { JobContext } from "../../Context/JobContext";

const Job = ({ setNotification }) => {
  const { jobId } = useParams();
  const [jobData, setJobData] = useState({});
  const [savedJobs, setSavedJobs] = useState("Add Job");
  const saveJob = () => {
    setNotification(+1);
    setSavedJobs("Job Added");
  };

  const { jobs } = useContext(JobContext);



  useEffect(() => {
    setJobData(jobs);
 
  }, [jobs]);

    
 

  return (
    <div className="fadein">

      <div className="hero">
        <h1>Job Details</h1>
        <p>
          Look at the most popular price categories of your liking. May they be
          helpful to you..
        </p>
        <div style={{display:"flex",flexDirection:"row",gap:"20px"}}>
        <button > Update with Ai</button>
        <button > Print</button>
        </div>
        
      </div>

      <div className="app-box">

        {jobData && Object.keys(jobData).length > 0 ? (
          <>
          <div className="job-info">
            <ul>
              <li>
                <b>Job title</b>
              </li>
              <li>{jobData[jobId -1].name}</li>
            </ul>
            <ul>
              <li>
                <b>Company</b>
              </li>
              <li>{jobData[jobId -1].company.name}</li>
            </ul>
            <ul>
              <li>
                <b>Location</b>
              </li>
              <li>{jobData[jobId -1].locations[0].name}</li>
            </ul>
            <ul>
              <li>
                <b>Job- Level:</b>
              </li>
              <li>
                {jobData[jobId -1].levels[0].name}
              </li>
            </ul>
            <ul>
              <li>
                <b>Date Published:</b>
              </li>
              <li>{new Date(jobData[jobId].publication_date).toLocaleDateString()}</li>
            </ul>
            <ul>
              <li>
                <b>Link to:</b>
              </li>
              <li><Link to={`${jobData[jobId -1].refs.landing_page}`}>Page</Link></li>
            </ul>
            <ul>
              <li>
                <b>Benefits:</b>
              </li>
              <li></li>
            </ul>
            <ul>
              <li>
                <b>Perks:</b>
              </li>
              <li></li>
            </ul>
            <ul>
              <li>
                <b>Link:</b>
              </li>
              <li>
                <a>Go to Page</a>
              </li>
            </ul>
          </div>

          <div className="job-contents">
          <div style={{flexDirection:"column",display:"flex"}} dangerouslySetInnerHTML={{ __html: jobData[jobId -1].contents }} />
          </div>
          </>
        ) : (
          <p>No job data available</p>
        )}
        
      </div>
    </div>
  );
};

export default Job;
