// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper/modules";

export default function PopUpSlider({ data }) {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation, EffectFade]}
        effect="fade"
        grabCursor={true}
        loop={true}
        className="relative z-10 max-w-[80rem]"
      >
        {data?.map((item, i) => (
          <SwiperSlide key={i} className="w-full">
            <img className="w-full py-10" src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
