import React from "react";

const About = ({ aboutData }) => {
  const [about1, about2, about3] = aboutData;
  return (
    <>
      <section id="about-section" className="about-section">
        <div className="container">
          <div className="row pt-5 pb-5 about-text-box">
            <div className="col-md-6 pt-5" data-aos="fade-right">
              <p className="about-title1">
                {about1.text1}
                <span className="about-title2"> {about1.text2} </span>
              </p>
              <p className="about-text">{about1.text3}</p>
              <p className="about-text d-flex">
                <div className="about-icon">
                  <i
                    className="fa-solid fa-check"
                    style={{ color: "#f5b754" }}
                  ></i>
                </div>
                {about2.text1}
              </p>
              <p className="about-text d-flex">
                <div className="about-icon">
                  <i
                    className="fa-solid fa-check"
                    style={{ color: "#f5b754" }}
                  ></i>
                </div>
                {about2.text2}
              </p>

              <button type="button" className="btn">
                Read More
              </button>
            </div>
            <div className="col-md-6 pt-4" data-aos="fade-left">
              <div className="about-img-holder">
                <img src={about3} className="about-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
