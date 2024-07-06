import React from "react";
import "./Skill.css";
import WebImg from "../../assets/webImg.png";
import ReactImg from "../../assets/reactImg.png";
import BackendImg from "../../assets/nodeImg.png";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const Skill = () => {
  return (
    <div>
      <section id="skills">
        <motion.span variants={textVariant()} className="skillTitle">
          Overview
        </motion.span>
        <motion.span variants={fadeIn("", "", 0.1, 1)} className="skillDesc">
          I specialize in designing and developing visually appealing,
          user-friendly websites using JavaScript and frameworks like React. My
          expertise spans both the creative and technical aspects of web
          development, ensuring each project delivers a seamless and engaging
          user experience.
        </motion.span>
        <div className="skillBars">
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="skillBar"
          >
            <img src={WebImg} alt="UIDesign" className="skillBarImg"></img>
            <div className="skillBarText">
              <h2>Web Developer</h2>
              <p>
                Expert in creating visually appealing websites with HTML, CSS,
                and JavaScript for seamless user experiences.
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)} className="skillBar">
            <img src={ReactImg} alt="WebDesign" className="skillBarImg"></img>
            <div className="skillBarText">
              <h2>React Developer</h2>
              <p>
                Specialist in building dynamic web apps with React.js and modern
                tools for interactive user interfaces.
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)} className="skillBar">
            <img src={BackendImg} alt="WebDesign" className="skillBarImg"></img>
            <div className="skillBarText">
              <h2>Backend Developer</h2>
              <p>
                Skilled in developing scalable APIs and server architectures
                with Node.js or Java for robust web applications.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
