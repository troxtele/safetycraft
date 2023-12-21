import { useRef, useEffect, useState } from "react";
// arrow
import arrow from "@/assets/img/arrow.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { IoMdClose } from "react-icons/io";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/effect-fade";
import { Navigation } from "swiper/modules";

export default function ImagePopup({
  setActive,
  active,
  images,
  index,
  setSlide,
}: {
  active: boolean;
  images: string[];
  index: number;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setSlide: React.Dispatch<React.SetStateAction<string>>;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef() as any;
  const [data, setData] = useState<string[]>([]);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
      const sortData = images.slice(index).concat(images.slice(0, index));
      swiperRef.current.slideTo(0);
      setData(sortData);
    } else {
      document.body.style.overflow = "unset";
      setData([]);
    }
  }, [active]);

  return (
    <div
      className={`popup image-popup fixed inset-0 z-[99999] flex h-screen w-screen items-center justify-center bg-black/90 px-4 backdrop-blur-2xl transition-all duration-[400ms] sm:px-20 ${
        active ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* close */}
      <div
        onClick={() => {
          setActive(false);
          setFirstLoad(false);
        }}
        className="close absolute right-[5%] top-[5%] z-[99999] cursor-pointer sm:right-6 sm:top-10"
      >
        <IoMdClose className="text-5xl text-white" />
      </div>
      {/* data */}
      <div className="wrap relative flex w-full items-center justify-center">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChangeTransitionEnd={(swiper) => {
            console.log(swiper);
          }}
          onRealIndexChange={(swiper) => {
            setFirstLoad(true);
            if (firstLoad === false) return;

            const direction = swiper.swipeDirection;
            if (firstLoad && direction) {
              setSlide(direction + swiper.realIndex);
            }
          }}
          navigation={true}
          modules={[Navigation]}
          grabCursor={true}
          loop={true}
          className="relative z-10 max-w-[80rem]"
        >
          {data?.map((item, i) => (
            <SwiperSlide key={index + i} className="w-full">
              <img className="w-full" src={item} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="navigation-btns text-white">
          <div
            onClick={() => {
              swiperRef.current.swipeDirection = "prev";
              swiperRef.current.slidePrev();
            }}
            className="prev absolute left-[0.5rem] top-1/2 z-10 h-7 w-7 transform cursor-pointer text-3xl  sm:-left-[1rem] sm:h-10 sm:w-10"
          >
            <img className="w-full rotate-180" src={arrow} alt="" />
          </div>
          <div
            onClick={() => {
              swiperRef.current.swipeDirection = "next";
              swiperRef.current.slideNext();
            }}
            className="next absolute right-[0.5rem] top-1/2 z-10 h-7 w-7 transform cursor-pointer text-3xl sm:-right-[1rem] sm:h-10 sm:w-10"
          >
            <img className="w-full" src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
