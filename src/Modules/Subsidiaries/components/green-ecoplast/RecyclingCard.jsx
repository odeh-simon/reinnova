import PropTypes from "prop-types";

const RecyclingCard = ({ header, imageSrc, description }) => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="flex items-center justify-center w-fit py-1 px-8 bg-white rounded-[10px] border-2 border-[#016E97]">
        <h2 className="text-[#030B1E] uppercase font-[poppins] text-lg text-center font-medium leading-[40px]">
          {header}
        </h2>
      </div>
      <div className="w-full bg-white rounded-[10px] border-2 border-[#016E97]">
        <img className="w-full h-[227px]" src={imageSrc} alt={header} />
      </div>
      <p className="font-[poppins] text-center text-[#030B1E] text-sm md:text-lg">{description}</p>
    </div>
  );
};

// Prop validation
RecyclingCard.propTypes = {
  header: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RecyclingCard;
