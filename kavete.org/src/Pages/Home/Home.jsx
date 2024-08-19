import React, { useContext, useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import "./Home.css";
import { categories } from "../../Data/categories";
import { JobContext } from "../../Context/JobContext";
import { Link } from "react-router-dom";

const Home = () => {

  const { allJobs, category, setCategory, setPage } = useContext(JobContext);


  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [displayJob, setDisplayJob] = useState([]);

  const inputHandler = (e) => {
    //when inpu
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplayJob(allJobs);
    }
  };

  const searchHandler = async (e) => {
    e.preventDefault();
    const jobs = await allJobs.results.categories?.filter((item) => {
      console.log("fetched");
      return item.title.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayJob(jobs);
  };

  const categoryHandler = (e) => {

    setCategory(e.target.value); 
    setPage(1); 
    console.log(e.target.value);
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
          Welcome to the Africa's largest Jobs board. Sign up to explore more
          about jobs.
        </p>
        <form onSubmit={searchHandler}>
        <select onChange={categoryHandler}>
            <option value="all">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>


          
          <datalist id="jobs-list">
            {allJobs?.results && allJobs.results.map((item, index) => (
              <option key={index} value={item.title} />
            ))}
          </datalist>


          <button>Search</button>
          
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
