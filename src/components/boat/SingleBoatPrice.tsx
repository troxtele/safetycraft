import { useState } from "react";
import { Link } from "react-router-dom";
import type { Comparison } from "@/boatData/allBoats";

type singleBoat = {
  boatImage: string;
  model: string;
  title: string;
  spec: Comparison;
};

export default function SingleBoatPrice({ boat, link }: { boat: singleBoat; link: string }) {
  const [expand, setExpand] = useState(false);

  const spec = boat.spec;

  const handleExpand = () => {
    setExpand(!expand);
  };

  const url = window.location.href;

  return (
    <div className={` relative overflow-hidden px-6`}>
      {url.includes(link) ? <div className="abs-bg } z-1 absolute inset-0 top-[9rem] bg-[#f7f7f7]"></div> : ""}
      <div className="wrap relative">
        <div className="top">
          <div className="img relative mb-14">
            <img className="w-full" src={boat.boatImage} alt="" />
            {/* price */}
            <div className="price-tiltle absolute -bottom-[1rem] left-1/2 -translate-x-1/2 transform  text-center font-extrabold text-black ">
              <div className="text-centerm text-6xl"> {boat.model}</div>
              <div className="whitespace-nowrap text-2xl text-primary-700">{boat.title}</div>
            </div>
          </div>
        </div>

        {/* items */}
        <div className="items">
          {/* item */}
          <div className="spec flex justify-between border-t border-gray-300 py-4">
            <div className="key font-extrabold">Length Metric (feet)</div>
            <div className="value">{spec["Length Metric (feet)"]}</div>
          </div>
          {/* item */}
          <div className="spec flex justify-between border-t border-gray-300 py-4">
            <div className="key font-extrabold">Max Persons</div>
            <div className="value">{spec["Max Persons"]}</div>
          </div>
          {/* item */}
          <div className="spec flex justify-between border-y border-gray-300 py-4">
            <div className="key font-extrabold">Maximum HP</div>
            <div className="value">{spec["Maximum HP"]}</div>
          </div>
          {/* expand */}
          <div onClick={handleExpand} className="expand my-5 cursor-pointer text-center text-primary-700">
            {expand ? "- CLOSE" : "+ EXPAND"}
          </div>
          {expand ? (
            <>
              {/* item */}
              <div className="spec flex justify-between border-t border-gray-300 py-4">
                <div className="key font-extrabold">Maximum Engine Weight</div>
                <div className="value">{spec["Maximum Engine Weight"]}</div>
              </div>
              {/* item */}
              <div className="spec flex justify-between border-t border-gray-300 py-4">
                <div className="key font-extrabold">Leg Length</div>
                <div className="value">{spec["Leg Length"]}</div>
              </div>
              {/* item */}
              <div className="spec flex justify-between border-t border-gray-300 py-4">
                <div className="key font-extrabold">Fuel Tank</div>
                <div className="value">{spec["Fuel Tank"]}</div>
              </div>
              {/* item */}
              <div className="spec flex justify-between border-t border-gray-300 py-4">
                <div className="key font-extrabold">External Beam</div>
                <div className="value">{spec["External Beam"]}</div>
              </div>
              {/* item */}
              <div className="spec flex justify-between border-t border-gray-300 py-4">
                <div className="key font-extrabold">Internal Beam</div>
                <div className="value">{spec["Internal Beam"]}</div>
              </div>
              {/* item */}
              <div className="spec flex justify-between border-t border-gray-300 py-4">
                <div className="key font-extrabold">Deadrise</div>
                <div className="value">{spec["Deadrise"]}</div>
              </div>
              {/* item */}

              <div className="spec flex justify-between border-t border-gray-300 py-4">
                <div className="key font-extrabold">Tube Thickness</div>
                <div className="value">{spec["Tube Thickness"]}</div>
              </div>
              {/* item */}
              <div className="spec flex justify-between border-t border-gray-300 py-4">
                <div className="key font-extrabold">Hull Thickness</div>
                <div className="value">{spec["Hull Thickness"]}</div>
              </div>
              {/* item */}
              <div className="spec flex justify-between border-t border-gray-300 py-4">
                <div className="key font-extrabold">Total Sealed Volume (approx)</div>
                <div className="value">{spec["Total Sealed Volume (approx)"]}</div>
              </div>
              {/* item */}
              <div className="spec flex justify-between border-t border-gray-300 py-4">
                <div className="key font-extrabold">Dry Hull Weight (approx)</div>
                <div className="value">{spec["Dry Hull Weight (approx)"]}</div>
              </div>
              {/* item */}
              <div className="spec flex justify-between border-t border-gray-300 py-4">
                <div className="key font-extrabold">Length on Trailer</div>
                <div className="value">{spec["Length on Trailer"]}</div>
              </div>
              {/* item */}
              <div className="spec flex justify-between border-y border-gray-300 py-4">
                <div className="key font-extrabold">Boat Height (approx)</div>
                <div className="value">{spec["Boat Height (approx)"]}</div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="btn mt-4 flex justify-center">
          <Link
            to={`/boats/${link}`}
            className={`w-full  py-4 text-center text-lg font-extrabold text-white transition-all duration-300 ${
              boat.model === "2750" ? "bg-primary-700 hover:bg-gray-900" : " bg-gray-900 hover:bg-primary-700"
            }`}
          >
            VIEW BOAT
          </Link>
        </div>
      </div>
    </div>
  );
}
