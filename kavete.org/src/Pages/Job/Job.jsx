import React, { useEffect } from "react";
import "./Job.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { jobs } from '../../Data/data'
import Charts from "../../Components/Charts/Charts";

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
      <div className="job">
        <div className="job-name">
          <img src="" alt="" />
          <p><b>{jobData.id}</b></p>
        </div>
        <div className="job-chart">
          <Charts salaryData={jobData}/>
        </div>
        <div className="job-info">
          <ul>
            <li>Job title</li>
            <li>Job salary</li>
          </ul>
          <ul>
            <li>Job title</li>
            <li>Job salary</li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Job;
