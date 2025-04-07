import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrow from "../../../assets/icons/arrow-right.svg";
import plasticIcon from "../../../assets/icons/Home Icons/recycling-plastic.svg";
import tubeIcon from "../../../assets/icons/Home Icons/tube.svg";
import aluminiumIcon from "../../../assets/icons/Home Icons/aluminium.svg";

const defaultBG = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1744030647/homebg_vynxay.png";
const backgroundImage1 = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295462/homeBG_kkqhtw.png";
const backgroundImage2 = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1744030619/homeBG2_s7ix7i.png";
const backgroundImage3 = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295471/homeBG3_dehbvr.png";
const backgroundImage4 = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295476/homeBG4_gqr3xz.png";
const backgroundImage5 = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295480/homeBG5_jbq4op.png";

const HeaderSlide = () => {
  const slidesData = [
    {
      middleText: "",
      backgroundImage: defaultBG,
      showButtons: false,
    },
    {
      middleText: "Transforming plastic waste into valuable resources.",
      backgroundImage: backgroundImage1,
      icon: plasticIcon,
      iconText: "ReInnova Green Ecoplast",
      learnMoreLink: "/green-ecoplast",
    },
    {
      middleText: "Eco-friendly tubes for pharma & home care.",
      backgroundImage: backgroundImage2,
      icon: tubeIcon,
      iconText: "ReInnova Green Packaging",
      learnMoreLink: "/green-packaging",
    },
    {
      middleText: "Powering Progress Through Sustainable Aluminium Solutions",
      backgroundImage: backgroundImage3,
      icon: aluminiumIcon,
      iconText: "First Aluminium Nigeria",
      learnMoreLink: "/first-aluminium",
    },
    {
      middleText: "Recycling plastic waste into new possibilities.",
      backgroundImage: backgroundImage4,
      icon: plasticIcon,
      iconText: "ReInnova Green Ecoplast",
      learnMoreLink: "/green-ecoplast",
    },
    {
      middleText: "Eco-friendly tubes for pharma & home care.",
      backgroundImage: backgroundImage5,
      icon: tubeIcon,
      iconText: "ReInnova Green Packaging",
      learnMoreLink: "/green-packaging",
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

  return (
    <div className="relative flex flex-col w-full h-[50vh] md:h-[95vh] text-white overflow-hidden">
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
              backgroundPosition: "bottom",
            }}
          >
            {/* Slide content */}
            <div className={`h-full flex flex-col md:w-[80%] mx-auto items-center justify-center`}>
              {/* New Section: Icon and Text */}
              {slide.icon && slide.iconText && (
                <div className="flex justify-center items-center gap-3 mb-4 p-2 rounded-[10px] bg-white">
                  <img src={slide.icon} alt="icon" className="w-15 h-15 object-cover" />
                  <p className="text-base md:text-lg font-[poppins] font-semibold text-[#0765A5]">{slide.iconText}</p>
                </div>
              )}

              <h1 className="text-lg md:text-[40px] lg:text-[50px] px-8 md:px-16 font-[RocknRollOne] text-center mb-4">
                {slide.middleText}
              </h1>

              {/* Buttons */}
              {slide.showButtons !== false && (
                <div className="flex gap-4 items-center justify-center mt-6">
                  <Link
                    to="/contact-us"
                    className="bg-white text-[#0765A5] hover:text-blue-700 hover:text-xl transition-all px-4 md:px-[32px] py-3 rounded-[10px] font-[poppins] font-medium text-lg"
                  >
                    Contact Us
                  </Link>

                  {slide.learnMoreLink && (
                    <Link
                      to={slide.learnMoreLink}
                      className="bg-transparent border-2 border-white flex items-center rounded-[10px] px-3 py-2 md:px-[32px] md:py-3 gap-4"
                    >
                      <span className="font-[poppins] font-medium text-lg hover:text-xl transition-all">
                        Learn More{" "}
                      </span>
                      <img src={arrow} alt="arrow" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlide;