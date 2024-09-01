import React from 'react'

function Services({serviceData}) {
    const [
      service1,
      service2,
      service3,
      service4,
      service5,
      service6,
      service7,
      service8,
      service9
    ] = serviceData;
  return (
    <>
      <section id="services-section" className="services-section pt-5 pb-5">
        <div className="container pt-5 pb-5">
          <div className="service-title-box">
            <p className="service-title1">{service1.text}</p>
            <p className="service-title2">
              {service2.text1}
              <span> {service2.text2}</span>
            </p>
          </div>
          <div className="row g-3 g-lg-5 service-img-main-holder">
            <div className="service-img-holder col-md-4">
              <img src={service6} className="service-img" />
              <div className="service-btn">
                <button type="button" className="service-names">
                  {service3.text}
                </button>
              </div>
            </div>
            <div className="service-img-holder col-md-4">
              <img src={service7} className="service-img" />
              <div className="service-btn">
                <button type="button" className="service-names">
                  {service4.text}
                </button>
              </div>
            </div>
            <div className="service-img-holder col-md-4">
              <img src={service8} className="service-img" />
              <div className="service-btn">
                <button type="button" className="service-names">
                  {service5.text}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-img-window"></div>
    </>
  );
}

export default Services