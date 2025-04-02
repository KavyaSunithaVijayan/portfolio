import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Snowfall from "react-snowfall";
import HomePage from "./pages/portfolio/homePage";
import About from "./pages/portfolio/about";
import Technologies from "./pages/portfolio/technology";
import Experience from "./pages/portfolio/experience";
import Education from "./pages/portfolio/education";
import Work from "./pages/portfolio/work";
import Skills from "./pages/portfolio/skills";
import Contact from "./pages/portfolio/contact";
import "react-vertical-timeline-component/style.min.css";
import "keen-slider/keen-slider.min.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="px-10 lg:flex-grow ">
        
        <HomePage />
        <About />
        <Technologies />
        <Experience />
        <Education />
        <Work />
        <Skills />
        <Contact />
      </div>
      <Footer />
      <Snowfall
        color="red"
        style={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0 }}
        snowflakeCount={60}
      />
    </div>
  );
}

export default App;
