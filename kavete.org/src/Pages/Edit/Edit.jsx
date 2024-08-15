import React, {useState,useRef} from "react";
import { useReactToPrint } from "react-to-print";
import { FiPrinter } from "react-icons/fi";
import { GiTechnoHeart } from "react-icons/gi";

import "./Edit.css";

const Edit = () => {

  const componentRef = useRef();
  const handlePrintRTP = useReactToPrint({
    content: () => componentRef.current,
  });



  return (
    <div className="fadein">
      <div className="hero">
        <h1>Your CV</h1>
        <p>
          Look at the most popular price categories of your liking. May they be
          helpful to you..
        </p>
        <div style={{display:"flex",flexDirection:"row",gap:"20px"}}>
        <button onClick={handlePrintRTP}><span><GiTechnoHeart /></span> Update with Ai</button>
        <button onClick={handlePrintRTP}><span><FiPrinter /></span> Print</button>
        </div>
        
      </div>
      <div className="app-box">


        <div className="cv" ref={componentRef}>
          <div className="personal-info">
            <div className="username">
              <h1>Kevin Kavete Muthini</h1>
            </div>
            
            <div className="contacts">
              <div>Nairobi</div>
              <div>LinkedIn</div>
              <div>Phone: +254798566564</div>
              <div>Email:</div>
            </div>
            </div>

            <div className="work-experience">
              <h2>Work Experience</h2>
              <hr />
              <div className="work-details">
                <div className="left-right">
                <div className="company">
                  <h3>Company Name</h3>
                  <p>Position</p>
                  
                </div>
                <div className="place-and-date">
                  <p>Location</p>
                  <p>Start Date - End Date</p>
                </div>
                </div>

                <div className="work-list">
                  <ul>
                    <li>Made beats by dre headphones popular.</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>

              <div className="work-details">
                <div className="left-right">
                <div className="company">
                  <h3>Company Name</h3>
                  <p>Position</p>
                  
                </div>
                <div className="place-and-date">
                  <p>Location</p>
                  <p>Start Date - End Date</p>
                </div>
                </div>

                <div className="work-list">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>

              <div className="work-details">
                <div className="left-right">
                <div className="company">
                  <h3>Company Name</h3>
                  <p>Position</p>
                  
                </div>
                <div className="place-and-date">
                  <p>Location</p>
                  <p>Start Date - End Date</p>
                </div>
                </div>

                <div className="work-list">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="work-experience">
              <h2>Awards</h2>
              <hr />
              <div className="work-details">
                <div className="left-right">
                <div className="company">
                  <h3>Company Name</h3>
                  <p>Position</p>
                  
                </div>
                <div className="place-and-date">
                  <p>Location</p>
                  <p>Start Date - End Date</p>
                </div>
                </div>

                <div className="work-list">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              </div>

            <div className="work-experience">
              <h2>Education</h2>
              <hr />
              <div className="work-details">
                <div className="left-right">
                <div className="company">
                  <h3>Company Name</h3>
                  <p>Position</p>
                  
                </div>
                <div className="place-and-date">
                  <p>Location</p>
                  <p>Start Date - End Date</p>
                </div>
                </div>

                <div className="work-list">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              </div>


              <div className="work-experience">
              <h2>Skills and Interests</h2>
              <hr />
              <div className="work-details">
                <div className="left-right">
                <div className="company">
                  <h3>Company Name</h3>
                  <p>Position</p>
                  
                </div>
                <div className="place-and-date">
                  <p>Location</p>
                  <p>Start Date - End Date</p>
                </div>
                </div>

                <div className="work-list">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              </div>
            
          </div>



        </div>
     




        

        
        </div>


  
  );
};

export default Edit;
