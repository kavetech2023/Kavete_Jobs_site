import { createContext, useEffect, useState } from "react";
import {categories} from "../Data/categories.js";


export const JobContext = createContext();

const JobContextProvider = (props) =>{

    const [allJobs, setAllJobs] = useState([])
    const [jobs, setJobs] = useState([]);
    const [category, setCategory] = useState(
        categories.map((job) => job.category)
    );
   

    const fetchJobs = async () => {
        try {
            // Fetch jobs from an API
        const response = await fetch('https://www.themuse.com/api/public/jobs?page=1&descending=true&api_key=fed43051b601c1ccf43c3661353dde9b92cec37f875f6136bc74588f08463dc0')
            .then(response => response.json());
             setAllJobs(response)
             setJobs(response.results)
          console.log('Jobs fetched:', response.results);
        } catch (error) {
          console.error('Error fetching jobs:', error);
        }
      };

    useEffect(() => {
        fetchJobs();
    }, []);

    const contextValue ={
        allJobs,
        category,
        jobs,
    }

    return (
        <JobContext.Provider value={contextValue}>
            {props.children}
        </JobContext.Provider>

    )

}

export default JobContextProvider;
