import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import galleryImage1 from "../../../assets/images/Home images/gallery images/image1.png";
import galleryImage2 from "../../../assets/images/Home images/gallery images/image2.png";
import galleryImage3 from "../../../assets/images/Home images/gallery images/image3.png";
import galleryImage4 from "../../../assets/images/Home images/gallery images/image4.png";
import backarrow from "../../../assets/icons/backArrow.svg";
import forwardArrow from "../../../assets/icons/forwardArrow2.svg";

const images = [
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage2,
];

const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(handleNext, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const getVisibleImages = () => {
    let visibleImages = [];
    for (let i = 0; i < 3; i++) {
      visibleImages.push(images[(currentIndex + i) % images.length]);
    }
    return visibleImages;
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="flex gap-2 flex-col">
      <div>
        <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[40px] mb-4">
          Our Gallery
        </h2>
        <p className="text-center text-[#35383F] text-xs md:text-xl font-[RocknRollOne]">
          Take a look through our gallery to see some of our products and
          production process
        </p>
      </div>
      <div className="relative flex justify-center items-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 text-white p-2 transform -translate-x-10 hidden md:inline-block"
        >
          <img src={backarrow} alt="previous" />
        </button>
        <div {...handlers} className="flex overflow-hidden w-full">
          <div className="flex transition-transform duration-300">
            {getVisibleImages().map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className="w-full sm:w-1/3 flex-shrink-0 p-3 object-cover sm:p-6 mb-4"
              />
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 text-white p-2 transform translate-x-10 hidden md:inline-block"
        >
          <img src={forwardArrow} alt="next" />
        </button>
        <div className="absolute bottom-0 mb-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-transparent"
              } border border-blue-500`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;
