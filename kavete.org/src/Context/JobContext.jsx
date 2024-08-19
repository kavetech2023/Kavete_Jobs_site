import { createContext, useEffect, useState } from "react";
import {categories} from "../Data/categories.js";


export const JobContext = createContext();

const JobContextProvider = (props) =>{

    const [allJobs, setAllJobs] = useState([])
    const [jobs, setJobs] = useState([]);
    const [category, setCategory] = useState(
        categories.map((job) => job.category)
    );
    const [page, setPage] = useState(1);
    console.log(page);
   

    const fetchJobs = async () => {
        try {
            // Fetch jobs from an API
        const response = await fetch(`https://www.themuse.com/api/public/jobs?category=${category}&page=${page}&descending=true&location=&api_key=fed43051b601c1ccf43c3661353dde9b92cec37f875f6136bc74588f08463dc0`)
            .then(response => response.json());
             setAllJobs(response)
             setJobs(response.results)
          console.log('Jobs fetched:', response.results, category);
        } catch (error) {
          console.error('Error fetching jobs:', error);
        }
      };

    useEffect(() => {
        fetchJobs();
    }, [category, page]);

    const contextValue ={
        allJobs,
        category,
        setCategory,
        jobs,
        page,
        setPage
    }

    return (
        <JobContext.Provider value={contextValue}>
            {props.children}
        </JobContext.Provider>

    )

}

export default JobContextProvider;
