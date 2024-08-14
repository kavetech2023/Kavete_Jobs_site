import React, { useContext, useEffect, useState } from "react";
import * as countries from "i18n-iso-countries";
import { FaRegCheckCircle } from "react-icons/fa";
import "./Home.css";
import { JobContext } from "../../Context/JobContext";
import { Link } from "react-router-dom";

const Home = () => {
  const allCountries = countries.getNames("en", { select: "official" });

  const { allJobs } = useContext(JobContext);
  const [displayJob, setDisplayJob] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(5);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    //when inpu
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplayJob(allJobs);
    }
  };

  const searchHandler = async (e) => {
    e.preventDefault();
    const jobs = await allJobs?.filter((item) => {
      console.log("fetched");
      return item.description.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayJob(jobs);
  };

  useEffect(() => {
    setDisplayJob(allJobs);
  }, [allJobs]);

  // Get current jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = displayJob.slice(indexOfFirstJob, indexOfLastJob);

  // Change page

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(displayJob.length / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="fadein">
      <div className="hero">
        <h1>Largest Africa Job Board</h1>
        <p>
          Welcome to the Africa's largest Jobs board. Sign up to explore more
          about jobs.
        </p>
        <form onSubmit={searchHandler}>
          <input
            onChange={inputHandler}
            list="jobs-list"
            value={input}
            type="text"
            placeholder="Search for jobs"
            required
          />

          <datalist id="jobs-list">
            {allJobs.map((item, index) => (
              <option key={index} value={item.title} />
            ))}
          </datalist>


          <button>Search</button>
        </form>
      </div>

      <div className="job-table">
        <div className="table-layout">
          <p>#</p>
          <p>Job Title</p>
          <p>Location</p>
          <p className="ta">Company</p>
          <p className="job-peak">Salary Range</p>
        </div>
        {currentJobs.slice(0, 10).map((job, index) => (
          <Link to={`/job/${job.id}`} className="table-layout" key={index}>
            <p>{index + 1}</p>
            <div>
              <span><FaRegCheckCircle style={{color:"green"}} /></span>
              <p>{job.title}</p>
            </div>

            <p>{job.location}</p>
            <p className="ta">{job.company}</p>
            <p className="job-peak">{job.salary}</p>
          </Link>
        ))}
        <div className="table-layout">
          {pageNumbers.map((number) => ( 
          <p key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </p>
          ))
}
        </div>
      </div>
    </div>
  );
};

export default Home;
