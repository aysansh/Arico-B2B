import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../assets/styles/swiperStyles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ArSlideCards from "../aricoSlidCards/ArSlideCards";
import ArBoxTitle from "../aricoBoxTitle/ArBoxTitle";

export default function ArSwiperSection() {
  return (
    <>
      <ArBoxTitle title={"Numbers that impress."} titleClassName={'my-16'} />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ArSlideCards
            cardLink={""}
            headNum={"67"}
            textContent={
              "of the B2B buyer journey takes place via digital channels."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ArSlideCards
            cardLink={""}
            headNum={"70"}
            textContent={
              " of B2B buyers research online to find the products they need."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ArSlideCards
            cardLink={""}
            headNum={"90"}
            textContent={
              "of B2B buyers would turn to a competitor if a vendor's digital channel can't keep up with their needs."
            }
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
