import React from 'react'

const Hero = ({heroData, heroCount, setHeroCount}) => {
  return (
    <>
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="hero-title">{heroData.text1}</h1>
          <p className="hero-text">{heroData.text2}</p>
          <div className="d-flex">
            <button type="button" className="btn">
              View Details
            </button>
            <button type="button" className="btn btn1">
              Rent Now
            </button>
          </div>
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
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
      </div>
    </>
  );
}

export default Hero