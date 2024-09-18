import React from "react";
import bg1 from "./assets/background/bg1.jpg";
import bg2 from "./assets/background/bg2.jpg";
import bg3 from "./assets/background/bg3.jpg";

const Hero = ({ heroData, heroCount, setHeroCount }) => {
  let backgroundImage;

  if (heroCount === 0) {
    backgroundImage = bg1;
  } else if (heroCount === 1) {
    backgroundImage = bg2;
  } else if (heroCount === 2) {
    backgroundImage = bg3;
  }
  return (
    <>
      <section
        id="hero-section"
        className="hero-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-text-box">
          <h1 className="hero-title">{heroData.text1}</h1>
          <p className="hero-text">{heroData.text2}</p>
          <div className="d-md-flex">
            <button type="button" className="btn">
              View Details
            </button>
            <button type="button" className="btn btn1">
              Rent Now
            </button>
          </div>
        </div>

        <div className="hero-dot-play">
          <ul className="hero-dots">
            <li
              onClick={() => setHeroCount(0)}
              className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
            ></li>
            <li
              onClick={() => setHeroCount(1)}
              className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
            ></li>
            <li
              onClick={() => setHeroCount(2)}
              className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
            ></li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Hero;
