import { useState } from "react";

const images = [
  "https://cdn.pixabay.com/photo/2021/12/08/14/49/trees-6855857_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/09/07/16/18/forest-4459247_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/10/05/15/29/river-972786_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/11/03/15/03/waterfall-8363216_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/10/17/16/14/waterfall-9128051_1280.jpg",
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="relative w-full h-screen bg-gray-900 flex justify-center items-center">
        
        {/* Pfeile seitlich vom Bild */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-36 transform -translate-y-1/2 text-white   
           text-4xl font-bold hover:bg-gray-400 hover:text-black rounded-lg 
           text-center cursor-pointer p-1 "
        >
          {"<"}
        </button>
        {/* Bild */}
        <div className="relative w-[80%] h-[80%] pr-12 rounded-2x">
          <img
            src={images[current]}
            alt={`Slide ${current}`}
            className="w-full h-full rounded-lg object-cover"
          />

          <button
            onClick={nextSlide}
            className="absolute right-1 top-1/2  transform -translate-y-1/2 text-white 
            text-4xl font-bold hover:bg-gray-400 hover:text-black rounded-lg 
           text-center cursor-pointer p-1 "
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
