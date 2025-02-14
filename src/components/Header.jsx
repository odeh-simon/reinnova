import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow-right.svg";
import arrowDown from "../assets/icons/arrow-down.svg";

const Header = ({
  headerText = "",
  middleText,
  descriptionText = "",
  showSubscribeButton = true,
  showHomeButtons = true,
  backgroundImage,
  showBouncingArrow = true,
  textColor = "text-white",
}) => {
  useEffect(() => {
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

    // Optional: Cleanup to remove the script if the component unmounts
    return () => {
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div
      className={`flex w-full relative flex-col items-center justify-center bg-cover bg-center h-[50vh] md:h-[90vh] px-8 ${textColor}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Optional Header Text */}
      {headerText && (
        <h2 className="text-[16px] md:text-[24px] font-[RocknRollOne] text-center mb-4 underline">
          {headerText}
        </h2>
      )}

      {/* Required Middle Text */}
      <h1 className="text-lg md:text-[32px] lg:text-[40px] px-8 md:px-16 font-[RocknRollOne] text-center mb-4">
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
              Learn More{" "}
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
        <div className="mt-4 animate-bounce justify-end absolute bottom-10">
          <img src={arrowDown} alt="scroll down" className="h-4 w-10" />
        </div>
      )}
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
};

export default Header;
