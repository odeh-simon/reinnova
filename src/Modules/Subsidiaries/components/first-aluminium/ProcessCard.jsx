import PropTypes from "prop-types";

const ProcessCard = ({ step, headerText, bodyText }) => {
  return (
    <div className="flex flex-col border-l-2 pl-1 border-[#016E97] font-[poppins] text-[#05232E]">
      {/* Left border that spans the content */}
      <div className="">
        <span className="text-xl font-medium">Step {step}</span>
      </div>
      <div className="">
        <h3 className="text-sm font-semibold mb-4">{headerText}</h3>
        <p className="text-sm text-[#05232E] text-justify">{bodyText}</p>
      </div>
    </div>
  );
};

ProcessCard.propTypes = {
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  headerText: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
};

export default ProcessCard;