import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/Intro.js";
import Skill from "./components/Skills/Skill.js";
import Works from "./components/Works/Works.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import Projects from "./components/Projects/Projects.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
      <Projects />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
