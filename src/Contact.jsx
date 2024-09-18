import React from "react";
import $ from "jquery";
function Contact({ contactData }) {
  const [
    contactData1,
    contactData2,
    contactData3,
    contactData4,
    contactData5,
    contactData6,
    contactData7,
    contactData8,
    contactData9,
    contactData10,
    contactData11,
    contactData12,
    contactData13,
    contactData14,
    contactData15,
    contactData16,
    contactData17,
    contactData18,
  ] = contactData;

  $(function () {
    var slide = $(".logo-slide");
    var slideWidth = slide[0].scrollWidth;
    var viewportWidth = $(".logo-slider").width();

    while (slideWidth < viewportWidth * 2) {
      slide.append(slide.children().clone());
      slideWidth = slide[0].scrollWidth;
    }

    var duration = (slideWidth / viewportWidth) * 20;
    slide.css("animation-duration", duration + "s");
  });

  return (
    <>
      <div className="logo-slider" id="logo-slider">
        <div className="logo-slide">
          <div className="car-logo-holder">
            <img src={contactData1} className="carlogo-img" />
          </div>
          <div className="car-logo-holder">
            <img src={contactData2} className="carlogo-img" />
          </div>
          <div className="car-logo-holder">
            <img src={contactData3} className="carlogo-img" />
          </div>
          <div className="car-logo-holder">
            <img src={contactData4} className="carlogo-img" />
          </div>
          <div className="car-logo-holder">
            <img src={contactData5} className="carlogo-img" />
          </div>
          <div className="car-logo-holder">
            <img src={contactData6} className="carlogo-img" />
          </div>
          <div className="car-logo-holder">
            <img src={contactData7} className="carlogo-img" />
          </div>
        </div>
      </div>
      <section id="contact-section" className="contact-section">
        <div className="contact-holder container">
          <div className="cartype-title-box">
            <p className="service-title1 pt-5">{contactData9.text}</p>
            <p className="service-title2">
              {contactData10.text1}
              <span> {contactData10.text2}</span>
            </p>
          </div>
          <div>
            <div className="row">
              <div className="col-md-4">
                <p></p>
                <p className="contact-subtitle1">{contactData11.text1}</p>
                <p className="contact-text">{contactData11.text2}</p>
              </div>
              <div className="col-md-4">
                <p></p>
                <p className="contact-subtitle1">{contactData12.text1}</p>
                <p className="contact-text">{contactData12.text2}</p>
              </div>
              <div className="col-md-4">
                <p></p>
                <p className="contact-subtitle1">{contactData13.text1}</p>
                <p className="contact-text">{contactData13.text2}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="contact-logo mb-3">
                  <img src={contactData8} className="contact-logo-img" />
                </div>
                <p className="contact-text">{contactData14.text}</p>
                <div className="d-flex g-3">
                  <div className="fa-icons">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </div>
                  <div className="fa-icons">
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </div>
                  <div className="fa-icons">
                    <a href="#">
                      <i className="fa-brands fa-tiktok"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <p className="contact-subtitle2">{contactData15.text1}</p>
                <ul className="contact-text">
                  <li>
                    <a href="#hero-section">{contactData15.text2}</a>
                  </li>
                  <li>
                    <a href="#about-section">{contactData15.text3}</a>
                  </li>
                  <li>
                    <a href="#services-section">{contactData15.text4}</a>
                  </li>
                  <li>
                    <a href="#cars-section">{contactData15.text5}</a>
                  </li>
                  <li>
                    <a href="#cartype-section">{contactData15.text6}</a>
                  </li>
                  <li>
                    <a href="#contact-section">{contactData15.text7}</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <p className="contact-subtitle2">{contactData16.text}</p>
                <p className="contact-text">{contactData17.text}</p>
                <div className="contact-input-box pt-2 pb-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="contact-input"
                  />
                  <button type="submit" className="contact-btn">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="contact-text" />
        </div>
        <div className="footer-section">
          <p className="text-center">{contactData18.text}</p>
        </div>
      </section>
    </>
  );
}

export default Contact;
