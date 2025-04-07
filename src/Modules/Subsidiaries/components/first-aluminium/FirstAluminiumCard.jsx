import PropTypes from "prop-types";

const FirstAluminiumCard = ({ header, description }) => {
  return (
    <div className="bg-[#B3AEB2B3] rounded-[10px] px-4 py-6 flex flex-col gap-5 items-center text-center">
      {/* Header with fixed height */}
      <h2
        className="text-[#05232E] font-[RocknRollOne] text-lg text-center uppercase leading-[40px]"
        style={{ minHeight: "80px" }} // Adjust height as needed
      >
        {header}
      </h2>
      {/* Description */}
      <p
        className="font-[poppins] text-[#030B1E] text-sm md:text-lg"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
};

// Prop validation
FirstAluminiumCard.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired, // Description should now be an HTML string
};

export default FirstAluminiumCard;