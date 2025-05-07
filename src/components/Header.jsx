import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow-right.svg";
import arrowDownWhite from "../assets/icons/arrow-down.svg"; // Default white arrow
import arrowDownBlue from "../assets/icons/blue-arrow-down.svg"; // Optional blue arrow

const Header = ({
  headerText = "",
  middleText,
  descriptionText = "",
  showSubscribeButton = true,
  showHomeButtons = true,
  backgroundImage,
  showBouncingArrow = true,
  bouncingArrowColor = "white",
  textColor = "text-white",
  enableBackgroundZoom = true, // New prop to control background zoom
}) => {
  const [showContent, setShowContent] = useState(false);
  const [zoomBackground, setZoomBackground] = useState(false);

  useEffect(() => {
    // Trigger content slide-in
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    // Trigger background zoom-in only if enableBackgroundZoom is true
    let zoomTimer;
    if (enableBackgroundZoom) {
      zoomTimer = setTimeout(() => {
        setZoomBackground(true);
      }, 1000);
    }

    // Check if the script has already been appended
    const existingScript = document.querySelector('script[data-uid="77f3d4dfec"]');

    if (!existingScript) {
      // Dynamically inject the newsletter embed script if it doesn't exist
      const script = document.createElement("script");
      script.async = true;
      script.setAttribute("data-uid", "77f3d4dfec");
      script.src = "https://reinnova-green-holdings.kit.com/77f3d4dfec/index.js";
      document.getElementById("newsletter-embed").appendChild(script);
    }

    // Cleanup
    return () => {
      clearTimeout(contentTimer);
      if (zoomTimer) {
        clearTimeout(zoomTimer);
      }
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [enableBackgroundZoom]); // Add enableBackgroundZoom to dependency array

  // Determine the arrow image based on the `bouncingArrowColor` prop
  const arrowDown = bouncingArrowColor === "blue" ? arrowDownBlue : arrowDownWhite;

  return (
    <div
      className={`flex w-full relative flex-col items-center justify-center bg-cover bg-center h-[50vh] lg:h-[90vh] px-4 lg:px-12 ${textColor} overflow-hidden`}
    >
      <style>
        {`
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

          .slide-up {
            animation: slideUp 1s ease-out forwards;
          }

          .zoom-in {
            animation: zoomIn 5s ease-out forwards;
          }
        `}
      </style>

      {/* Background Image Layer */}
      <div
        className={`absolute inset-0 ${zoomBackground && enableBackgroundZoom ? "zoom-in" : ""}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      />

      {/* Content Layer */}
      <div
        className={` z-10 flex flex-col items-center justify-center w-full ${
          showContent ? "slide-up" : "opacity-0"
        }`}
      >
        {/* Optional Header Text */}
        {headerText && (
          <h2 className="text-[16px] md:text-[32px] font-[RocknRollOne] text-center mb-4 underline">
            {headerText}
          </h2>
        )}

        {/* Required Middle Text */}
        <h1 className="text-lg md:text-[40px] lg:text-[64px] px-8 md:px-10 font-[RocknRollOne] font-semibold text-center mb-4">
          {middleText}
        </h1>

        {/* Optional Description Text */}
        {descriptionText && (
          <p className="text-center text-xs md:text-sm font-medium font-[poppins] max-w-2xl mb-4">
            {descriptionText}
          </p>
        )}

        {/* Optional Home Buttons */}
        {showHomeButtons && (
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
                Learn More
              </span>
              <img src={arrow} alt="arrow" />
            </Link>
          </div>
        )}

        {/* Newsletter Embed */}
        {showSubscribeButton && (
          <div id="newsletter-embed" className="w-full md:w-[60%] mx-auto"></div>
        )}

        {/* Optional Downward Arrow */}
        {showBouncingArrow && (
          <div className="animate-bounce justify-end absolute -bottom-20">
            <img src={arrowDown} alt="scroll down" className="h-4 w-10" />
          </div>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  headerText: PropTypes.string,
  textColor: PropTypes.string,
  middleText: PropTypes.string.isRequired,
  descriptionText: PropTypes.string,
  showSubscribeButton: PropTypes.bool,
  showHomeButtons: PropTypes.bool,
  backgroundImage: PropTypes.string.isRequired,
  showBouncingArrow: PropTypes.bool,
  bouncingArrowColor: PropTypes.oneOf(["white", "blue"]),
  enableBackgroundZoom: PropTypes.bool, // New prop for background zoom control
};

export default Header;