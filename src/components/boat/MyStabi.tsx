import { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
// imge popup
import ImagePopup from "@/components/boat/ImagePopup";

// images
import stabiOne from "@/assets/img/boat/mystabi/stabi-1.jpg";
import stabiTwo from "@/assets/img/boat/mystabi/stabi-2.jpg";
import stabiThree from "@/assets/img/boat/mystabi/stabi-3.jpg";

export default function MyStabi() {
  const socialIcons = [FaFacebook, FaInstagram, FaYoutube];
  const stabiImages = [stabiOne, stabiTwo, stabiThree, stabiOne, stabiTwo, stabiThree];
  const [activePopup, setActivePopup] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActivePopup(true);
    setActiveIndex(index);
  };

  return (
    <div className="mystabi pb-20 sm:py-20">
      <div className="container">
        <div className="heading text-center font-extrabold">
          <h2 className="text-4xl text-primary-700 md:text-5xl ">#MYSTABI</h2>
          <p className="text-lg">OWNERS CONTENT</p>

          {/* icons */}
          <div className="social icons mt-4 flex items-center justify-center gap-3">
            {socialIcons.map((Icon, index) => (
              <Link key={index} to="/" className="icon text-[1.7rem]">
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        {/* images */}
        <div className="images flex flex-col gap-6 sm:flex-row">
          {stabiImages.slice(0, 3).map((item, index) => (
            <div key={index} className="single-image mt-10 overflow-hidden rounded-lg">
              <img
                onClick={() => handleClick(index)}
                className="w-full cursor-pointer transition-all duration-300 hover:scale-105"
                src={item}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      {/* popup */}
      <ImagePopup setActive={setActivePopup} active={activePopup} images={stabiImages} index={activeIndex} />
    </div>
  );
}
