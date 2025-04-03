import PropTypes from "prop-types";

const CommitmentCard = ({ header, imageSrc, description }) => {
  return (
    <div className="bg-white rounded-tr-[40px] rounded-br-[40px] shadow-custom-green p-6 flex flex-col gap-5 items-center">
      <div className="flex items-center justify-center w-fit py-1 px-4 bg-white rounded-[13px] shadow-md shadow-[#404FAE49]">
        <h2 className="text-black font-[poppins] text-lg text-center font-medium leading-[40px]">
          {header}
        </h2>
      </div>
      <div className="flex items-center justify-center ">
        <img className="w-auto h-auto" src={imageSrc} alt={header} />
      </div>
      <p className="font-[poppins] text-[#030B1E] text-sm md:text-lg">{description}</p>
    </div>
  );
};

// Prop validation
CommitmentCard.propTypes = {
  header: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CommitmentCard;
