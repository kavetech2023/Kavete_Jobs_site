import React, {useState} from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./Edit.css";

const Edit = () => {

  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector(".app-box");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const doc = new jsPDF('p', 'mm', 'a4');
        const componentWidth = doc.internal.pageSize.getWidth();
        const componentHeight = doc.internal.pageSize.getHeight();
        doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
        setLoader(false);
        doc.save("your-cv.pdf");
    });

  }

  return (
    <div className="fadein">
      <div className="hero">
        <h1>Your CV</h1>
      </div>
      <div className="app-box">


        <div className="cv">
          <div className="personal-info">
            <div className="username">
              <h1>Kevin Kavete Muthini</h1>
            </div>
            
            <div className="contacts">
              <p>Nairobi</p>
              <p>LinkedIn</p>
              <p>Phone: +254798566564</p>
              <p>Email:</p>
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
     




        <button onClick={downloadPDF}>
          {loader ? 
          (
            <span>Downloading</span>
          ) : ( 
            <span>Download your CV</span>
          )}
        </button>
        </div>


  
  );
};

export default Edit;
