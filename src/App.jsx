import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import logo from "./assets/logo.png";
import Hero from "./Hero";

import About from "./About";
import aboutimg from "./assets/aboutimg.jpg";

import Services from "./Services";
import serviceimg1 from "./assets/serviceimg1.jpg";
import serviceimg2 from "./assets/serviceimg2.jpg";
import serviceimg3 from "./assets/serviceimg3.jpg";

import Cars from "./Cars";
import cars1 from "./assets/cars1.jpg";
import cars2 from "./assets/cars2.jpg";
import cars3 from "./assets/cars3.jpg";
import cars4 from "./assets/cars4.jpg";
import cars5 from "./assets/cars5.jpg";

import CarsType from "./CarsType";
import carsType1 from "./assets/carstype1.jpg";
import carsType2 from "./assets/carstype2.jpg";
import carsType3 from "./assets/carstype3.jpg";
import carsType4 from "./assets/carstype4.jpg";
import carsType5 from "./assets/carstype5.jpg";
import carsType6 from "./assets/carstype6.jpg";

import Contact from "./Contact";
import carsLogo1 from "./assets/carlogo1.png";
import carsLogo2 from "./assets/carlogo2.png";
import carsLogo3 from "./assets/carlogo3.png";
import carsLogo4 from "./assets/carlogo4.png";
import carsLogo5 from "./assets/carlogo5.png";
import carsLogo6 from "./assets/carlogo6.png";
import carsLogo7 from "./assets/carlogo7.png";

import AOS from "aos";
import "aos/dist/aos.css";

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

  const aboutData = [
    {
      text1: "We Are More Than",
      text2: "A Car Rental Company",
      text3:
        "Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton tellus eu euismod nisl massa nutodio in the miss volume place urna lacinia eros nunta urna mauris vehicula rutrum in the miss on volume interdum.",
    },
    {
      text1: "Sports and Luxury Cars",
      text2: "Economy Cars ",
    },
    aboutimg,
  ];

  const serviceData = [
    { text: "WHAT WE DO" },
    { text1: "Our", text2: "Services" },
    { text: "Corporate Car Rental" },
    { text: "Car Rental with Driver" },
    { text: "Airport Transfer" },
    serviceimg1,
    serviceimg2,
    serviceimg3,
  ];

  const carsData = [
    { text: "SELECT YOUR CAR" },
    { text1: "Luxury", text2: "Car Fleet" },
    { text: "Luxury Car Fleet" },
    {
      text2: "Aston Martin DBX",
      text3: "Audi RS7 Sportback",
      text4: "Rolls Royce Cullinan",
      text5: "Lamborghini Urus",
      text6: "Bugatti Mistral W16",
    },
    { text: "/day" },
    {
      text1: "$600",
      text2: "$800",
      text4: "$700",
      text5: "$900",
      text6: "$750",
    },
    cars1,
    cars2,
    cars3,
    cars4,
    cars5,
  ];

  const carsTypeData = [
    { text: "CATEGORIES" },
    { text1: "Rental", text2: "Car Types" },
    {
      text1: "Sedan",
      text2: "Small Cars",
      text3: "Sports Cars",
      text4: "Luxury Cars",
      text5: "Convertible",
      text6: "SUVs",
    },
    carsType1,
    carsType2,
    carsType3,
    carsType4,
    carsType5,
    carsType6,
  ];

  const contactData = [
    carsLogo1,
    carsLogo2,
    carsLogo3,
    carsLogo4,
    carsLogo5,
    carsLogo6,
    carsLogo7,
    logo,
    { text: "CONTACT" },
    { text1: "Connect", text2: "With Us" },
    { text1: "Call us", text2: "+971 52-333-4444" },
    { text1: "Write to us", text2: "info@renax.com" },
    { text1: "Address", text2: "Dubai, Water Tower, Office 123" },
    {
      text: "Rent a car imperdiet sapien porttito the bibenum ellentesue the commodo erat nesuen.",
    },
    {
      text1: "Quick Links",
      text2: "Home",
      text3: "About",
      text4: "Services",
      text5: "Cars",
      text6: "Car Types",
      text7: "Contact",
    },
    { text: "Subscribe" },
    {
      text: "Want to be notified about our services. Just sign up and we'll send you a notification by email.",
    },
    { text: "©2024 All rights reserved." },
  ];

  const [heroCount, setHeroCount] = useState(0);

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
      });
    }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar data1={menu} />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
      <About aboutData={aboutData} />
      <Services serviceData={serviceData} />
      <Cars carsData={carsData} />
      <CarsType carsTypeData={carsTypeData} />
      <Contact contactData={contactData} />
    </>
  );
}

export default App;
