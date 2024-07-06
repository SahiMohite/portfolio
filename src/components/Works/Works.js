import React from "react";
import "./Works.css";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">Work Experience</h2>
      <div className="worksDone">
        <div className="work">
          <h2 className="workTitle">Full Stack Developer Intern | <span className="duration">&nbsp; &nbsp; 1 month</span></h2>
          <h3 className="companyName">Mwell Software Solutions</h3>
          <p className="workDesc">
            Designed and implemented user interfaces using React.js. Developed
            reusable components to enhance modularity and maintainability.
          </p>
          {/* <a href="" className="docLink">Documentation</a> */}
        </div>
        <div className="work">
          <h2 className="workTitle">Full Stack Developer Intern | <span className="duration">&nbsp; &nbsp; 2 month</span></h2>
          <h3 className="companyName">Swott System Pvt. Ltd.</h3>
          <p className="workDesc">
            Developed and maintained backend services and APIs using Node.js and
            Express.js. Integrated MongoDB for efficient data storage and
            retrieval. Ensured secure and efficient handling of user data and
            transactions.
          </p>
          {/* <a href="" className="docLink">Documentation</a> */}
        </div>
      </div>
      <div className="worksImgs"></div>
    </section>
  );
};

export default Works;
