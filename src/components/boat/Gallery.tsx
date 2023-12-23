import { useEffect, useRef, useState } from "react";
import arrow from "@/assets/img/arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import ImagePopup from "@/components/boat/ImagePopup";
import { Navigation, Pagination } from "swiper/modules";
import { FiPlusSquare } from "react-icons/fi";

type GalleryProps = {
  galleryImgData: string[];
};

export default function Gallery({ galleryImgData }: GalleryProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const galleryRef = useRef(null) as any;
  const [activeGallery, setActiveGallery] = useState(1);
  const [activePopup, setActivePopup] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideChange, setSlideChange] = useState("");

  const handleClick = (index: number) => {
    setActivePopup(true);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (slideChange.includes("next")) {
      galleryRef.current.slideNext();
    }
    if (slideChange.includes("prev")) {
      galleryRef.current.slidePrev();
    }
  }, [slideChange]);

  return (
    <div className="gallery overflow-hidden pt-10 sm:pb-20">
      <div className="wrapper max-w-screen relative m-auto ">
        <Swiper
          onSwiper={(swiper) => {
            galleryRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveGallery(swiper.activeIndex);
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            640: {
              slidesPerView: 1,
            },

            1024: {
              slidesPerView: 1.4,
            },
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          grabCursor={true}
          spaceBetween={100}
          loop={true}
          centeredSlides={true}
          className="relative z-10"
        >
          {galleryImgData.map((img, index) => (
            <SwiperSlide key={index} className="group relative z-10">
              <img className="w-full" src={img} alt="" />

              {/* imge show */}
              <div
                className="plus-img absolute bottom-[1rem] right-[1rem] z-10 scale-75 cursor-pointer text-3xl text-white transition-all duration-300 group-hover:rotate-180 group-hover:scale-100"
                onClick={() => handleClick(index)}
              >
                <FiPlusSquare />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* active slide */}
        <div className="active-slide absolute left-[1rem] top-[1rem] z-20 text-primary-700 sm:bottom-[1%] lg:left-[18%]">
          {activeGallery + 1}/{galleryImgData.length}
        </div>

        <div className="navigation-btns text-white">
          <div
            onClick={() => galleryRef.current.slidePrev()}
            className="prev absolute left-[1.5rem] top-1/2 z-10 h-7 w-7 transform cursor-pointer sm:left-[2.5rem] md:left-[5rem]  md:h-10 md:w-10"
          >
            <img className="w-full rotate-180" src={arrow} alt="" />
          </div>
          <div
            onClick={() => galleryRef.current.slideNext()}
            className="next absolute right-[1.5rem] top-1/2 z-10 h-7 w-7 transform cursor-pointer sm:right-[2.5rem] md:right-[5rem]  md:h-10 md:w-10"
          >
            <img className="w-full" src={arrow} alt="" />
          </div>
        </div>
      </div>

      {/* popup */}
      <ImagePopup
        setActive={setActivePopup}
        active={activePopup}
        images={galleryImgData}
        index={activeIndex}
        setSlide={setSlideChange}
      />
    </div>
  );
}
