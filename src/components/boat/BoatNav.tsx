import { useState, useRef, useEffect } from "react";
import useScrollDirection from "@/hooks/useScrollDirection";
import { Link } from "react-router-dom";

const navEle = [
  {
    id: 1,
    name: "SPECIFICATIONS",
  },
  {
    id: 2,
    name: "3D STABI",
  },
  {
    id: 3,
    name: "VIDEOS",
  },
  {
    id: 4,
    name: "GALLERY",
  },
  {
    id: 5,
    name: "PACKAGES",
  },
  {
    id: 6,
    name: "FEATURES",
  },
];

export default function BoatNav({ observerRefs }: { observerRefs: any }) {
  const direction = useScrollDirection();
  const [visibleKey, setVisibleKey] = useState(0);
  const observers = useRef([]) as any;

  const onClick = (key: number) => {
    setVisibleKey(key);
  };

  const observerCallback = async (e:any, key: number) => {
    if (e.length && e[0].isIntersecting) {
      setVisibleKey(key);
    }
  };

  useEffect(() => {
    if (observerRefs.current?.length && observers.current) {
      Array.from(Array(10).keys()).forEach((_u, key) => {
        observers.current[key] = new IntersectionObserver((e) => observerCallback(e, key));
        if (observerRefs.current[key]) {
          observers.current[key].observe(observerRefs.current[key]);
        }
      });
    }
    return () => observers?.current?.forEach((observer: any) => observer?.current?.disconnect());
  }, [observerRefs, observers]);

  return (
    <div
      className={`sticky-nav hidden lg:block broder-b-2 sticky left-0 right-0 z-[99999] my-2 border-gray-900 bg-white text-gray-900 transition-all duration-[400ms] ${
        direction.visible ? "top-[8rem]" : "top-0"
      }
      `}
    >
      <ul className="m-auto flex max-w-[70rem] justify-center gap-4 text-base font-bold">
        {navEle.map((item, key) => (
          <li key={key} onClick={() => onClick(key)}>
            <a
              className={`flex border-b-4 px-2 py-4 transition-all duration-200 hover:border-primary-700 ${
                key === visibleKey ? "border-primary-700" : "border-transparent"
              }`}
              href={`#boat-page-section-${item.id}`}
            >
              {item.name}
            </a>
          </li>
        ))}

        <li>
          <Link to="/" className="flex border-b-4 border-transparent px-5 py-4 transition-all duration-200 bg-primary-700 text-white">
            GET QUOTE
          </Link>
        </li>
      </ul>
    </div>
  );
}
