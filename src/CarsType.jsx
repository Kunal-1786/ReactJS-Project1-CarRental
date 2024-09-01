import React from "react";

const CarsType = ({ carsTypeData }) => {
  const [
    carsType1,
    carsType2,
    carsType3,
    carsType4,
    carsType5,
    carsType6,
    carsType7,
    carsType8,
    carsType9,
  ] = carsTypeData;

  return (
    <>
      <section id="carstype-section" className="carstype-section pt-5 pb-5">
        <div className="container pt-5 pb-5">
          <div className="cartype-title-box">
            <p className="service-title1">{carsType1.text}</p>
            <p className="service-title2">
              {carsType2.text1}
              <span> {carsType2.text2}</span>
            </p>
          </div>
          <div className="row g-3 g-lg-5 cartype-img-main-holder">
            <div className="cartype-img-holder col-md-4">
              <img src={carsType4} className="cartype-img" />
              <div className="cartype-btn">
                <button type="button" className="cartype-names">
                  {carsType3.text6}
                </button>
              </div>
            </div>
            <div className="cartype-img-holder col-md-4">
              <img src={carsType5} className="cartype-img" />
              <div className="cartype-btn">
                <button type="button" className="cartype-names">
                  {carsType3.text4}
                </button>
              </div>
            </div>
            <div className="cartype-img-holder col-md-4">
              <img src={carsType6} className="cartype-img" />
              <div className="cartype-btn">
                <button type="button" className="cartype-names">
                  {carsType3.text3}
                </button>
              </div>
            </div>
            <div className="cartype-img-holder col-md-4">
              <img src={carsType7} className="cartype-img" />
              <div className="cartype-btn">
                <button type="button" className="cartype-names">
                  {carsType3.text1}
                </button>
              </div>
            </div>
            <div className="cartype-img-holder col-md-4">
              <img src={carsType8} className="cartype-img" />
              <div className="cartype-btn">
                <button type="button" className="cartype-names">
                  {carsType3.text5}
                </button>
              </div>
            </div>
            <div className="cartype-img-holder col-md-4">
              <img src={carsType9} className="cartype-img" />
              <div className="cartype-btn">
                <button type="button" className="cartype-names">
                  {carsType3.text2}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-img-window2"></div>
    </>
  );
};

export default CarsType;
