import { useState } from "react";
import { Link } from "react-router-dom";

type singleBoat = {
  boatImage: string;
  price: string;
  title: string;
  spec: string[];
};

export default function SingleBoatPrice({ boat, link }: { boat: singleBoat; link: string }) {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  const keys = [
    "Length Metric (feet)",
    "Max Persons",
    "Maximum HP",
    "Maximum Engine Weight",
    "Leg Length",
    "Fuel Tank",
    "External Beam",
    "Internal Beam",
    "Deadrise",
    "Tube Thickness",
    "Hull Thickness",
    "Total Sealed Volume (approx)",
    "Dry Hull Weight (approx)",
    "Length on Trailer",
    "Boat Height (approx)",
  ];
  return (
    <div className={` relative overflow-hidden px-6`}>
      {boat.price === "2750" ? <div className="abs-bg } z-1 absolute inset-0 top-[9rem] bg-[#f7f7f7]"></div> : ""}
      <div className="wrap relative">
        <div className="top">
          <div className="img relative mb-14">
            <img className="w-full" src={boat.boatImage} alt="" />

            {/* price */}
            <div className="price-tiltle absolute -bottom-[1rem] left-1/2 -translate-x-1/2 transform  text-center font-extrabold text-black ">
              <div className="text-centerm text-6xl"> {boat.price}</div>
              <div className="whitespace-nowrap text-2xl text-primary-700">{boat.title}</div>
            </div>
          </div>
        </div>

        <div className="middle border-b border-gray-300">
          {boat.spec.slice(0, 3).map((spec: string, index: number) => (
            <div key={index} className="spec flex justify-between border-t border-gray-300 py-4">
              <div className="key font-extrabold">{keys[index]}</div>
              <div className="value">{spec}</div>
            </div>
          ))}
        </div>
        {/* expand */}
        <div onClick={handleExpand} className="expand my-5 cursor-pointer text-center text-primary-700">
          {expand ? "- CLOSE" : "+ EXPAND"}
        </div>
        <div className={`middle-end border-b border-gray-300 ${expand ? "" : "hidden"}`}>
          {boat.spec.slice(3).map((spec: string, index: number) => (
            <div key={index} className="spec flex justify-between border-t border-gray-300 py-4">
              <div className="key font-extrabold">{keys[index + 3]}</div>
              <div className="value">{spec}</div>
            </div>
          ))}
        </div>
        <div className="btn mt-4 flex justify-center">
          <Link
            to={`/boats/${link}`}
            className={`w-full  py-4 text-center text-lg font-extrabold text-white transition-all duration-300 ${
              boat.price === "2750" ? "bg-primary-700 hover:bg-gray-900" : " bg-gray-900 hover:bg-primary-700"
            }`}
          >
            VIEW BOAT
          </Link>
        </div>
      </div>
    </div>
  );
}
