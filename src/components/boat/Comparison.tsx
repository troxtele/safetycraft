import { useRef } from "react";

// arrow
import arrow from "@/assets/img/arrow.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import SingleBoatPrice from "@/components/boat/SingleBoatPrice";
import { allBoatsModels } from "@/boatData/allBoats";

export default function Comparison() {
  const swiperRef = useRef(null) as any;
  return (
    <div className="boat-price relative pb-20 pt-10 md:py-20">
      <div className="container">
        <div className="heading absolute left-1/2 -translate-x-1/2 transform overflow-hidden whitespace-nowrap md:top-24 lg:!top-20">
          <h2 className="text-center text-3xl font-extrabold text-[#f7f7f7] sm:!text-6xl md:!text-7xl lg:!text-8xl xl:!text-9xl xs:text-4xl">
            IN COMPARISON
          </h2>
        </div>
        <div className="boat-price relative z-10 pb-10 sm:pb-20 sm:pt-10">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            grabCursor={true}
            spaceBetween={20}
            className="relative z-10"
            loop={true}
          >
            {allBoatsModels.map((item, index: number) => (
              <SwiperSlide key={index}>
                <SingleBoatPrice boat={item.comparison} link={item.id} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="navigation-btns text-white">
            <div
              onClick={() => swiperRef.current.slidePrev()}
              className="prev absolute left-0 top-[12rem] z-10 h-6 w-6 transform  cursor-pointer sm:-left-[1rem] sm:h-10 sm:w-10"
            >
              <img className="w-full rotate-180" src={arrow} alt="" />
            </div>
            <div
              onClick={() => swiperRef.current.slideNext()}
              className="next absolute right-0 top-[12rem] z-10 h-6 w-6 transform  cursor-pointer sm:-right-[1rem]  sm:h-10 sm:w-10"
            >
              <img className="w-full" src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
