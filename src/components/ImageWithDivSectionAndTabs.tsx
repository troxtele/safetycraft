import { useState } from "react";
import { TextRevealTW } from "./TextRevealH1";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type ImageWithDivSection = {
  align: "left" | "right";
  title: string;
  subtitle: string;
  description?: string;
  tabs: {
    title: string;
    description: string;
  }[];
};

const ImageWithDivSectionAndTabs = ({ align, subtitle, tabs, title, description }: ImageWithDivSection) => {
  const [imageBg, setImageBg] = useState<1 | 2 | 3 | 4>(1);

  const handleSetImageBg = (url: 1 | 2 | 3 | 4) => {
    setImageBg(url);
  };

  return (
    <div
      className={`relative flex  h-auto items-center bg-cover bg-center bg-no-repeat 
            ${
              imageBg === 1
                ? "bg-[url(@/assets/img/home/split-range1.webp)]"
                : imageBg === 2
                ? "bg-[url(@/assets/img/home/split-range2.webp)]"
                : imageBg === 3
                ? "bg-[url(@/assets/img/home/split-range3.webp)]"
                : imageBg === 4
                ? "bg-[url(@/assets/img/home/split-range4.webp)]"
                : ""
            }
            ${align === "left" ? "justify-start" : "justify-end"}
        `}
    >
      <div className={`mx-6 flex w-full md:mx-16 lg:mx-20 ${align === "left" ? "justify-start" : "justify-end"} `}>
        <div
          className={`relative my-16 flex h-auto  w-full max-w-[26rem] flex-col bg-black bg-opacity-30 backdrop-blur-md p-7 sm:my-20 sm:p-10 md:max-w-[30rem] lg:mx-20 lg:max-w-[36.5rem]`}
        >
          <TextRevealTW
            text={subtitle}
            type="h2"
            classNames="font-rubik pb-2 text-4xl sm:text-5xl font-bold text-white lg:text-6xl"
            animationDelayMs={0}
          />
          <TextRevealTW
            text={title}
            type="h1"
            classNames="font-title leading-[1.2] text-4xl xs:text-5xl sm:!text-6xl font-extrabold text-primary-900 md:!text-6xl lg:!text-7xl xl:!text-8xl"
            animationDelayMs={0.3}
          />
          {description && <p className="mt-5 text-lg font-medium text-white">{description}</p>}

          {/* 4 tabs with a single text and if hover on it, shows a brief description */}
          <div className="my-5 -ml-5 mt-10 flex flex-col gap-5">
            {tabs?.map((tab, i) => (
              <HoverableTab
                key={i}
                title={tab.title}
                description={tab.description}
                handleImageBg={() => {
                  handleSetImageBg((i + 1) as 1 | 2 | 3 | 4);
                }}
              />
            ))}
          </div>

          <Link to={"/about"} className="w-fit">
            <motion.button
              whileHover={"hover"}
              className="flex h-14 w-44 flex-row items-center justify-around border-y-2 bg-transparent px-4 py-2 text-sm font-bold text-primary-700 transition-colors hover:border-y-primary-700"
            >
              EXPLORE
              <motion.svg
                variants={{
                  hover: {
                    x: [0, 10, 0],
                    transition: {
                      duration: 1,
                      repeat: Infinity,
                    },
                  },
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18.17 29.103"
                className={`relative h-4/5 justify-self-end `}
              >
                <path
                  data-name="Path 189"
                  d="M109.994,107.09l16.051,9.917v8.682l-17.282-10.678v-7.161Z"
                  transform="translate(-108.764 -107.09)"
                  fill="#ff7f40"
                ></path>
                <path
                  data-name="Path 190"
                  d="M109.994,185.383l16.051-9.917v-8.682l-17.282,10.678v7.161Z"
                  transform="translate(-108.764 -156.863)"
                  fill="#ff6626"
                ></path>
              </motion.svg>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageWithDivSectionAndTabs;

type HoverableTabProps = {
  title: string;
  description: string;
  handleImageBg?: () => void;
};

const HoverableTab = ({ description, title, handleImageBg }: HoverableTabProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className="group flex flex-col items-start"
      onMouseEnter={() => {
        setIsOpen(true);
        handleImageBg && handleImageBg();
      }}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.p
        layout
        variants={{
          open: {
            opacity: 1,
            x: "+10%",
          },
          closed: {
            x: 0,
          },
        }}
        initial="close"
        animate={isOpen ? "open" : "closed"}
        className="!flex items-center gap-2 text-lg font-extrabold text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.17 29.103"
          className={`z-[-1] w-4 ${isOpen ? "opacity-1" : "opacity-0"} -left-5 transition-all duration-500`}
        >
          <path
            data-name="Path 189"
            d="M109.994,107.09l16.051,9.917v8.682l-17.282-10.678v-7.161Z"
            transform="translate(-108.764 -107.09)"
            fill="#ff7f40"
          ></path>
          <path
            data-name="Path 190"
            d="M109.994,185.383l16.051-9.917v-8.682l-17.282,10.678v7.161Z"
            transform="translate(-108.764 -156.863)"
            fill="#ff6626"
          ></path>
        </svg>
        <span>{title}</span>
      </motion.p>
      <motion.p
        layout
        variants={{
          open: {
            opacity: 1,
            x: "+10%",
            display: "block",
          },
          closed: {
            opacity: 0,
            x: 0,

            transition: {
              display: {
                delay: 0.2,
              },
            },
          },
        }}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="block text-gray-200"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};
