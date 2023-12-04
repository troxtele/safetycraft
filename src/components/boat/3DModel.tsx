import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// all model iamges
import ImgModelOne from "@/assets/img/boat/3d-model/boat-1.webp";
import ImgModelTwo from "@/assets/img/boat/3d-model/boat-2.webp";
import ImgModelThree from "@/assets/img/boat/3d-model/boat-3.webp";
import ImgModelFour from "@/assets/img/boat/3d-model/boat-4.webp";
import ImgModelFive from "@/assets/img/boat/3d-model/boat-5.webp";

import { Link } from "react-router-dom";
const modelData = [
  { id: 1, img: ImgModelOne },
  { id: 2, img: ImgModelTwo },
  { id: 3, img: ImgModelThree },
  { id: 4, img: ImgModelFour },
  { id: 5, img: ImgModelFive },
];

export default function ThreeDModel() {
  const [model, setModel] = useState(modelData[0]);
  return (
    <div className="three-d-model overflow-hidden pb-10 pt-10 sm:pb-20">
      <div className="container">
        <div className="heading text-center text-3xl font-extrabold  sm:text-4xl md:text-5xl">
          <h1>
            3D STABI <span className="text-primary-700">NAVIGATOR</span>
          </h1>
        </div>
        <div className="3dmodel-gallery desktop mt-10 hidden gap-10 lg:flex">
          {/* left */}
          <div className="select-model grid gap-2">
            {modelData.map((item, index) => (
              <div
                onClick={() => setModel(item)}
                key={index}
                className={`model group flex  h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-xl  border-2 transition-all duration-200 ${
                  model.id === item.id ? "border-primary-700 ring-2 ring-primary-500 ring-offset-1" : "border-black/50"
                }`}
              >
                <img className=" transition-all duration-300 group-hover:scale-110" src={item.img} alt="model" />
              </div>
            ))}
          </div>
          {/* right */}
          <div className="right flex gap-6 w-full">
            {/* img */}
            <div className="selected-model w-full">
              <div className="model-img">
                <img className="w-full" src={model.img} alt="" />
              </div>
            </div>
            {/* details */}
            <div className="detail max-w-[20rem]">
              <div className="name">
                <span className="mr-2 text-lg font-extrabold">Name:</span> Model One
              </div>
              <div className="spec">
                <span className="mr-2 text-lg font-extrabold">specification:</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sint tenetur dolore. Error atque quae
                blanditiis illum illo possimus autem, laboriosam quia nam obcaecati, sapiente harum expedita odio eaque
                similique?
              </div>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="mobile mt-12 lg:hidden">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            grabCursor={true}
            spaceBetween={100}
            centeredSlides={true}
            className="relative z-10"
          >
            {modelData.map((item, index) => (
              <SwiperSlide key={index} className="group relative z-10">
                <img className="w-full" src={item.img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* details */}
          <div className="detail mt-6">
            <div className="name">
              <span className="mr-2 text-lg font-extrabold">Name:</span> Model One
            </div>
            <div className="spec">
              <span className="mr-2 text-lg font-extrabold">specification:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sint tenetur dolore. Error atque quae
              blanditiis illum illo possimus autem, laboriosam quia nam obcaecati, sapiente harum expedita odio eaque
              similique?
            </div>
          </div>
        </div>

        {/* btns */}
        <div className="btns mt-10 grid flex-col justify-center gap-5 text-white sm:grid-cols-2 md:flex md:flex-row">
          {["get quote", "find dealership", "let's chat"].map((item, index) => (
            <Link
              to="/"
              key={index}
              className="btn group flex cursor-pointer justify-center gap-4 bg-primary-700 px-8 py-4 text-center font-bold uppercase transition-all duration-300 hover:bg-gray-900"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
