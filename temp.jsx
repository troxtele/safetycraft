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

// slider
const slider = ({ swipeRef, data }: { data: [] }) => {
  console.log(data)
  return (
    <Swiper
      onSwiper={(swiper) => {
        swipeRef.current = swiper;
      }}
      navigation={true}
      modules={[Navigation]}
      grabCursor={true}
      loop={true}
      className="relative z-10 max-w-[80rem]"
    >
      {data?.map(( item, i ) => (
        <SwiperSlide key={i} className="w-full">
          <img className="w-full py-10 my-20" src={item} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function ImagePopup({
  setActive,
  active,
  images,
  index,
}: {
  active: boolean;
  images: string[];
  index: number;
  setActive: any;
}) {
  const [data, setData] = useState([]) as any;
  const swipeRef = useRef(null) as any;

  useEffect(() => {
    // swipeRef.current.slideTo(index);

    const keep = images.slice(index).concat(images.slice(0, index));

    setData(keep);

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [active]);
  return (
    <>
      <div className={`image-popup ${active ? "opcaity-100 visible" : "opcaity-0 invisible"}`}>
        <div
          className={`popup fixed inset-0 z-[99999] flex h-screen w-screen items-center justify-center bg-black/90 px-4 sm:px-20`}
        >
          {/* close */}
          <div
            onClick={() => setActive(false)}
            className="close absolute right-[5%] top-[5%] z-[99999] cursor-pointer sm:right-6 sm:top-10"
          >
            <IoMdClose className="text-5xl text-white" />
          </div>
          {/* data */}
          <div className="wrap relative w-full py-20">
            {/* slider */}
            <div className="slider relative w-full">{slider({ swipeRef, data })} </div>
            <div className="navigation-btns text-white">
              <div
                onClick={() => swipeRef.current.slidePrev()}
                className="prev absolute left-[0.5rem] top-1/2 z-10 h-7 w-7 transform cursor-pointer text-3xl  sm:-left-[1rem] sm:h-10 sm:w-10"
              >
                <img className="w-full rotate-180" src={arrow} alt="" />
              </div>
              <div
                onClick={() => swipeRef.current.slideNext()}
                className="next absolute right-[0.5rem] top-1/2 z-10 h-7 w-7 transform cursor-pointer text-3xl sm:-right-[1rem] sm:h-10 sm:w-10"
              >
                <img className="w-full" src={arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


// //////////////////////////
import { useRef, useEffect, useState } from "react";
// arrow
import arrow from "@/assets/img/arrow.svg";

import { IoMdClose } from "react-icons/io";

export default function ImagePopup({
  setActive,
  active,
  images,
  index,
}: {
  active: boolean;
  images: string[];
  index: number;
  setActive: any;
}) {
  // const swipeRef = useRef(null) as any;
  const [data, setData] = useState(images);
  useEffect(() => {
    // swipeRef.current.slideTo(index);

    setData(images.slice(index).concat(images.slice(0, index)));

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [active, index]);
  return (
    <>
      <div
        className={`image-popup fixed inset-0 z-[99999] flex h-screen w-screen items-center justify-center bg-black/90 px-4 transition-all duration-300 sm:px-20 ${
          active ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* close */}
        <div
          onClick={() => setActive(false)}
          className="close absolute right-[5%] top-[5%] z-[99999] cursor-pointer sm:right-6 sm:top-10"
        >
          <IoMdClose className="text-5xl text-white" />
        </div>
        {/* data */}
        <div className="wrap relative w-full h-full">
          {/* <PopUpSlider data={data} /> */}

          <div className="slider relative gap-4 h-full">
            {data?.map((item, i) => (
              <div className="img absolute left-0 top-0 h-full w-full">
                {console.log(index, i)}
                <img
                  className={` w-full transition-all duration-300 ${index === i ? "opacity-100" : "opacity-0"}`}
                  src={item}
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="navigation-btns text-white">
            {/* <div
              onClick={() => swipeRef.current.slidePrev()}
              className="prev absolute left-[0.5rem] top-1/2 z-10 h-7 w-7 transform cursor-pointer text-3xl  sm:-left-[1rem] sm:h-10 sm:w-10"
            >
              <img className="w-full rotate-180" src={arrow} alt="" />
            </div>
            <div
              onClick={() => swipeRef.current.slideNext()}
              className="next absolute right-[0.5rem] top-1/2 z-10 h-7 w-7 transform cursor-pointer text-3xl sm:-right-[1rem] sm:h-10 sm:w-10"
            >
              <img className="w-full" src={arrow} alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
