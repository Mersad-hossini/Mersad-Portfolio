import React from "react";
import "./LatestProject.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "../../assets/images/bg.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";

import { useTranslation } from "react-i18next";

export default function LatestProject() {
  const { t } = useTranslation();
  return (
    <section id="portfolio">
      <SectionTitle
        title={t("portfolio")}
        subtext={t("portfolioSubText")}
        desc={t("portfolioDecs")}
      />

      <div className="slider-wrapper">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
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
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <a href="">
              <img src={slide_image_1} alt="slide_image" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="">
              <img src={slide_image_1} alt="slide_image" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="">
              <img src={slide_image_1} alt="slide_image" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="">
              <img src={slide_image_1} alt="slide_image" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="">
              <img src={slide_image_1} alt="slide_image" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="">
              <img src={slide_image_1} alt="slide_image" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="">
              <img src={slide_image_1} alt="slide_image" />
            </a>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <i className="fa fa-arrow-left"></i>
            </div>
            <div className="swiper-button-next slider-arrow">
              <i className="fa fa-arrow-right"></i>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
