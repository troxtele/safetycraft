import { useState } from "react";

// arrow
import arrow from "@/assets/img/arrow.svg";

import flagOne from "@/assets/img/boat/flag/nz.png";
import flagTwo from "@/assets/img/boat/flag/au.png";
import flagThree from "@/assets/img/boat/flag/us.png";
import flagFour from "@/assets/img/boat/flag/ca.png";
import flagFive from "@/assets/img/boat/flag/se.png";
import flagSix from "@/assets/img/boat/flag/nc.png";


const flags = [
  {
    name: "NEW ZEALAND",
    flag: flagOne,
  },
  { name: "AUSTRALIA", flag: flagTwo },
  { name: "USA", flag: flagThree },
  { name: "CANADA ", flag: flagFour },
  { name: "SCANDINAVIA ", flag: flagFive },
  { name: "NEW CALEDONIA", flag: flagSix },
];

type MarketAvailabilityProps = {
  boatVideoData: {
    id: string;
    title: string;
    thumbnail: string;
    src: string;
    description: string;
  }[];
};

export default function MarketAvailability({ boatVideoData }: MarketAvailabilityProps) {
  const [videoInfo, setVideoInfo] = useState({
    video: boatVideoData[0].src,
    desc: boatVideoData[0].description,
    id: boatVideoData[0].id,
  });



  return (
    <div className="market-availability pb-10 pt-16 sm:pt-20">
      <div className="container">
        <div className="heading text-center text-3xl font-extrabold  sm:text-4xl md:text-5xl">
          <h1>
            MARKET <span className="text-primary-700">AVAILABILITY</span>
          </h1>
        </div>

        {/* flags */}
        <div className="flags m-auto mt-16 flex max-w-[80rem] flex-col justify-center gap-4 md:flex-row md:flex-wrap xl:gap-8">
          {flags.map((item, i) => (
            <div key={i} className="country flex items-center gap-2 text-xl font-extrabold">
              <img className="w-[30px]" src={item.flag} alt={item.name} />
              <div className="name text-base font-bold">{item.name}</div>
              <span
                className={`ml-8 hidden opacity-30 xl:inline-block ${item.name === "NEW CALEDONIA" ? "xl:hidden" : ""}`}
              >
                /
              </span>
            </div>
          ))}
        </div>

        {/* video */}
        <div className="videos mt-10 grid gap-10 sm:mt-16 sm:gap-16 md:mt-28 lg:grid-cols-9">
          <div className="single-vide grid w-full overflow-hidden transition-all  duration-200 lg:col-span-7 ">
            <iframe
              className="h-[250px] w-full shadow-2xl md:h-[450px]"
              src={videoInfo.video}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            {/* descriptio */}
            <div className="description mt-10 max-w-[40rem]">
              <p>{videoInfo.desc}</p>
            </div>
          </div>

          {/* video list */}
          <div className="video-list relative overflow-hidden lg:col-span-2 lg:h-[550px]">
            <div className="flex h-[inherit] min-w-full max-w-[1200px] overflow-scroll pb-6 lg:grid lg:pb-10 xl:max-w-[60rem] xl:pb-20">
              {boatVideoData.map((item) => (
                <div
                  key={item.id}
                  className={`video group relative  min-w-[203px] cursor-pointer p-1.5 after:absolute after:inset-0 after:bg-transparent`}
                  onClick={() => setVideoInfo({ video: item.src, desc: item.description, id: item.id })}
                >
                  <div className="wrap relative">
                    <img
                      className={`h-[150px] w-[200px] border transition-all duration-150 lg:w-full ${
                        videoInfo.id === item.id ? "border-primary-700" : " border-black group-hover:opacity-70"
                      }`}
                      src={item.thumbnail}
                      alt=""
                    />

                    {/* arrow */}
                    <div className="arrow-middle absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <img className=" h-[3rem] w-[3rem]  transform" src={arrow} alt="" />
                    </div>
                  </div>

                  {/* title */}
                  <div className="title">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            {/* arrow */}
            <div className="arrow absolute  bottom-0 hidden w-full lg:block">
              <img
                className=" relative left-1/2 -mt-10 h-[2rem] w-[2rem] -translate-x-1/2 rotate-90 transform"
                src={arrow}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
