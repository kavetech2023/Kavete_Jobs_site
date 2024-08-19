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
        <h1>Largest Africa Job Board</h1>
        <p>
          Welcome to the Africa's largest Jobs board for remote and hybrid jobs.
        </p>
        <form>
        <select onChange={categoryHandler}>
            <option value="">Select Job Category</option>
            {categories.map((category, index) => (
              <option key={index}  value={category}>{category.replace(/%20/g, " ")}</option>
            ))}
          </select>

  

          <select onChange={levelHandler}>
            <option value="">Select Job Level</option>
            <option value="Internship">Intern</option>
            <option value="Entry%20Level">Junior</option>
            <option value="Mid%20Level">Middle</option>
            <option value="Senior%20Level">Senior</option>
            <option value="management">Management</option>
          </select>
        </form>
      </div>

      <div className="job-table">
        <div className="table-layout no-hover">
          <p>#</p>
          <p>Job Title</p>
          <p>Location</p>
          <p className="ta">Company</p>
          <p className="job-peak">Date</p>
        </div>
        {allJobs?.results && allJobs.results.map((job, index) => (
          <Link to={`/job/${index + 1}`} className="table-layout" key={index}>
            <p> {index + 1}</p>
            <div>
              <span><FaRegCheckCircle style={{color:"green"}} /></span>
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
