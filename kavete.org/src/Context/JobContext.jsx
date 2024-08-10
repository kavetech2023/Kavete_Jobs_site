import { createContext, useEffect, useState } from "react";
import {jobs} from "../Data/data";


export const JobContext = createContext();

const JobContextProvider = (props) =>{

    const [allJobs, setAllJobs] = useState([])
    const [language, setLanguage] = useState({
        languages: "English",
        languageCode: "en"
    })

    const fetchJobs = async () => {
        try {
          setAllJobs(jobs);
          console.log('Jobs fetched:', jobs);
        } catch (error) {
          console.error('Error fetching jobs:', error);
        }
      };

    useEffect(() => {
        fetchJobs();
    }, [language]);

    const contextValue ={
        allJobs,
        language,
        setLanguage
    }

    return (
        <JobContext.Provider value={contextValue}>
            {props.children}
        </JobContext.Provider>

    )

}

export default JobContextProvider;
