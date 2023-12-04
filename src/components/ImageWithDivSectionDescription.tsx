import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type ImageWithDivSection = {
  align: "left" | "right";
  type: "image" | "video";
  imgSrc: string;
  title: string;
  subtitle: string;
  description: string;
  btnText?: string;
  btnLink?: string;
};

const ImageWithDivSectionDescription = ({
  align,
  subtitle,
  title,
  description,
  btnText,
  btnLink,
  imgSrc = "",
  type,
}: ImageWithDivSection) => {
  return (
    <div
      className={`relative flex h-auto items-center bg-cover bg-center bg-no-repeat
            ${type === "image" ? `bg-[url(${imgSrc})] ` : ``}
          ${align === "left" ? "justify-start" : "justify-end"} `}
    >
      {type === "video" && (
        <video autoPlay muted loop className="absolute h-full w-full object-cover" src={imgSrc}>
          <source src={imgSrc} type="video/mp4" />
        </video>
      )}
      <div className={`flex flex-col px-6 md:px-16 lg:px-20 ${align === "left" ? "items-start" : "items-end"}`}>
        <div
          className={`relative my-16 flex h-auto w-full  max-w-[26rem] flex-col rounded bg-black bg-opacity-30 p-7 sm:my-20 sm:p-10 md:max-w-[30rem] lg:mx-20 lg:max-w-[36.5rem]`}
        >
          <h4 className="font-rubik text-lg font-bold text-white sm:!text-3xl xs:text-xl"> {subtitle} </h4>
          <h3 className="font-title text-3xl font-extrabold text-primary-900 sm:!text-4xl md:!text-5xl lg:!text-6xl xs:text-4xl">
            {title}
          </h3>
          {description && <p className="my-5 text-lg font-medium text-white">{description}</p>}

          {btnText && (
            <Link to={btnLink ? btnLink : ""} className="w-fit">
              <motion.button
                whileHover={"hover"}
                className="flex flex-row items-center justify-around gap-2 border-y-2 bg-transparent px-4 py-2 text-sm font-bold text-primary-700 transition-colors hover:border-y-primary-700 sm:px-6"
              >
                {btnText}
                {/* <motion.svg
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
                  className={`relative w-[1rem] justify-self-end `}
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
                </motion.svg> */}
              </motion.button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageWithDivSectionDescription;
