import React, { useContext, useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import "./Job.css";
import { Link, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { JobContext } from "../../Context/JobContext";
import { FiPrinter } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";

const Job = ({ setNotification }) => {
  const { jobId } = useParams();
  const [jobData, setJobData] = useState({});
  const [savedJobs, setSavedJobs] = useState("Add to Cv");
  const [open, setOpen] = useState(true);

  const saveJob = () => {
    setNotification(+1);
    setSavedJobs("Added to Cv");
    
  };

  const popup = () => {
    open? setOpen(false): setOpen(true);
  }

  const componentRef = useRef();
  const handlePrintRTP = useReactToPrint({
    content: () => componentRef.current,
  });

  const { jobs, saved, setSaved } = useContext(JobContext);

  useEffect(() => {
    setJobData(jobs);
  }, [jobs]);

  return (
    <div className="fadein">
      <div className="hero">
        <h1>Job Details</h1>
        <p>
          Please go through the details before applying!</p>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <Link to={"/"}>
            <button><IoMdArrowRoundBack /> back </button>
          </Link>
          
        </div>
      </div>

      <div className="app-box">
        {jobData && Object.keys(jobData).length > 0 ? (
          <>
            <div className="job-info" ref={componentRef}>
              <ul>
                <li>
                  <b>Job title</b>
                </li>
                <li>{jobData[jobId - 1].name}</li>
              </ul>
              <ul>
                <li>
                  <b>Company</b>
                </li>
                <li>{jobData[jobId - 1].company.name}</li>
              </ul>
              <ul>
                <li>
                  <b>Location</b>
                </li>
                <li>{jobData[jobId - 1].locations[0].name}</li>
              </ul>
              <ul>
                <li>
                  <b>Job- Level:</b>
                </li>
                <li>{jobData[jobId - 1].levels[0].name}</li>
              </ul>
              <ul>
                <li>
                  <b>Date Published:</b>
                </li>
                <li>
                  {new Date(
                    jobData[jobId].publication_date
                  ).toLocaleDateString()}
                </li>
              </ul>
              <ul>
               
                <li>
                  <Link style={{color:"blue"}} to={`${jobData[jobId - 1].refs.landing_page}`}>{`${
                    jobData[jobId - 1].refs.landing_page
                  }`}</Link>
                </li>
              </ul>
            </div>

            <div className="job-contents">
              <div
                style={{ flexDirection: "column", display: "flex" }}
                dangerouslySetInnerHTML={{
                  __html: jobData[jobId - 1].contents,
                }}
              />
            </div>
            <div className="save-job">
              <button
                onClick={() => {
                  setSaved(jobData[jobId - 1].contents);
                  saveJob(); popup();
                }}
              >
                <span>
                  <FaHeart />
                </span>
                <span>{savedJobs}</span>
              </button>
              <button onClick={handlePrintRTP}>
            <span>
              <FiPrinter />
            </span>{" "}
            Download Job
          </button>
            </div>

            <div id="popup1" className={`overlay ${open?"": "overlay-open"}`}>
	<div className="popup">
		<h2>Job Added Successfully</h2>
		<a className="close" onClick={()=>open?setOpen(false): setOpen(true)} href="#">&times;</a>
		<div className="content">
			This job has been added to your Cv and Cover Letter. You can update you can now update your Cv and Cover Letter using this Job Details.
		</div>
	</div>
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
