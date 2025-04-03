import PropTypes from "prop-types";

const FirstAluminiunCard = ({ header, description }) => {
  return (
    <div className="bg-[#B3AEB2B3] rounded-[10px] px-4 py-6 flex flex-col gap-5 items-center text-center">
      <h2 className="text-[#05232E] font-[RocknRollOne] text-lg text-center uppercase leading-[40px]">
        {header}
      </h2>
      {/* <div className="flex items-center justify-center ">
        <img className="w-auto h-auto" src={imageSrc} alt={header} />
      </div> */}
      <p className="font-[poppins] text-[#030B1E] text-sm md:text-lg">
        {description}
      </p>
    </div>
  );
};

// Prop validation
FirstAluminiunCard.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FirstAluminiunCard;
