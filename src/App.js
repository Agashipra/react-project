import React, { useState } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import HeroSection2 from "./components/HeroSection2/HeroSection2";
import HeroSection3 from "./components/HeroSection3/HeroSection3";
import "./App.css";

const App = () => {
  const [activeSection, setActiveSection] = useState(1);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollY < windowHeight) {
      setActiveSection(1);
    } else if (scrollY >= windowHeight && scrollY < windowHeight * 2) {
      setActiveSection(2);
    } else if (scrollY >= windowHeight * 2) {
      setActiveSection(3);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="App">
      <HeroSection isActive={activeSection === 1} />
      <HeroSection2 isActive={activeSection === 2} />
      <HeroSection3 isActive={activeSection === 3} />
    </div>
  );
};

export default App;
