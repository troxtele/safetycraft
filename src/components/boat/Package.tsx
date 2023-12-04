import packageMain from "@/assets/img/boat/package.webp";

// icons
import iconOne from "@/assets/img/boat/icons/icon-1.png";
import iconTwo from "@/assets/img/boat/icons/icon-2.png";
import iconThree from "@/assets/img/boat/icons/icon-3.png";
import iconFour from "@/assets/img/boat/icons/icon-4.png";
import iconFive from "@/assets/img/boat/icons/icon-5.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Package() {
  return (
    <div className="package py-20">
      <div className="container">
        <div className="heading text-center text-5xl font-extrabold">
          <h2>PACKAGES</h2>
        </div>
        {/* package top */}
        <div className="package-main-img mt-10">
          <div className="wrap relative">
            <img src={packageMain} alt="" />
            <div className="text absolute bottom-0 w-full bg-primary-700 py-2.5 text-center text-xl font-extrabold text-white sm:py-4 sm:text-2xl md:px-12 md:py-6 lg:left-[6%] lg:w-[35rem] lg:text-3xl">
              2750 ULTRA CENTRECAB
            </div>
          </div>

          <div className="bottom mt-14 grid gap-10 lg:grid-cols-2 lg:px-24">
            <div className="text">
              <p>
                The 2750 Ultra Centrecab is one aggressive looking water weapon capable of long-range trips with 500L
                (132gal) fuel capacity tucked under the floor. The ‘Ultra’ style forward raking windscreen allows for a
                maximum visibility and 33% more space within the cabin over the Centrecab. Capable of receiving twin
                thru-hull transducers as standard and a full-length v-berth, the 2750 Ultra Centrecab is set up for
                serious offshore and overnight fishing.
              </p>
            </div>

            {/* icons */}
            <div className="icons flex gap-4">
              <div className="icon">
                <a href="#">
                  <img src={iconOne} alt="" />
                </a>
              </div>
              <div className="icon">
                <a href="#">
                  <img src={iconTwo} alt="" />
                </a>
              </div>
              <div className="icon">
                <a href="#">
                  <img src={iconThree} alt="" />
                </a>
              </div>
              <div className="icon">
                <a href="#">
                  <img src={iconFour} alt="" />
                </a>
              </div>
              <div className="icon">
                <a href="#">
                  <img src={iconFive} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
