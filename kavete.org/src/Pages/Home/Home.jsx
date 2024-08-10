import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { JobContext } from '../../Context/JobContext';
import { Link } from 'react-router-dom';

const Home = () => {

    const {allJobs} = useContext(JobContext);
    const [displayJob, setDisplayJob] = useState([]);
    const [input, setInput] = useState('');

    const inputHandler = (e) => {
        //when inpu
        setInput(e.target.value);
        if(e.target.value === ''){
            setDisplayJob(allJobs);
    }
}

    const searchHandler = async (e) => {
        e.preventDefault();
        const jobs = await allJobs?.filter((item) => {
            return item.title.toLowerCase().includes(input.toLowerCase())
        })
        setDisplayJob(jobs);
    }

    useEffect(() => {
    //
        setDisplayJob(allJobs); 
    },[allJobs]);

  return (
    <div className='home'>
        <div className="hero">
            <h1>Largest Africa Job Board</h1>
            <p >Welcome to the Africa's largest Jobs board. Sign up to explore more about jobs.</p>
            <form onSubmit={searchHandler}>
                <input onChange={inputHandler} list='jobs-list' value={input} type="text" placeholder="Search for jobs" required />



                <datalist id="jobs-list">
                    {allJobs.map((item, index) => (
                        <option key={index} value={item.title} />
                    ))}
                </datalist>



                <button >Search</button>
            </form>
        </div>



        <div className="job-table">
            <div className="table-layout">
                <p>#</p>
                <p>Job Title</p>
                <p>Location</p>
                <p className='ta'>Company</p>
                <p className='job-peak'>Salary Range</p>
            </div>
            {displayJob.slice(0,10).map((job, index) => (
                <Link to={`/job/${job.id}`} className="table-layout" key={index}>
                    <p>{index + 1}</p>
                    <div>
                        <img src="https://via.placeholder.com/150" alt="" />
                    <p>{job.title}</p>
                    </div>
                    
                    <p>{job.location}</p>
                    <p className='ta'>{job.company}</p>
                    <p className='job-peak'>{job.salary}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Home