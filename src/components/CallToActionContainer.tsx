import { useRef, useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  texts: {
    call1: {
      subtitle: string;
      title: string;
      bttnText: string;
    };
    call2: {
      subtitle: string;
      title: string;
      bttnText: string;
    };
  };
};

const CallToActionContainer = ({ texts: { call1, call2 } }: Props) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [overlayPos, setOverlayPos] = useState<1 | 2 | 0>(0);

  return (
    <div
      className={`relative h-[550px] w-[100%] bg-[url('@/assets/img/home/calltoactionimage.webp')] bg-cover  bg-no-repeat [background-position-x:-750px] md:h-[600px] md:bg-center`}
    >
      {/* desktop */}
      <div
        className={`absolute hidden h-full w-1/2 bg-black md:block ${overlayPos === 1 ? "translate-x-0" : ""} ${
          overlayPos === 2 ? "translate-x-full" : ""
        } 
                ${overlayPos === 0 ? "translate-x-1/2 bg-opacity-0 " : "bg-opacity-50"}
                transition-all duration-500`}
        ref={overlayRef}
      />

      {/* mobile */}
      <div
        className={`absolute h-1/2 w-full bg-black md:hidden ${overlayPos === 1 ? " translate-y-0" : ""} ${
          overlayPos === 2 ? "translate-y-full" : ""
        } 
                ${overlayPos === 0 ? "translate-y-1/2 bg-opacity-0 " : " bg-opacity-50"}
                transition-all duration-500`}
        ref={overlayRef}
      />
      <div className="absolute left-1/2 top-1/2 flex h-full w-[100%] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center md:flex-row md:justify-around">
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-4 text-center hover:cursor-pointer md:w-1/2"
          onMouseEnter={() => setOverlayPos(1)}
          onMouseLeave={() => setOverlayPos(0)}
          id="leftDiv"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white">{call1.subtitle}</h2>
            <h1 className="text-[1.7rem] font-extrabold text-white sm:text-5xl xs:text-4xl">{call1.title}</h1>
          </div>
          <Link to={"/boats"}>
            <button className="h-14 w-36 rounded border-2 bg-transparent px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-900 hover:text-white md:text-lg xs:w-44 xs:text-base">
              {call1.bttnText}
            </button>
          </Link>
          {/*  <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18.17 29.103"
            className={`absolute z-[-1] h-[40%] md:h-4/5 ${
              overlayPos === 1 ? "opacity-1" : "opacity-0"
            } transition-all duration-500`}
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
          </svg> */}
        </div>
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-4 text-center hover:cursor-pointer md:w-1/2"
          onMouseEnter={() => setOverlayPos(2)}
          onMouseLeave={() => setOverlayPos(0)}
          id="rightDiv"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white">{call2.subtitle}</h2>
            <h1 className="text-[1.7rem] font-extrabold text-white sm:text-5xl xs:text-4xl ">{call2.title}</h1>
          </div>
          <button className="h-14 w-36 rounded border-2 bg-transparent px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-900 hover:text-white md:text-lg xs:w-44 xs:text-base">
            {call2.bttnText}
          </button>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18.17 29.103"
            className={`absolute z-[-1] h-[40%] md:h-4/5  ${
              overlayPos === 2 ? "opacity-1" : "opacity-0"
            } transition-all duration-500`}
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
          </svg> */}
        </div>
      </div>
    </div>
  );
};

export default CallToActionContainer;
