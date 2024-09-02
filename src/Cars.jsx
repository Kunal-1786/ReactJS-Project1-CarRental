import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

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

          <div className="swiper-container-wrapper">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                },
                769: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper-container"
            >
              <SwiperSlide>
                <div
                  className="card">
                  <img src={cars7} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{cars4.text5}</h5>
                    <p className="card-text">
                      {cars6.text6}
                      <span> {cars5.text}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="card">
                  <img src={cars8} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{cars4.text3}</h5>
                    <p className="card-text">
                      {cars6.text4}
                      <span> {cars5.text}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="card">
                  <img src={cars9} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{cars4.text2}</h5>
                    <p className="card-text">
                      {cars6.text1}
                      <span> {cars5.text}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="card">
                  <img src={cars10} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{cars4.text6}</h5>
                    <p className="card-text">
                      {cars6.text5}
                      <span> {cars5.text}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="card">
                  <img src={cars11} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{cars4.text4}</h5>
                    <p className="card-text">
                      {cars6.text2}
                      <span> {cars5.text}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <div className="slider-controller">
                <div className="swiper-button-prev slide-arrow">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slide-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cars;
