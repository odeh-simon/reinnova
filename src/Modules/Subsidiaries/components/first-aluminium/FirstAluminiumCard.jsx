import PropTypes from "prop-types";

const FirstAluminiumCard = ({ header, description }) => {
  return (
    <div className="bg-[#4F656D] shadow-custom-black px-5 py-9 flex flex-col gap-5 items-center text-center">
      {/* Header with fixed height */}
      <h2
        className="text-[#EDFAFF] font-[RocknRollOne] text-base text-center uppercase"
        style={{ minHeight: "80px" }} // Adjust height as needed
      >
        {header}
      </h2>
      {/* Description */}
      <p
        className="font-[poppins] text-[#EDFAFF] text-sm px-2 md:text-base"
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