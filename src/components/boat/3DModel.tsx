import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import modules
import { Pagination } from "swiper/modules";

// arrow
import arrow from "@/assets/img/arrow.svg";

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
        <div className="3dmodel-gallery desktop mt-10 hidden lg:flex lg:gap-6">
          {/* left */}
          <div className="select-model baot-model-img-view flex flex-col gap-2.5 rounded-lg p-4">
            {modelData.map((item, index) => (
              <div
                onClick={() => setModel(item)}
                key={index}
                className={`model group relative flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-xl border transition-all duration-200 ${
                  model.id === item.id ? "border-primary-700 ring-2 ring-primary-500 ring-offset-1" : "border-black/50"
                }`}
              >
                <img className="transition-all duration-300 group-hover:scale-110" src={item.img} alt="model" />

                {/* arrow */}
                <div
                  className={`arrow-middle absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    model.id === item.id
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <img className=" h-[1.7rem] w-[1.7rem] transform opacity-75" src={arrow} alt="" />
                </div>
              </div>
            ))}
          </div>
          {/* right */}
          <div className="right flex w-full flex-col gap-6 xl:flex-row">
            {/* img */}
            <div className="selected-model w-full ">
              <div className="model-img overflow-hidden rounded-md p-[0.1rem]">
                <img className="w-full rounded-md lg:h-[24rem] xl:h-[30rem]" src={model.img} alt="" />
              </div>
            </div>
            {/* details */}
            <div className="detail xl:max-w-[20rem]">
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
                <img
                  className="h-[10rem] min-h-full w-full sm:!h-[18rem] md:!h-[20rem] xs:h-[15rem] exs:h-[12rem]"
                  src={item.img}
                  alt=""
                />
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
