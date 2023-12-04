import { Link } from "react-router-dom";
import boatImage from "@/assets/img/boat/boat-spec.webp";
import { IoMdArrowRoundDown } from "react-icons/io";
import type { Boat } from "@/boatData/allBoats";

type SpecificationProps = {
  detailsPage: {
    detailsPageTitle: string;
    detailsPageSubTitle: string;
    detailsPageDescription: string;
  };
  specifications: Boat["specifications"];
};

export default function Specification({ detailsPage, specifications }: SpecificationProps) {
  return (
    <div className="specification mt-10">
      <div className="container">
        <div className="heading py-4 text-center text-3xl font-extrabold sm:text-5xl xs:text-4xl">
          <h1>
            {detailsPage.detailsPageTitle}
            <br />
            <span className="text-primary-800">{detailsPage.detailsPageSubTitle}</span>
          </h1>
        </div>

        <p className="m-auto mt-4 max-w-[40rem] text-center">{detailsPage.detailsPageDescription}</p>

        <div className=" flex flex-col-reverse gap-10 py-20 lg:grid lg:grid-cols-7">
          {/* left */}
          <div className="left lg:col-span-4">
            <div className="heading text-3xl font-extrabold">
              <h2>BOAT SPECIFICATION</h2>
            </div>
            <div className="table-grid mt-6 grid gap-x-6 md:grid-cols-2">
              <div className="table-property">
                <span className="table-key">Length Metric (feet)</span>
                <span className="table-value">{specifications.loa}</span>
              </div>

              <div className="table-property">
                <span className="table-key">Max Persons</span>
                <span className="table-value">{specifications.seats}</span>
              </div>

              <div className="table-property">
                <span className="table-key">Maximum HP</span>
                <span className="table-value">{specifications.power}</span>
              </div>

              <div className="table-property">
                <span className="table-key">Maximum Engine Weight</span>
                <span className="table-value">{specifications.weight}</span>
              </div>

              <div className="table-property">
                <span className="table-key">Leg Length</span>
                <span className="table-value">{specifications.lh}</span>
              </div>

              <div className="table-property">
                <span className="table-key">Fuel Tank</span>
                <span className="table-value">{specifications.tank}</span>
              </div>

              <div className="table-property">
                <span className="table-key">External Beam</span>
                <span className="table-value">2.54m (100”), 2.5m AUS</span>
              </div>

              <div className="table-property">
                <span className="table-key">Internal Beam</span>
                <span className="table-value">2.04m (80”)</span>
              </div>

              <div className="table-property">
                <span className="table-key">Deadrise</span>
                <span className="table-value">21.5°</span>
              </div>

              <div className="table-property">
                <span className="table-key">Tube Thickness</span>
                <span className="table-value">4mm (5/32”)</span>
              </div>

              <div className="table-property">
                <span className="table-key">Hull Thickness</span>
                <span className="table-value">6mm (15/64”)</span>
              </div>

              <div className="table-property">
                <span className="table-key">Total Sealed Volume (approx)</span>
                <span className="table-value">2909L (768gal)</span>
              </div>

              <div className="table-property">
                <span className="table-key">Dry Hull Weight (approx)</span>
                <span className="table-value">1990kg (4387lbs)</span>
              </div>

              <div className="table-property border-b">
                <span className="table-key">Length on Trailer</span>
                <span className="table-value">10.2m (33’6”)</span>
              </div>

              <div className="table-property border-b">
                <span className="table-key">Boat Height (approx)</span>
                <span className="table-value">2.72m (8'.9")</span>
              </div>
            </div>

            {/* buttons */}
            <div className="btns mt-8 flex flex-col justify-start gap-5 text-white sm:flex-row">
              {["MODEL BROCHURE", "COLOR RANGE"].map((item, index) => (
                <Link
                  to="/"
                  key={index}
                  className="btn group flex cursor-pointer items-center justify-between gap-4 bg-gray-900 px-8 py-4 font-bold transition-all duration-300 hover:bg-primary-700"
                >
                  {item}
                  <span className="text-xl font-bold text-primary-700 transition-all duration-300 group-hover:text-white">
                    <IoMdArrowRoundDown />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* right */}
          <div className="boat-img ml-10 lg:col-span-3">
            <img src={boatImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
