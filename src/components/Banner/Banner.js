import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import "./styles.scss";

export function Banner({data}) {
  const currentUrl = window.location.href;

  return (
    <div id="container-banner">
      <div className="content-texts">
        <Swiper
          className="swiper"
          spaceBetween={50}
          slidesPerView={4}
          centeredSlides
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          {
            data.map(client => (
              <SwiperSlide>
                <img src={client.image} alt="img" style={{height: '80px', width: '80px'}}/>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>

      <div className="content-buttons">
        <p>
          <a className="about-button" href={currentUrl + "about"}>
            Sobre o SlideEzoom
          </a>
        </p>

        <p>
          <a className="button-start" href={currentUrl + "start"}>
            Começar
          </a>
        </p>
      </div>
    </div>
  );
}
