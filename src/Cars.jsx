import React from "react";

const Cars = ({ carsData }) => {
  const [
    cars1,
    cars2,
    cars3,
    cars4,
    cars5,
    cars6,
    cars7,
    cars8,
    cars9,
    cars10,
    cars11,
    cars12,
  ] = carsData;
  return (
    <>
      <section id="cars-section" className="cars-section">
        <div className="container pt-5 pb-5">
          <div className="service-title-box">
            <p className="service-title1">{cars1.text}</p>
            <p className="service-title2">
              {cars2.text1}
              <span> {cars2.text2}</span>
            </p>
          </div>

          <div>
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card">
                        <img className="card-img-top" src={cars7} />
                        <div className="card-body">
                          <h5 className="card-title">{cars4.text5}</h5>
                          <p className="card-text">
                            {cars6.text6}
                            <span>{cars5.text}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card">
                        <img className="card-img-top" src={cars8} />
                        <div className="card-body">
                          <h5 className="card-title">{cars4.text3}</h5>
                          <p className="card-text">
                            {cars6.text3}
                            <span>{cars5.text}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card">
                        <img className="card-img-top" src={cars9} />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">
                            {cars6.text3}
                            <span>{cars5.text}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card">
                        <img className="card-img-top" src={cars10} />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">
                            {cars6.text3}
                            <span>{cars5.text}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card">
                        <img className="card-img-top" src={cars11} />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">
                            {cars6.text3}
                            <span>{cars5.text}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card">
                        <img className="card-img-top" src={cars12} />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">
                            {cars6.text3}
                            <span>{cars5.text}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cars;
