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
          <h2>John Doe</h2>
          <p>Web Developer</p>
          <p>Address: 123 Street, City, Country</p>
          <p>Phone: 123456789</p>
          <p>Email:
            <a href="https://kavete.org" className="email">kavete.org</a>
              </p>
          <h3>Education</h3>
          <p>University of Life</p>
          <p>2010-2014</p>
          <p>BA in Computer Science</p>
          <h3>Experience</h3>
          <p>Company A</p>
          <p>2014-2016</p>
          <p>Web Developer</p>
          <p>Company B</p>
          <p>2016-2018</p>
          <p>Senior Developer</p>
          <h3>Skills</h3>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p className="last">Node.js</p>
          



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
    </div>
  );
};

export default Edit;
