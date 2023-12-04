import CallToActionContainer from "@/components/CallToActionContainer";
import HomePageVideo from "@/assets/homepage.mp4";
import Gallery from "@/components/Gallery";
import { motion } from "framer-motion";
import { TextRevealTW } from "@/components/TextRevealH1";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleExploreButton = () => {
    navigate("/about");
  };

  return (
    <>
      {/* HEADER */}
      <div className="relative overflow-hidden">
        {/*A div with a subtitle a title and a button in the center of the video and align left*/}
        <div className="items-left absolute left-[1.5rem] top-2/3 z-10 flex -translate-y-1/3 transform flex-col gap-0 sm:left-[6%]">
          <TextRevealTW
            text="NEXT"
            type="h2"
            classNames="font-abnes leading-[0.9] font-bold text-white text-2xl xs:text-2xl sm:!text-2xl lg:!text-4xl"
            animationDelayMs={0}
          />
          <TextRevealTW
            text="GENERATION"
            type="h2"
            classNames="font-abnes leading-[0.9] font-bold text-white text-xl xs:text-2xl sm:!text-2xl lg:!text-4xl"
            animationDelayMs={0}
          />
          <TextRevealTW
            text="UNDESTRUCTIBLE BOATS"
            type="h1"
            classNames="font-heavytitle font-extrabold text-primary-900 leading-[1] text-3xl xs:text-4xl sm:!text-5xl md:!text-5xl lg:!text-7xl -mt-1"
            animationDelayMs={0.3}
          />
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="h-14 w-44 rounded border-2 bg-white bg-opacity-10 px-4 py-2 font-bold text-primary-800 transition-colors hover:bg-primary-800 hover:text-white"
            onClick={handleExploreButton}
          >
            EXPLORE
          </motion.button>
        </div>
        {/* HEADER VIDEO */}
        <video
          className="-top-32 left-0 z-[-1] h-screen w-screen object-cover xs:h-screen "
          autoPlay
          muted
          loop
          controls={false}
          playsInline
        >
          <source src={HomePageVideo} type="video/mp4" className="h-screen w-screen object-cover" />
        </video>
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
      {/* CALL TO ACTION */}
      <CallToActionContainer
        texts={{
          call1: {
            bttnText: "BOATS",
            subtitle: "DISCOVER",
            title: "ALL BOATS",
          },
          call2: {
            bttnText: "COMING SOON",
            subtitle: "EXPLORE",
            title: "ALL ACCESSORIES",
          },
        }}
      />
      {/* GALLERY */}
      <Gallery />
    </>
  );
};

export default HomePage;
