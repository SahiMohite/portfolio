import React from 'react';
import './Intro.css';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
// import ComputersCanvas from './Computers';
import EarthCanvas from './Earth';
import { slideIn } from "../../utils/motion";

const Intro = () => {
  return (
    <section id="intro">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
        className="introContent"
      >
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Sahil</span><br/>Full Stack Developer</span>
        <p className='introPara'>
          I am a skilled full stack developer with experience in creating <br/>visually appealing and user-friendly websites.
        </p>
        <a href='https://drive.google.com/file/d/1moCDJORJUgCLLq7hvG6FDPZDmdUUjJMN/view?usp=sharing' target='_blank'>
          <button className='btn'>
            Resume
          </button>
        </a>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
        className='earth'
      >
        {/* <ComputersCanvas /> */}
        <EarthCanvas />
      </motion.div>
    </section>
  );
};

export default Intro;
