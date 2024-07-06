import React, { useRef } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import GithubIcon from "../../assets/github.png"
import TwitterIcon from "../../assets/twitter.png";
import LeetcodeIcon from "../../assets/leetcodeImg.jfif";
import emailjs from '@emailjs/browser';
import "./Contact.css";
import Plane from "./Plane";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xpmxekl', 'template_qrumwol', form.current, {
        publicKey: 'qRVeCmO3zcZ9G5bK-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
        className='plane'
      >
        <Plane/>
      </motion.div>
      <div id="contact">
        <h1 className="contactPageTitle">Let's Connect</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            className="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="from_email"
            className="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            className="msg"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://github.com/SahiMohite" target="_blank" rel="noreferrer"><img src={GithubIcon} alt="Github" className="link"></img></a>
            <a href="https://x.com/SahilMohite1804" target="_blank" rel="noreferrer"><img src={TwitterIcon} alt="Twitter" className="link"></img></a>
            <a href="https://leetcode.com/u/SahilKMohite/" target="_blank" rel="noreferrer"><img src={LeetcodeIcon} alt="Leetcode" className="link leetcode"></img></a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
