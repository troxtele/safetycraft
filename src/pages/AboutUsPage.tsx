import { TextRevealTW } from "@/components/TextRevealH1";
import AboutPageImage from "@/assets/img/about/whysafety.webp";
import SECTION1IMAGE from "@/assets/img/about/section1image.webp";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ImageWithDivSectionDescription from "@/components/ImageWithDivSectionDescription";
import HomePageVideo from "@/assets/homepage.mp4";
import OFSHOREVIDEO from "@/assets/ofshorevideo.mp4";
import CustomCarousel from "@/components/CustomCarousel";
import CREWIMAGE1 from "@/assets/img/about/crew/crew1.webp";
import CREWIMAGE2 from "@/assets/img/about/crew/crew2.webp";
import CREWIMAGE3 from "@/assets/img/about/crew/crew3.webp";
import CREWIMAGE4 from "@/assets/img/about/crew/crew4.webp";
import CREWIMAGE5 from "@/assets/img/about/crew/crew5.webp";
import CARROUSELIMAGE4 from "@/assets/img/about/carrousel/4.webp";
import CARROUSELIMAGE5 from "@/assets/img/about/carrousel/5.webp";
import CARROUSELIMAGE6 from "@/assets/img/about/carrousel/6.webp";
import CARROUSELIMAGE7 from "@/assets/img/about/carrousel/7.webp";

const AboutUsPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="items-left - absolute left-[1.5rem] top-2/3 z-10 flex transform flex-col gap-0 sm:left-[7%]">
          <TextRevealTW
            text="HIGH"
            type="h2"
            classNames="font-abnes leading-[0.9] text-2xl font-bold text-white sm:text-4xl md:text-5xl lg:text-3xl"
            animationDelayMs={0}
          />
          <TextRevealTW
            text="PERFORMANCE"
            type="h1"
            classNames="font-heavytitle leading-[0.9] font-extrabold text-primary-900 text-5xl xs:text-6xl sm:!text-7xl md:!text-8xl lg:!text-7xl -mt-1"
            animationDelayMs={0.3}
          />
          <TextRevealTW
            text="DESIGN"
            type="h2"
            classNames="font-abnes leading-[0.9] text-2xl font-bold text-white sm:text-4xl md:text-5xl lg:text-3xl"
            animationDelayMs={0}
          />
          {/* A scroll jumping span left bottom positioned that when is clicked it scrolls to the next section*/}
        </div>
        <div className="relative flex flex-col items-center justify-center z-50">
          <img src={AboutPageImage} alt="homepage" className="h-screen w-screen object-cover " />
          <motion.span
            animate={{ y: scrollY / 10 }}
            className={`y-10 max-w-h-[16rem] absolute -bottom-[8%] right-2 h-[18vw] w-[18vw] max-w-[16rem]  bg-[url("@/assets/img/logos/logo.png")] bg-contain bg-center bg-no-repeat md:-bottom-[9%] md:h-[15vw] md:w-[15vw] lg:-bottom-[10%] `}
          ></motion.span>
        </div>
        <motion.span
          animate={{ y: scrollY / 10 }}
          className="hover:text-primary-900s absolute bottom-2 left-5 animate-bounce cursor-pointer
                      text-xs font-extrabold text-white
                    "
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }}
        >
          SCROLL &#9759;
        </motion.span>
      </div>
      <div className="bg-white">
        <div className="relative w-full 2xl:mx-auto">
          {/*SECTION 1*/}
          <div className="flex flex-col justify-between gap-8 px-6 py-20 sm:px-12 md:px-24 lg:flex-row lg:px-40">
            <div className="flex w-full flex-col justify-center lg:w-6/12" id="hdpesection">
              <h1 className="pb-4 font-title text-3xl font-extrabold uppercase leading-9 text-gray-800  lg:text-7xl">
                HDPE BOATS:
              </h1>
              <h2 className="pb-4 font-title text-3xl font-extrabold uppercase leading-9 text-primary-700  lg:text-4xl">
                Unrivaled Quality & Performance
              </h2>
              <p className="text-base font-normal leading-6 text-gray-600 ">
                SafetyCraft exclusively uses High-Density Polyethylene (HDPE) for their boat construction. HDPE is known
                for its durability, resistance to corrosion, and impact resistance. This choice of material ensures the
                longevity and robustness of our boats.
              </p>
            </div>
            <div className="w-full lg:w-6/12">
              <img className="h-full w-full rounded object-cover" src={SECTION1IMAGE} alt="Front boat" />
            </div>
          </div>
          {/* IMAGE WITH A DIV INSIDE WITH DIFFERENT TABS OR DEESCRIPTION */}
          <ImageWithDivSectionDescription
            type="video"
            imgSrc={HomePageVideo}
            align="right"
            subtitle="UNMATCHED DURABILITY AND PERFORMANCE"
            title="VERSATILE"
            description="Our HDPE boats are designed to excel in various environments, whether for rescue operations,
            extreme fishing, sport fishing, law enforcement, fire departments, or commercial use. Each
            SafetyCraft boat is constructed with precision and care,HDPE construction offers superior strength and longevity."
          />
          {/*FOUNDED ON STABILITY*/}
          <div className="flex flex-col items-center justify-center gap-8 bg-gray-100 px-6 py-20">
            <div className="flex flex-col items-center justify-center text-center lg:w-9/12">
              <h1 className="pb-4 font-title text-3xl font-extrabold uppercase leading-9 text-gray-800  lg:text-7xl">
                FOCUS ON SAFETY
              </h1>
              <h2 className="pb-4 font-title text-3xl font-extrabold uppercase leading-9 text-primary-700  lg:text-4xl">
                OUR COMMITMENT
              </h2>
              <p className="font-semibold leading-6 text-gray-600 lg:w-9/12">
                Our commitment to safety and quality sets us apart. We understand that when it comes to marine
                transportation, safety is first. That's why the design, construction and testing of our HDPE boats is
                made to reach and exceed the highest safety standards.
              </p>
            </div>
          </div>
          {/* IMAGE WITH A DIV INSIDE WITH DIFFERENT TABS OR DEESCRIPTION */}
          <ImageWithDivSectionDescription
            align="left"
            type="video"
            imgSrc={OFSHOREVIDEO}
            subtitle="ADVENTURE TESTED FOR CONFIDENCE"
            title="SUPERIOR OFFSHORE PERFORMANCE"
            description="Our team of boat builders is passionate about delivering vessels that prioritize safety
            and performance. When you choose SafetyCraft, you’re choosing the highest quality HDPE boat building compnay in the market."
          />
          {/* CAROUSEL SECTION */}
          <div className="flex flex-col justify-between gap-8 bg-gray-100 px-6 py-20 sm:px-12 md:px-24 lg:flex-row lg:px-40">
            <div className="flex w-full flex-col justify-center lg:w-6/12" id="footprintsection">
              <h1 className="pb-4 font-title text-3xl font-extrabold uppercase leading-9 text-gray-800  lg:text-7xl">
                Low footprint:
              </h1>
              <h2 className="pb-4 font-title text-3xl font-extrabold uppercase leading-9 text-primary-700  lg:text-4xl">
                Environmental Responsibility
              </h2>
              <p className="text-base font-normal leading-6 text-gray-600 ">
                In addition to passenger safety, we are deeply committed to protect the environment. HDPE is a
                recyclable material, and we aim to minimize our ecological footprint through responsible manufacturing
                practices.
              </p>
            </div>
            <div className="w-full lg:w-6/12">
              <CustomCarousel images={[CARROUSELIMAGE4, CARROUSELIMAGE5, CARROUSELIMAGE6, CARROUSELIMAGE7]} />
            </div>
          </div>
          {/* TEAM SECTION */}
          <div className="flex flex-col items-center justify-between gap-8 px-6 pb-10 pt-12 lg:flex-col">
            <div className="flex flex-col items-center justify-center text-center lg:w-9/12" id="crewsection">
              <h1 className="pb-4 font-title text-3xl font-extrabold uppercase leading-9 text-gray-800  lg:text-7xl">
                OUR TEAM
              </h1>
              <h2 className="pb-4 font-title text-3xl font-extrabold uppercase leading-9 text-primary-700  lg:text-4xl">
                BE PART OF OUR FAMILY
              </h2>
              <p className="font-semibold leading-6 text-gray-600 md:w-9/12">
                Our team is more than just a group of individuals working together; we are a closely-knit family united
                by our love for the sea. Each member brings their unique skills, experiences, and dedication to the
                table, making us a formidable force in the world of HDPE boatbuilding.
              </p>
            </div>
            <div className="w-full lg:w-full lg:pt-8">
              <div className="grid grid-cols-1 gap-x-4 gap-y-6 rounded-md sm:grid-cols-2 md:grid-cols-5">
                <div className="flex flex-col items-center justify-center">
                  <img className="block w-[85%] rounded" src={CREWIMAGE1} alt="Alejandro featured Image" />
                  <p className="mt-4 text-xl font-medium leading-5 text-gray-800 ">Alejandro</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img className="block w-[85%] rounded" src={CREWIMAGE2} alt="Riki featured Image" />
                  <p className="mt-4 text-xl font-medium leading-5 text-gray-800 ">Ricardo</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img className="block w-[85%] rounded" src={CREWIMAGE3} alt="Leo featued Image" />

                  <p className="mt-4 text-xl font-medium leading-5 text-gray-800 ">Leo</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img className="block w-[85%] rounded" src={CREWIMAGE4} alt="Elijah featured image" />

                  <p className="mt-4 text-xl font-medium leading-5 text-gray-800 ">Petit</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img className="block w-[85%] rounded" src={CREWIMAGE5} alt="Elijah featured image" />

                  <p className="mt-4 text-xl font-medium leading-5 text-gray-800 ">Leonardo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
