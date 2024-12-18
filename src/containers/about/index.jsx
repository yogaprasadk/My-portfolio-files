import React from "react";
import { FaDev, FaDatabase } from "react-icons/fa";
import { DiAndroid, DiApple } from "react-icons/di";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const personalDetails = [
  { label: "Name: ", value: "Yogaprasad M K" },
  { label: "Age: ", value: "21" },
  { label: "Address: ", value: "Kumbakonam, Tamilnadu, India" },
  { label: "Email: ", value: "yogaprasadmk@gmail.com" },
  { label: "Contact No: ", value: "+91 7339208381" },
];

function About() {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="developerContent">Final Year Computer Science and Engineering Student</h3>
            <p>
              As a final-year Computer Science and Engineering student, I have
              foundational skills in Java, JavaScript, React, Node.js, Express,
              and MySQL. I actively participate in coding contests, with a
              rating of 1045 and a 1-star rank on CodeChef, and hold 3-star
              status on HackerRank in Java and MySQL. Beyond academics, I have
              engaged in paper presentations, workshops, and seminars, which
              have broadened my technical knowledge and professional
              development."
            </p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <ul>
              {personalDetails.map((item) => (
                <li key={item.label}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiApple color="var(--yellow-theme-main-color)" size={60} />
              </div>
              <div>
                <FaDev color="var(--yellow-theme-main-color)" size={60} />
              
              </div>
              <div>
                <FaDatabase
                  color="var(--yellow-theme-main-color)"
                  size={60}
                />
              </div>
              <div>
                <DiAndroid color="var(--yellow-theme-main-color)" size={60} />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export default About;
