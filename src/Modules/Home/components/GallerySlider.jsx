import { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import backarrow from "../../../assets/icons/backArrow.svg";
import forwardArrow from "../../../assets/icons/forwardArrow2.svg";

const galleryImage1 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295931/image1_gxca87.png';
const galleryImage2 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295935/image2_snough.png';
const galleryImage3 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295939/image3_gdu0hr.png';
const galleryImage4 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295944/image4_pu2eij.png';
const galleryImage5 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451899/image5_by9udi.png';
const galleryImage6 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451900/image6_jt0x8m.png';
const galleryImage7 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451901/image7_mycvlz.png';
const galleryImage8 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451902/image8_jembpx.png';
const galleryImage9 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451902/image9_mvssqo.png';
const galleryImage10 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451902/image10_etehf3.png';
const galleryImage11 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451902/image11_vjwbzj.png';
const galleryImage12 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451901/image12_ysn2vl.png';
const galleryImage13 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451903/image13_dhjkjn.png';
const galleryImage14 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451903/image14_oivh0d.png';
const galleryImage15 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743451903/image15_afgs89.png';
const galleryImage16 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1746032160/clear-blue_helkal.png';
const galleryImage17 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1746032162/green-flakes_dmpdx5.png';
const galleryImage18 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1746032164/green-pet_j4fmbu.png';
const galleryImage19 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1746032165/pellets_nplj8b.png';
const galleryImage20 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1746032159/blue-pet_ptgeku.png';
const galleryImage21 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1746032159/black-pellet2_kvfpqi.png';
const galleryImage22 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1746032157/black-pellet_ra49dk.png';
const galleryImage23 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1746032157/amber-flakes_qmnxpo.png';

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
  galleryImage16,
  galleryImage17,
  galleryImage18,
  galleryImage19,
  galleryImage20,
  galleryImage21,
  galleryImage22,
  galleryImage23,
];

// Number of images visible at a time
const VISIBLE_IMAGES = 4;

const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(images.length); // Start in the middle of extended array
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef(null);

  // Create extended array with multiple sets of images for smoother looping
  const extendedImages = [
    ...images.slice(-VISIBLE_IMAGES), // Last 4 images
    ...images,
    ...images,
    ...images,
    ...images.slice(0, VISIBLE_IMAGES), // First 4 images
  ];

  useEffect(() => {
    const interval = setInterval(handleNext, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      // Reset to the start of the second set of original images when reaching the end
      if (newIndex >= extendedImages.length - VISIBLE_IMAGES * 2) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(images.length); // Reset to start of second set
          setTimeout(() => setIsTransitioning(true), 0);
        }, 500); // Match transition duration
      }
      return newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      // Reset to the end of the first set of original images when reaching the start
      if (newIndex < VISIBLE_IMAGES) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(images.length * 2 - VISIBLE_IMAGES); // Reset to end of first set
          setTimeout(() => setIsTransitioning(true), 0);
        }, 500); // Match transition duration
      }
      return newIndex;
    });
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
        <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] md:text-[30px] lg:text-[40px] mb-4">
          Our Gallery
        </h2>
        <p className="text-center text-[#35383F] text-xs md:text-xl font-[RocknRollOne]">
          Take a look through our gallery to see some of our products and
          production process
        </p>
      </div>
      <div className="relative flex justify-center items-center mx-auto w-full max-w-[1200px]">
        <button
          onClick={handlePrev}
          className="absolute left-0 text-white p-2 transform -translate-x-10 hidden md:inline-block z-10"
        >
          <img src={backarrow} alt="previous" />
        </button>
        <div {...handlers} className="flex overflow-hidden w-full">
          <div
            ref={containerRef}
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * (100 / VISIBLE_IMAGES)}%)`,
              width: `${(extendedImages.length / VISIBLE_IMAGES) * 100}%`,
              transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none',
            }}
          >
            {extendedImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className="w-[25%] sm:w-[25%] flex-shrink-0 p-2 mb-4"
              />
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 text-white p-2 transform translate-x-10 hidden md:inline-block z-10"
        >
          <img src={forwardArrow} alt="next" />
        </button>
      </div>
    </div>
  );
};

export default GallerySlider;