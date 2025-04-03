import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import backarrow from "../../../assets/icons/backArrow.svg";
import forwardArrow from "../../../assets/icons/forwardArrow2.svg";
const galleryImage1 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295931/image1_gxca87.png'
const galleryImage2 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295935/image2_snough.png'
const galleryImage3 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295939/image3_gdu0hr.png'
const galleryImage4 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295944/image4_pu2eij.png'
const galleryImage5 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451899/image5_by9udi.png'
const galleryImage6 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451900/image6_jt0x8m.png'
const galleryImage7 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451901/image7_mycvlz.png'
const galleryImage8 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451902/image8_jembpx.png'
const galleryImage9 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451902/image9_mvssqo.png'
const galleryImage10 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451902/image10_etehf3.png'
const galleryImage11 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451902/image11_vjwbzj.png'
const galleryImage12 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451901/image12_ysn2vl.png'
const galleryImage13 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451903/image13_dhjkjn.png'
const galleryImage14 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451903/image14_oivh0d.png'
const galleryImage15 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451903/image15_afgs89.png'

const images = [
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage5,
  galleryImage6,
  galleryImage7,
  galleryImage8,
  galleryImage9,
  galleryImage10,
  galleryImage11,
  galleryImage12,
  galleryImage13,
  galleryImage14,
  galleryImage15,
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
    for (let i = 0; i < 4; i++) {
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
      <div className="relative flex justify-center items-center mx-auto">
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
                className="w-full sm:w-1/4 flex-shrink-0 p-3 object-cover  mb-4"
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
        {/* <div className="absolute bottom-0 mb-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-transparent"
              } border border-blue-500`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default GallerySlider;
