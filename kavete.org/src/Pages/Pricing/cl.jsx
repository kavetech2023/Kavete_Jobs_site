import Reac, { useState, useRef } from "react";
import "./Pricing.css";
import { useReactToPrint } from "react-to-print";
import { FiPrinter } from "react-icons/fi";
import { GiTechnoHeart } from "react-icons/gi";
import run from "../../config/gemini.js";

const Pricing = () => {

  const [moreInfoData, setMoreInfoData] = useState(null);


  const componentRef = useRef();
  const handlePrintRTP = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleMoreInfo = async () => {
    try {
      // Process the data with the Gemini API using the 
      const response = await run("Create a Cover Letter for me, kevin kavete. Graduated in 2020 from the University of Nico, ND, with a master's degree in arts. Completed an extensive internship with Traveller Inc., where I was the head promoter and head of design for Traveller Con 2022. In addition, I led a large Group Exhibition called Saving the art world in 2021. Can you create a new resume emphasizing my education, skills, and experience? I am trained and proficient in painting, drawing, and graphical design. My portfolio is available at lavorre.example.com . Contact information: E-mail: lavorre@tmn.com, Phone: 555-9696. I also have experience with tough negotiations, am physically active, and have a discerning palate. I am looking for a job at the Royal College of Art London as a teacher. I have deep ties to the artistic community of London, and because of my extensive knowledge of the school, I would be uniquely qualified. If you need any more information to continue, ask.");
      

      //split the response from Ai-model into an array
      let responseArray = response.split("**");
      let newResponse ="";
      // loop over the already split array and add bold tags to every other element
      for(let i = 0; i < responseArray.length; i++){
          if(i === 0 || i % 2 !== 1){
           //if the element is not odd, add it to the newResponse string
              newResponse += responseArray[i];
          }else{
           //if the element is odd, add bold tags to it and add it to the newResponse string
               newResponse += "</br></br> "+"<b>" +  responseArray[i] + "</b>";
          }
      }
        //split the newResponse string into an array
      let newResponse2 = newResponse.split("*").join("</br>");
      let newResponseArray = newResponse2.split(" ");

      setMoreInfoData(newResponseArray);
      
    } catch (error) {
      console.error("Error processing data:", error);
      // Handle errors gracefully (e.g., display an error message)
    }
  };
  return (
    <div className="fadein">
      <div className="hero gap ">
        <h1>Cover Letter</h1>
        <p>
          Look at the most popular price categories of your liking. May they be
          helpful to you..
        </p>
        <div style={{display:"flex",flexDirection:"row",gap:"20px"}}>
        <button onClick={handleMoreInfo}><span><GiTechnoHeart /></span> Update with Ai</button>
        <button onClick={handlePrintRTP}><span><FiPrinter /></span> Print</button>
        </div>
      </div>

      <div className="app-box">
        <div className="cover-letter" ref={componentRef}>
        {
            // Display the processed data if available, or a default message if not
            moreInfoData ? (
              <span dangerouslySetInnerHTML={{ __html: moreInfoData }} /> // Safely render processed HTML
            ) : (
              "Loading..."
            )}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
