import { useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./sections/Projects";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default App;
