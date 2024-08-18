import React, { useContext, useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import "./Home.css";
import { JobContext } from "../../Context/JobContext";
import { Link } from "react-router-dom";

const Home = () => {

  const { allJobs, category } = useContext(JobContext);


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

  useEffect(() => {
    setDisplayJob(allJobs);
  }, [allJobs]);




 
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
         
          <p className="paginate">
            <span>1</span>
            </p>
          <p className="paginate">
            <span>2</span>
            </p>
            <p className="paginate">
            <span>3</span>
            </p>
            <p className="paginate">
            <span>4</span>
            </p>
            <p className="paginate">
            <span>5</span>
            </p>
            <p className="paginate">
            <span>6</span>
            </p>
            <p className="paginate">
            <span>7</span>
            </p>
            <p className="paginate">
            <span>8</span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Home;
