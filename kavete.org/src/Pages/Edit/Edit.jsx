import React, {useState,useRef, useEffect} from "react";
import { useReactToPrint } from "react-to-print";
import { FiPrinter } from "react-icons/fi";
import { GiTechnoHeart } from "react-icons/gi";
import run from "../../config/gemini";

import "./Edit.css";

const Edit = () => {

  const [moreInfoData, setMoreInfoData] = useState(null);

  
  const componentRef = useRef();
  const handlePrintRTP = useReactToPrint({
    content: () => componentRef.current,
  });



    const handleMoreInfo = async () => {
      try {
        const processedData = await run("Write a tailored resume for this digital marketing role at a random company. Don't include an objective statement or references, but do include a professional summary, my past 10 years of work experience with 3-5 bullet points per role, and incorporate the most important keywords from the job description in those achievements.");
        const formattedData = formatData(processedData); // Assuming formatData exists to format the data
  
        setMoreInfoData(formattedData);
      } catch (error) {
        console.error("Error processing data:", error);
        // Handle errors gracefully (e.g., display an error message to the user)
      }
    };
  
    // Call handleMoreInfo only once on component mount
   
  
    // Cleanup function (optional, but recommended for potential side effects)
  
  




  function formatData(data) {
    // Split the data by newlines
    const lines = data.split(/\r?\n/);
  
    // Initialize empty string for formatted data
    let formattedString = "";
  
    // Loop through each line
    for (const line of lines) {
      if (line.startsWith("##")) {
        // If line starts with ##, add bold tag
        formattedString += "<b>";
      } else if (line.endsWith("##")) {
        // If line ends with ##, add closing bold tag
        formattedString += "</b>";
      } else {
        // Otherwise, add the line with two line breaks
        formattedString += line + "<br><br>";
      }
    }
  
    return formattedString;
  }


  return (
    <div className="fadein">
      <div className="hero">
        <h1>Your CV</h1>
        <p>
          Look at the most popular price categories of your liking. May they be
          helpful to you..
        </p>
        <div style={{display:"flex",flexDirection:"row",gap:"20px"}}>
        <button onClick={() => handleMoreInfo()} disabled={moreInfoData !== null}><span><GiTechnoHeart /></span> Update with Ai</button>
        <button onClick={handlePrintRTP} disabled={moreInfoData ? false : true}><span><FiPrinter /></span> Print</button>
        </div>
        
      </div>
      <div className="app-box">


        <div className="cv" ref={componentRef}>
        {moreInfoData ? (
          <p dangerouslySetInnerHTML={{ __html: moreInfoData }} />
        ) : (
          <div className="loading-screen">
              <div className="loader"></div>
          </div>
          
        )}
        </div>
</div>
  </div>
  );
};

export default Edit;
