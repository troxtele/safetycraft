import HomePageImg from "@/assets/img/boats/frontpage.webp";
import BoatModels from "@/components/BoatModels";
import { motion } from "framer-motion";
import { TextRevealTW } from "@/components/TextRevealH1";
import { useEffect, useState } from "react";
import ImageWithDivSectionDescription from "@/components/ImageWithDivSectionDescription";
import ABOUTPAGESAILVIDEO from "@/assets/abooutpagesail.mp4";
import CATALOG from "@/assets/pdf/catalog.pdf";
import { allBoatsModels } from "@/boatData/allBoats";

const BoatsPage = () => {
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

  const handleDownloadCatalog = () => {
    window.open(CATALOG, "_blank");
  };

  return (
    <>
      <div className="relative">
        <div className="items-left absolute left-[1.5rem] top-2/3 z-10 flex transform flex-col gap-0 sm:left-[7%] sm:top-1/2">
          <TextRevealTW
            text="&#9844;"
            type="h2"
            classNames="font-abnes leading-[0.9] text-xl xs:text-3xl sm:!text-5xl lg:!text-6xl"
            animationDelayMs={0}
          />
          <TextRevealTW
            text="UNMATCHED"
            type="h2"
            classNames="font-abnes leading-[0.9] text-xl xs:text-2xl sm:!text-4xl lg:!text-4xl"
            animationDelayMs={0}
          />
          <TextRevealTW
            text="PERFORMANCE"
            type="h1"
            classNames="font-heavytitle leading-[0.9] font-extrabold  text-primary-900 text-5xl xs:text-6xl sm:!text-5xl md:!text-8xl lg:!text-8xl -mt-1"
            animationDelayMs={0.3}
          />
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="h-14 w-44 rounded border-2 bg-white bg-opacity-10 px-4 py-2 font-bold text-primary-800 transition-colors hover:bg-primary-800 hover:text-white"
            onClick={handleDownloadCatalog}
          >
            CATALOG
          </motion.button>
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <img src={HomePageImg} alt="homepage" className="h-screen w-screen object-cover " />
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

          <motion.span
            animate={{ y: scrollY / 10 }}
            className={`y-10 max-w-h-[16rem] absolute -bottom-[8%] right-2 h-[18vw] w-[18vw] max-w-[16rem]  -translate-y-1/4 bg-[url("@/assets/img/logos/logo.png")] bg-contain bg-center bg-no-repeat  md:-bottom-[9%] md:h-[15vw] md:w-[15vw] lg:-bottom-[10%]`}
          ></motion.span>
        </div>
      </div>
      <div>
        <div className="bg-white">
          <div className="m-auto max-w-[74rem] py-14 sm:py-24 md:py-40">
            <div className="font mb-20 flex max-w-[30rem] flex-col justify-start px-6 xl:px-0">
              <p className="font-sans text-2xl font-semibold text-black">
                From family fishing adventures to chasing gamefish in big water there's a Safetycraft® to suit.
              </p>
            </div>

            <div
              className={`relative h-[400px] w-[100%] bg-[url('@/assets/img/boats/calltoactionimage2.webp')] bg-cover bg-no-repeat [background-position-x:-500px] md:h-[600px] md:bg-center`}
            ></div>
            <section className="mt-10 w-full">
              {allBoatsModels.map((boat, index) => (
                <BoatModels key={index} {...boat} />
              ))}
            </section>
          </div>
        </div>
        <ImageWithDivSectionDescription
          align="right"
          btnText="CONTACT US"
          title="SAFETYCRAFT®"
          description="Safetycraft® are built to last, with a focus on safety, stability and performance. Our 
                    boats are designed to be versatile, so you can use them for any range of activities.
                    "
          subtitle="EXPLORE"
          imgSrc={ABOUTPAGESAILVIDEO}
          btnLink="/contact"
          type="video"
        />
      </div>
    </>
  );
};

export default BoatsPage;
