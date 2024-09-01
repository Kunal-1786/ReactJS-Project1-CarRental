import { useState } from "react";
import Navbar from "./Navbar";
import Background from "./background";
import Hero from "./Hero";
import About from "./About";
import logo from "./assets/logo.png";

function App() {
  const menu = [
    logo,
    "Home",
    "About",
    "Services",
    "Cars",
    "Car Types",
    "Contact",
    "Need help?",
    "855 100 4444",
  ];

  const heroData = [
    { text1: "Rental Car", text2: "Aston Martin DBX" },
    { text1: "Rental Car", text2: "Rolls Royce" },
    { text1: "Rental Car", text2: "Audi RS7 Sportback" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  return (
    <>
      <Background heroCount={heroCount} />
      <Navbar data1={menu} />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
      <About />
    </>
  );
}

export default App;
