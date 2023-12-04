import { Carousel } from "@material-tailwind/react";
type CustomCarouselProps = {
  images: string[];
};

const CustomCarousel = ({ images }: CustomCarouselProps) => {
  return (
    <Carousel className="rounded-xl">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`image ${index}`} className="h-full w-full object-cover" />
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
