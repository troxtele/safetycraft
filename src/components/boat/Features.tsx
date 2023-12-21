import { FiPlusSquare } from "react-icons/fi";

type featureData = {
  id: number;
  title: string;
  description: string;
  image: string;
  paragraph: string;
}[];

export default function Features({ data }: { data: featureData }) {
  return (
    <div className="features pb-20 sm:py-20">
      <div className="container">
        {/* Items */}
        <div className="items grid gap-16">
          {data.map((item) => (
            <div key={item.id} className="item grid gap-8 md:grid-cols-2 lg:gap-20">
              <div className="left group relative">
                <img src={item.image} alt={item.title} />

                {/* imge show */}
                <div className="plus-img absolute bottom-[1rem] right-[1rem] scale-75 cursor-pointer text-3xl text-white transition-all duration-300 group-hover:rotate-180 group-hover:scale-100">
                  <FiPlusSquare />
                </div>
              </div>

              {/* right */}
              <div className={`right flex flex-col justify-center ${item.id % 2 === 0 ? "lg:row-start-1" : ""}`}>
                <div className="title font-extrabold text-primary-700">{item.title}</div>
                <div className="description mt-2 text-2xl font-extrabold leading-[1] md:text-[2.2rem] lg:text-[2.5rem]">
                  {item.description}
                </div>
                <div className="paragraph mt-5">{item.paragraph}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
