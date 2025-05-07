import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrow from "../../../assets/icons/arrow-right.svg";
const defaultBG = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1746491095/homebg_vynxay.png";
const backgroundImage1 = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295462/homeBG_kkqhtw.png";
const backgroundImage2 = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1746639650/homeBG2_s7ix7i.png";
const backgroundImage3 = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295476/homeBG4_gqr3xz.png";
const backgroundImage4 = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295471/homeBG3_dehbvr.png";
const backgroundImage5 = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295480/homeBG5_jbq4op.png";
const plasticIcon = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1746021091/recycling-plastic_dqca2h.svg";
const tubeIcon = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1746021091/tube_ek40uj.svg";
const aluminiumIcon = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1746021087/aluminium_azdy6q.svg";
const HeaderSlide = () => {
  const slidesData = [
    {
      middleText: "",
      backgroundImage: defaultBG,
      showButtons: false,
    },
    {
      middleText: "Recycling plastic waste into new possibilities.",
      backgroundImage: backgroundImage1,
      padding: "2px 12px",
      textPadding: "0px 12px",
      icon: plasticIcon,
      iconText: "ReInnova Green Ecoplast",
      iconTextColor: "#0765A5", // Dynamic text color
      iconBackground: "#fff", // Dynamic background color for icon container
      // sectionBackground: "rgba(0, 0, 0, 0.5)", // Dynamic background for the entire section
      learnMoreLink: "/green-ecoplast",
    },
    {
      middleText: "Eco-friendly tubes for pharma & home care.",
      backgroundImage: backgroundImage2,
      textPadding: "2px 12px",
      icon: tubeIcon,
      iconText: "ReInnova Green Packaging",
      iconTextColor: "#fff",
      iconBorder: "2px solid #fff",
      sectionBackground: "#fff",
      learnMoreLink: "/green-packaging",
    },
    {
      middleText: "Powering Progress Through Sustainable Aluminium Solutions",
      backgroundImage: backgroundImage3,
      padding: "2px 12px",
      textPadding: "0px 12px",
      icon: aluminiumIcon,
      iconText: "First Aluminium Nigeria",
      iconTextColor: "#fff",
      iconBorder: "2px solid #fff",
      // sectionBackground: "rgba(0, 0, 0, 0.7)",
      learnMoreLink: "/first-aluminium",
    },
    {
      middleText: "Leading the Future of Sustainable Packaging",
      backgroundImage: backgroundImage4,
      padding: "2px 12px",
      textPadding: "0px 12px",
      icon: plasticIcon,
      iconText: "ReInnova Green Ecoplast",
      iconTextColor: "#0765A5", // Dynamic text color
      iconBackground: "#fff", // Dynamic background color for icon container
      // sectionBackground: "rgba(0, 0, 0, 0.5)", // Dynamic background for the entire section
      learnMoreLink: "/green-ecoplast",
    },
    {
      middleText: "Eco-friendly tubes for pharma & home care.",
      backgroundImage: backgroundImage5,
      textPadding: "2px 12px",
      icon: tubeIcon,
      iconText: "ReInnova Green Packaging",
      iconTextColor: "#fff",
      iconBorder: "2px solid #fff",
      sectionBackground: "#fff",
      learnMoreLink: "/green-packaging",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [zoomBackground, setZoomBackground] = useState(false);

  useEffect(() => {
    setIsSliding(true);
    setShowContent(false);
    setZoomBackground(false);

    const slideInTimer = setTimeout(() => {
      setIsSliding(false);
      setShowContent(true);
    }, 1000);

    const zoomTimer = setTimeout(() => {
      setZoomBackground(true);
    }, 1500);

    const interval = setInterval(() => {
      handleNextSlide();
    }, 7000);

    return () => {
      clearTimeout(slideInTimer);
      clearTimeout(zoomTimer);
      clearInterval(interval);
    };
  }, [currentSlide]);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
  };

  return (
    <div className="relative flex flex-col w-full h-[50vh] lg:h-[95vh] text-white overflow-hidden">
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }

          @keyframes slideUp {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes zoomIn {
            from {
              transform: scale(1);
            }
            to {
              transform: scale(1.2);
            }
          }

          .slide-in {
            animation: slideIn 1s ease-out forwards;
          }

          .slide-up {
            animation: slideUp 1s ease-out forwards;
          }

          .zoom-in {
            animation: zoomIn 5s ease-out forwards;
          }
        `}
      </style>
      <div className="relative w-full h-full">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } ${index === currentSlide && isSliding ? "slide-in" : ""}`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
          >
            <div
              className={`absolute inset-0 ${
                index === currentSlide && zoomBackground && index !== 0 ? "zoom-in" : ""
              }`}
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            />
            <div className="h-full flex flex-col lg:w-[70%] mx-auto items-center justify-center relative z-10">
              <div
                className={`${
                  index === currentSlide && showContent && slide.middleText
                    ? "slide-up"
                    : "opacity-0"
                } text-center`}
              >
                {slide.icon && slide.iconText && (
                  <div
                    className="flex w-fit justify-center items-center gap-2 mb-3  mx-auto rounded-lg"
                    style={{
                      backgroundColor: slide.iconBackground || "transparent", // Dynamic background color
                      border: slide.iconBorder || "none", // Dynamic border
                      padding: slide.padding || "0px",
                    }}
                  >
                    <div className="w-14 h-14" style={{backgroundColor: slide.sectionBackground || "transparent" }}>
                      <img src={slide.icon} alt="icon" className="w-full h-full object-cover" />
                    </div>
                    <p
                      className="text-xs md:text-lg font-[poppins] font-semibold"
                      style={{
                        color: slide.iconTextColor || "#000", // Dynamic text color
                        padding: slide.textPadding || "0px",
                      }}
                    >
                      {slide.iconText}
                    </p>
                  </div>
                )}

                <h1 className="text-base md:text-[40px] px-6 md:px-12 font-[RocknRollOne] text-center mb-3">
                  {slide.middleText}
                </h1>

                {slide.showButtons !== false && (
                  <div className="flex gap-3  items-center justify-center mt-4">
                    <Link
                      to="/contact-us"
                      className="bg-white border-2 border-white text-[#0765A5] hover:text-blue-700 hover:text-base transition-all px-3 py-2 md:px-6 md:py-3 rounded-[10px] font-[poppins] font-medium text-sm"
                    >
                      Contact Us
                    </Link>

                    {slide.learnMoreLink && (
                      <Link
                        to={slide.learnMoreLink}
                        className="bg-transparent border-2 border-white flex items-center px-3 py-2 md:px-6 md:py-3 rounded-[10px] gap-2"
                      >
                        <span className="font-[poppins] font-medium text-sm hover:text-base transition-all">
                          Learn More
                        </span>
                        <img src={arrow} alt="arrow" className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlide;