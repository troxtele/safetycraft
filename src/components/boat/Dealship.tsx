import { Link } from "react-router-dom";

import globe from "@/assets/img/boat/globe.webp";
import { motion } from "framer-motion";

export default function Dealship() {
  return (
    <div className="dealship overflow-hidden py-24">
      <div className="container">
        <div className="wrapper flex max-w-[80rem] grid-cols-2 flex-col-reverse gap-16 md:grid xl:grid-cols-5">
          <div className="left max-w-[32rem] text-[2rem] font-extrabold leading-[1] sm:text-4xl md:text-end xl:col-span-2 xl:text-5xl">
            <h2 className="text-primary-700">INTERNATIONAL DEALERSHIP</h2>
            <h2>NETWORK ACROSS THE GLOBE</h2>

            <Link to={"/"} className="mt-4 flex md:justify-end">
              <motion.button
                whileHover={"hover"}
                className="w-76 flex h-14 flex-row items-center justify-around gap-2 border-y-2 border-y-gray-800 bg-transparent px-4 py-2 text-sm font-bold text-primary-700 transition-colors hover:border-y-primary-700"
              >
                FIND DEALERSHIP
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
          {/* right */}
          <div className="right xl:col-span-3">
            <img className="w-full" src={globe} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
