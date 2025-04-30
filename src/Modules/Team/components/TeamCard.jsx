import PropTypes from 'prop-types';

const TeamCard = ({ imageSrc, name, role }) => {
  return (
    <div className="flex flex-col bg-transparent rounded-b-[10px] overflow-hidden"  data-aos="fade-up">
      <div className="flex-shrink-0">
        <img className="w-full h-[300px]" src={imageSrc} alt={name} />
      </div>
      <div className="flex flex-col bg-[#338BAC] shadow-custom-darkBrown py-2 px-5 h-[80px] relative">
        <h3 className="text-[10px] lg:text-xs text-[#D2D2D2] font-medium uppercase">{role}</h3>
        <p className="text-xs text-[#FCFFFF] font-semibold uppercase absolute bottom-2">{name}</p>
      </div>
    </div>
  );
};

// Prop validation
TeamCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default TeamCard;