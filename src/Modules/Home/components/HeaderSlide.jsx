import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrow from "../../../assets/icons/arrow-right.svg";
const backgroundImage1 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295462/homeBG_kkqhtw.png '
const backgroundImage2 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295466/homeBG2_s7ix7i.png '
const backgroundImage3 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295471/homeBG3_dehbvr.png '
const backgroundImage4 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295476/homeBG4_gqr3xz.png '
const backgroundImage5 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295480/homeBG5_jbq4op.png '

const HeaderSlide = () => {
  const slidesData = [
    {
      middleText: "Transforming plastic waste into valuable resources.",
      backgroundImage: backgroundImage1,
    },
    {
      middleText:
        " Transforming raw materials into the dependable tubes you know and love",
      backgroundImage: backgroundImage2,
    },
    {
      middleText: "Transforming plastic waste into valuable resources.",
      backgroundImage: backgroundImage3,
    },
    {
      middleText:
        "Providing exceptional aluminum roofing solutions while keeping sustainability",
      backgroundImage: backgroundImage4,
    },
    {
      middleText: "Building blocks for a wide range of new plastic products",
      backgroundImage: backgroundImage5,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [direction, setDirection] = useState("next"); // 'next' or 'prev' for direction control

  // Automatically transition to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    setIsSliding(true);
    setDirection("next");
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
      setIsSliding(false);
    }, 10); // Transition duration
  };

  // const handlePrevSlide = () => {
  //   setIsSliding(true);
  //   setDirection('prev');
  //   setTimeout(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide - 1 + slidesData.length) % slidesData.length);
  //     setIsSliding(false);
  //   }, 500);
  // };

  return (
    <div className="relative flex flex-col items-center w-full justify-center h-[50vh] md:h-[90vh] text-white overflow-hidden">
      {/* Slide Wrapper */}
      <div className="relative w-full h-full">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out w-full ${
              index === currentSlide
                ? `translate-x-0`
                : isSliding
                ? direction === "next"
                  ? `translate-x-full`
                  : `-translate-x-full`
                : index < currentSlide
                ? `-translate-x-full`
                : `translate-x-full`
            }`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Slide content */}
            <div className={`h-full flex flex-col md:w-[80%] mx-auto items-center justify-center`}>
              <h1 className="text-lg md:text-[40px] px-8 md:px-16 font-[RocknRollOne] text-center mb-4">
                {slide.middleText}
              </h1>

              {/* Buttons */}
              <div className="flex gap-4 items-center justify-center mt-6">
                <Link
                  to="/contact-us"
                  className="bg-white text-[#0765A5] hover:text-blue-700 hover:text-xl transition-all px-4 md:px-[32px] py-3 rounded-[10px] font-[poppins] font-medium text-lg"
                >
                  Contact Us
                </Link>

                <Link
                  to="/about-us"
                  className="bg-transparent border-2 border-white flex items-center rounded-[10px] px-3 py-2 md:px-[32px] md:py-3 gap-4"
                >
                  <span className="font-[poppins] font-medium text-lg hover:text-xl transition-all">
                    Learn More{" "}
                  </span>
                  <img src={arrow} alt="arrow" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Controls - Left and Right Arrows */}
      {/* <div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-white text-3xl select-none z-10"
        onClick={handlePrevSlide}
      >
        &#10094;
      </div>
      <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-white text-3xl select-none z-10"
        onClick={handleNextSlide}
      >
        &#10095;
      </div> */}

      {/* Dots for navigation */}
      {/* <div className="absolute bottom-8 flex space-x-2 z-10">
        {slidesData.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default HeaderSlide;
