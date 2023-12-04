import { useState } from "react";
import { motion } from "framer-motion";
import { Boat } from "@/boatData/allBoats";
import MenuBurgerIcon from "./MenuBurgerIcon";
import { Link } from "react-router-dom";

const BoatModels = (props: Boat) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      animate={isOpen ? { height: "420px" } : { height: "100px" }}
      transition={isOpen ? { duration: 0.2 } : { duration: 0.4 }}
      className="mx-auto w-full whitespace-nowrap border-t-2 px-4 py-4 text-black hover:shadow-md sm:px-8"
    >
      <div
        className="flex items-center gap-6 align-middle sm:justify-between 
        [&>*]:basis-1/6 
      "
      >
        <MenuBurgerIcon onClick={toggleOpen} />
        <Link to={props.id}>
          <img
            className=" w-30 hidden w-full max-w-[7rem] basis-1/6 object-cover sm:block"
            src={props.images.modelSideImg}
            alt={props.modelTitle}
          />
        </Link>
        <h3 className="text-xl font-extrabold">{props.modelTitle}</h3>

        <p className="hidden flex-col lg:flex">
          <span className="font-extrabold">LOA </span>
          <span>{props.specifications.loa}</span>
        </p>
        <p className="hidden flex-col lg:flex">
          <span className="font-extrabold">Propulsion </span>
          <span>{props.specifications.propulsionType}</span>
        </p>
        <p className="hidden flex-col lg:flex">
          <span className="font-extrabold">Layout </span>
          <span>{props.specifications.layout}</span>
        </p>
      </div>

      <motion.div
        variants={{
          open: {
            opacity: 1,
            x: 0,
            display: "grid",
          },
          closed: {
            opacity: 0,
            x: "-10%",
            display: "none",
            transition: {
              display: {
                delay: 0.2,
              },
            },
          },
        }}
        initial="closed"
        transition={{ duration: 0.4 }}
        animate={isOpen ? "open" : "closed"}
        className="mx-autof w-ful mb-4 mt-3 max-w-[900px] overflow-y-hidden overflow-x-scroll whitespace-nowrap pb-4 md:max-w-full md:overflow-hidden"
      >
        <div className="wrap grid w-[900px] grid-cols-6 grid-rows-4  md:w-full">
          <div className=" col-span-2 row-start-1 row-end-7">
            <p className="grid gap-2 pb-1.5">
              <span className="bg-primary-500 px-2 py-1 font-bold">LAYOUT: </span>
              <span className="px-2">{props.modelDescription}</span>
            </p>
            <Link to={props.id}>
              <img className="mt-4 w-full" src={props.images.modelExtendedImg} alt={props.modelTitle} />
            </Link>
          </div>
          <p className="grid gap-2 pb-1.5">
            <span className="bg-primary-500 px-2 py-1 font-bold ">LOA: </span>
            <span className="px-2">{props.specifications.loa}</span>
          </p>
          <p className="grid gap-2 pb-1.5">
            <span className="bg-primary-500 px-2 py-1 font-bold">BOA: </span>
            <span className="px-2">{props.specifications.boa}</span>
          </p>
          <p className="grid gap-2 pb-1.5">
            <span className="bg-primary-500 px-2 py-1 font-bold">DRAFT: </span>
            <span className="px-2">{props.specifications.draft}</span>
          </p>
          <p className="grid gap-2 pb-1.5">
            <span className="bg-primary-500 px-2 py-1 font-bold">WEIGHT: </span>
            <span className="px-2">{props.specifications.weight}</span>
          </p>
          <p className="grid gap-2 pb-1.5">
            <span className="bg-primary-500 px-2 py-1 font-bold">PAYLOAD: </span>
            <span className="px-2">{props.specifications.payload}</span>
          </p>
          <p className="grid gap-2 pb-1.5">
            <span className="bg-primary-500 px-2 py-1 font-bold">ENGINE: </span>
            <span className="px-2">{props.specifications.engine}</span>
          </p>
          <p className="grid gap-2 pb-1.5">
            <span className="bg-primary-500 px-2 py-1 font-bold">FUEL: </span>
            <span className="px-2">{props.specifications.fuel}</span>
          </p>
          <p className="grid gap-2 pb-1.5">
            <span className="bg-primary-500 px-2 py-1 font-bold">POWER: </span>
            <span className="px-2">{props.specifications.power}</span>
          </p>
          <p className="grid gap-2 pb-1.5">
            <span className="bg-primary-500 px-2 py-1 font-bold">TANK: </span>
            <span className="px-2">{props.specifications.tank}</span>
          </p>
          <p className="grid gap-2 pb-1.5">
            <span className="bg-primary-500 px-2 py-1 font-bold">SPEED: </span>
            <span className="px-2">{props.specifications.speed}</span>
          </p>
          <p className="grid gap-2 pb-1.5">
            <span className="bg-primary-500 px-2 py-1 font-bold">RANGE: </span>
            <span className="px-2">{props.specifications.range}</span>
          </p>
          <p className="grid gap-2 pb-1.5">
            <span className="bg-primary-500 px-2 py-1 font-bold">SEATS: </span>
            <span className="px-2">{props.specifications.seats}</span>
          </p>
          <p className="grid gap-2">
            <span className="h-[32px] bg-primary-500"></span>
            <span className="px-2"></span>
          </p>
          <p className=" grid gap-2">
            <span className="h-[32px] bg-primary-500"></span>
            <span className="px-2"></span>
          </p>
          <p className=" flex flex-col gap-2">
            <span className="bg-primary-500 px-2 py-1 font-bold">LH: </span>
            <span className="px-2">{props.specifications.lh}</span>
          </p>
          {props.catalogsrc && (
            <p className=" flex flex-col gap-2">
              <span className="bg-primary-500 px-2 py-1 font-bold">CATALOG: </span>
              <span className="px-2">
                <a className="text-primary-700" href={props.catalogsrc} target="_blank" rel="noreferrer">
                  Download
                </a>
              </span>
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BoatModels;
