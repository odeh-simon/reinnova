import PropTypes from 'prop-types';

const JobsCard = ({ title, items }) => {
  return (
    <div className="bg-[#FAFEFF] p-6 rounded-[10px] max-w-sm" style={{boxShadow:'4px 4px 4px 0px rgba(0, 0, 0, 0.05)'}}>
      <h3 className="text-[#030B1E] font-[poppins] font-medium text-[20px]">{title}</h3>
      <ul className="mt-4 list-disc list-inside text-[#0A2540] space-y-2">
        {items.map((item, index) => (
          <li key={index} className='text-xs lg:text-sm font-[poppins] text-[#030B1E]'>{item}</li>
        ))}
      </ul>
    </div>
  );
};
JobsCard.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default JobsCard;
