import React, { useRef,useState } from "react";
import "./Pricing.css";
import { useReactToPrint } from "react-to-print";
import { FiPrinter } from "react-icons/fi";
import { GiTechnoHeart } from "react-icons/gi";
import run from "../../config/gemini";

const Pricing = () => {
  const [moreInfoData, setMoreInfoData] = useState(null);

  
  const componentRef = useRef();
  const handlePrintRTP = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleMoreInfo = async () => {
    try {
      // Process the data with the Gemini API using the 
      const processedData = await run("Create a Cover Letter for me, kavete.org. Graduated in 2014 from the University of Nico, ND, with a master's degree in arts. Completed an extensive internship with Traveller Inc., where I was the head promoter and head of design for Traveller Con 2022");

      // Format the processed data
    const formattedData = formatData(processedData);

    setMoreInfoData(formattedData);


      
    } catch (error) {
      console.error("Error processing data:", error);
      // Handle errors gracefully (e.g., display an error message)
    }
  };




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
      <div className="hero gap ">
        <h1>Cover Letter</h1>
        
        <p>
          Look at the most popular price categories of your liking. May they be
          helpful to you..
        </p>
        <div style={{display:"flex",flexDirection:"row",gap:"20px"}}>
        <button onClick={() => handleMoreInfo()}><span><GiTechnoHeart /></span> Update with Ai</button>
        <button onClick={handlePrintRTP}><span><FiPrinter /></span> Print</button>
        </div>
      </div>

      <div className="app-box">
        <div className="cover-letter" ref={componentRef}>
        <p dangerouslySetInnerHTML={{ __html: moreInfoData }} />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
