import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow-right.svg";
import arrowDown from "../assets/icons/arrow-down.svg";

const Header = ({
  headerText = "",
  middleText,
  descriptionText = "",
  buttonText = "Subscribe",
  showSubscribeButton = true,
  showHomeButtons = true,
  backgroundImage,
  showBouncingArrow = true,
  textColor = "text-white",
}) => {
  return (
    <div
      className={`flex  relative flex-col items-center justify-center bg-cover bg-center h-[50vh] md:h-[90vh] px-8 ${textColor}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Optional Header Text */}
      {headerText && (
        <h2 className="text-[16px] md:text-[24px]  font-[RocknRollOne] text-center mb-4 underline">
          {headerText}
        </h2>
      )}

      {/* Required Middle Text */}
      <h1 className="text-lg md:text-[32px] xl:text-[64px] font-[RocknRollOne] text-center  mb-4">
        {middleText}
      </h1>

      {/* Optional Description Text */}
      {descriptionText && (
        <p className="text-center text-xs md:text-sm font-medium font-[poppins]  max-w-2xl mb-6">
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
            <span className="font-[poppins]  font-medium text-lg hover:text-xl transition-all">
              Learn More{" "}
            </span>
            <img src={arrow} alt="arrow" />
          </Link>
        </div>
      )}

      {/* Optional Email Subscription Form */}
      {showSubscribeButton && (
        <div className="flex flex-row justify-between py-1 px-1.5 rounded-[10px] items-center w-full md:w-[60%] lg:w-[40%] mx-auto bg-white">
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded-l-lg text-[#35383F] focus:outline-none w-full md:w-auto"
          />
          <button className="bg-[#016E97] text-white px-5 py-3 rounded-[7px] font-medium hover:bg-[#054056]">
            {buttonText}
          </button>
        </div>
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
  buttonText: PropTypes.string,
  showSubscribeButton: PropTypes.bool,
  showHomeButtons: PropTypes.bool,
  backgroundImage: PropTypes.string.isRequired,
  showBouncingArrow: PropTypes.bool,
};

export default Header;
