import Reac, { useRef } from "react";
import "./Pricing.css";
import { useReactToPrint } from "react-to-print";
import { FiPrinter } from "react-icons/fi";
import { GiTechnoHeart } from "react-icons/gi";

const Pricing = () => {
  const componentRef = useRef();
  const handlePrintRTP = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="fadein">
      <div className="hero gap ">
        <h1>Cover Letter</h1>
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
        <div className="cover-letter" ref={componentRef}>
          <p>
            Genevieve Lavorre lavorre@tmn.com | 555-9696 | lavorre.example.com
          </p>

          <p>[Date]</p>

          <p>[Hiring Manager Name]Royal College of Art London[Address]</p>

          <p>Dear [Hiring Manager name],</p>

          <p>
            I am writing to express my keen interest in the Teaching position at
            the Royal College of Art London, as advertised on [Platform where
            you saw the ad (optional)]. With a Master's degree in Arts from the
            University of Nico (2014) and extensive experience in the art world,
            I am confident I possess the skills and passion to inspire and guide
            the next generation of talented artists at your esteemed
            institution.
          </p>

          <p>
            My background includes a strong foundation in various artistic
            disciplines, including painting, drawing, and graphic design. I
            possess a deep understanding of the creative process and the
            challenges faced by aspiring artists. My experience extends beyond
            artistic proficiency. During my internship with Traveller Inc., I
            successfully led the promotion and design aspects of Traveller Con
            2022, demonstrating my exceptional organizational, communication,
            and project management skills.
          </p>

          <p>
            Furthermore, in 2021, I spearheaded a large-scale Group Exhibition
            titled "Saving the Art World," showcasing my ability to curate and
            manage complex artistic projects. This experience allowed me to
            foster a collaborative environment among artists and connect with a
            diverse audience.
          </p>

          <p>
            Beyond my artistic skillset, I bring strong negotiation abilities
            honed through my professional experience. I am also a physically
            active individual, which allows me to keep pace with the demands of
            a dynamic learning environment. My discerning palate adds another
            dimension, allowing me to offer insightful critiques on color theory
            and composition.
          </p>

          <p>
            As a resident of London with strong ties to the artistic community,
            I possess a deep understanding of the Royal College of Art's
            reputation and legacy. My familiarity with the school's curriculum
            and values would allow me to seamlessly integrate into your esteemed
            faculty.
          </p>

          <p>
            I am excited about the opportunity to contribute to the Royal
            College of Art London. I am confident that my unique blend of
            artistic talent, project management skills, and passion for teaching
            will make me a valuable addition to your team. I look forward to the
            opportunity to discuss my application in further detail.
          </p>

          <p>
            Thank you for considering my application. I look forward to the
            possibility of contributing to the Royal College of Art London and
            inspiring the next generation of artists.
          </p>
          <p>Sincerely,</p>

          <p>Genevieve Lavorre</p>
        </div>
        <button onClick={handlePrintRTP}>Print with React to Print</button>
      </div>
    </div>
  );
};

export default Pricing;
