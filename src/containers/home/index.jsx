
import React from "react";
import { Animate } from "react-simple-animate";
import { useNavigate } from "react-router-dom";
import {FaLinkedin} from "react-icons/fa";
import "./styles.scss";
import MyPdf from "../../myresume/YogaprasadMK_ resume.docx";
function Home() {
  const navigate = useNavigate();
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Yogaprasad M K
          <br />
          Aspiring Software Engineer
        </h1>

        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(600px)",
          }}
          end={{ transform: "translateX(0px)" }}
        >
          <div className="contact-me">
            <div className="contact-me__buttons-wrapper">
              <button onClick={() => navigate("/contact")}>Hire Me
              </button>
              <a 
                 href={MyPdf} 
                 download="YogaprasadMK_resume.docx"
                 aria-label="Download Resume"
               >
                 Download Resume
               </a>
            </div>
            <div className="contact-me__socials-wrapper">
            <a 
                href="https://www.linkedin.com/in/yogaprasadmk"
                target="_blank"
                rel="noopener noreferrer"                 aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={32} />
              </a>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
}
export default Home;
