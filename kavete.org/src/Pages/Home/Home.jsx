import React, { useContext, useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import "./Home.css";
import { categories } from "../../Data/categories";
import { JobContext } from "../../Context/JobContext";
import { Link } from "react-router-dom";

const Home = () => {

  const { allJobs, category, level,setJobLevel, setCategory, setPage } = useContext(JobContext);

  const [displayJob, setDisplayJob] = useState([]);

  


  const categoryHandler = (e) => {
    setCategory(e.target.value); 
    setPage(1); 
  };
  const levelHandler = (e) => {
    setJobLevel(e.target.value); 
  };
 


  useEffect(() => {
    setDisplayJob(allJobs);
  }, [allJobs]);




 
  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div className="fadein">
      
      <div className="hero">
        <h1>Largest Africa Remote-Jobs Board</h1>
        <p>
          Welcome to the Africa's largest Jobs board for remote and hybrid jobs.
        </p>
        <form>
        <select onChange={categoryHandler} value={category}>
            <option defaultValue={"Design%20and%20UX"} >Select Job Category</option>
            {categories.map((category, index) => (
              <option key={index}  value={category}>{category.replace(/%20/g, " ")}</option>
            ))}

          </select>

  <select onChange={levelHandler} value={level}>
   <option value="">All Job Levels</option>
    <option value="Mid%20Level">Mid Level</option>
    <option value="Senior%20Level">Senior Level</option>
    <option value="management">Management</option>    
  </select>

          
        </form>
      </div>

      <div className="job-table">
        <div className="table-layout no-hover">
          <p><b>#</b></p>
          <p><b>Job Title</b></p>
          <p><b>Location</b></p>
          <p className="ta"><b>Company</b></p>
          <p className="job-peak"><b>Date</b></p>
        </div>
        {allJobs?.results && allJobs.results.map((job, index) => (
          <Link to={`/job/${index + 1}`} className="table-layout" key={index}>
            <p> <FaRegCheckCircle style={{color:"green"}} /></p>
            <div>
              
              <p> {job.name}</p>
            </div>

            <p>{job.locations.length > 0 ? job.locations[0].name : 'No location available'}</p>
            <p className="ta">{job.company.name}</p>
            <p className="job-peak">{new Date(job.publication_date).toLocaleDateString()}</p>
          </Link>
        ))}
        <div className="pagination-table">
          {[1, 2, 3, 4, 5,].map((pageNumber) => (
            <p
              key={pageNumber}
              className="paginate"
              onClick={() => handlePageClick(pageNumber)}
            >
              <span>{pageNumber}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
