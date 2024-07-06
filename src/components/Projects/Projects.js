import React from "react";
import "./Projects.css";
import RecipeImg from "../../assets/recipeImg.png";
import YoutubeImg from "../../assets/youtubeImg.jpg";
import FinanceImg from "../../assets/financeTracker.jfif";
import PlacesImg from "../../assets/placesImg.jpg";
import GithubImg from "../../assets/github.png";
import BookImg from "../../assets/bookStrore.avif";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectsTitle">My Projects</h2>
      <div className="projectsContainer">
        <div className="project">
          {/* <a href="#" target="_blank" rel="noreferrer"> */}
            <div className="projectImg">
              <img src={RecipeImg} alt="Recipe App"></img>
            </div>
            <div className="projectDesc">
              <h3>Recipe App</h3>
              <p>
                A recipe app is a digital platform that allows users to
                discover, save, and share recipes. Users can browse a wide
                variety of recipes. The app typically includes
                features for creating step-by-step cooking instructions with images or videos.
                Additionally, users can contribute their own recipes and save other users recipes.
              </p>
            </div>
            <div className="projectSourceCode">
              <a
                href="https://github.com/SahiMohite/recipeApp.git"
                className="githubLink"
                alt="Link"
                target="_blank"
                rel="noreferrer"
              >
                <img src={GithubImg} alt="Git"></img>
              </a>
            </div>
          {/* </a> */}
        </div>
        <div className="project">
          {/* <a href="#" target="_blank" rel="noreferrer"> */}
            <div className="projectImg">
              <img src={FinanceImg} alt="Finance Tracker"></img>
            </div>
            <div className="projectDesc">
              <h3>BudgetBuddy</h3>
              <p>
                A platform where individuals manage their finances by tracking
                income, expenses, and budgets. This tool empowers users to gain
                control over their financial health, identify saving
                opportunities, and achieve their financial goals efficiently.
              </p>
            </div>
            <div className="projectSourceCode">
              <a
                href="https://github.com/SahiMohite/BudgetBuddy.git"
                className="githubLink"
                alt="Link"
                target="_blank"
                rel="noreferrer"
              >
                <img src={GithubImg} alt="Git"></img>
              </a>
            </div>
          {/* </a> */}
        </div>
        <div className="project">
          {/* <a href="" target="_blank" rel="noreferrer"> */}
            <div className="projectImg">
              <img src={YoutubeImg} alt="Youtube Clone"></img>
            </div>
            <div className="projectDesc">
              <h3>Youtube Clone</h3>
              <p>
                A platform that mimics the core functionalities of YouTube,
                allowing users to view videos. It typically includes features
                such as video streaming, video filtering and video searching.
              </p>
            </div>
            <div className="projectSourceCode">
              <a
                href="https://github.com/SahiMohite/Youtube-Clone.git"
                className="githubLink"
                alt="Link"
                target="_blank"
                rel="noreferrer"
              >
                <img src={GithubImg} alt="Git"></img>
              </a>
            </div>
          {/* </a> */}
        </div>
        <div className="project">
          <a
            href="https://shareplacewithme.netlify.app/"
            className="liveLink"
            target="_blank"
            rel="noreferrer"
          >
            <div className="projectImg">
              <img src={PlacesImg} alt="Share Places"></img>
            </div>
            <div className="projectDesc">
              <h3>Share places</h3>
              <p>
                Allows users to share and discover interesting locations. Users
                can upload photos, and provide details about various places they
                visit. The platform user authentication, social sharing, making
                it easy for users to explore new destinations and share their
                experiences with others.
              </p>
            </div>
            <div className="projectSourceCode">
              <a
                href="https://github.com/SahiMohite/share-places.git"
                alt="Link"
                className="githubLink"
                target="_blank"
                rel="noreferrer"
              >
                <img src={GithubImg} alt="Git"></img>
              </a>
            </div>
          </a>
        </div>
        <div className="project">
          <a
            href="https://sahilbookstore.netlify.app/"
            className="liveLink"
            target="_blank"
            rel="noreferrer"
          >
            <div className="projectImg">
              <img src={BookImg} alt="Bookie"></img>
            </div>
            <div className="projectDesc">
              <h3>Bookie</h3>
              <p>
                An online book store website provides a convenient platform for
                users to browse, purchase, and manage a wide range of books in
                digital and physical formats. Users can explore genres fostering
                a seamless interaction between readers and authors/publishers
                worldwide.
              </p>
            </div>
            <div className="projectSourceCode">
              <a
                href="https://github.com/SahiMohite/Online-Book-Store.git"
                alt="Link"
                className="githubLink"
                target="_blank"
                rel="noreferrer"
              >
                <img src={GithubImg} alt="Git"></img>
              </a>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
