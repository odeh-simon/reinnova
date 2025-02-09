import PropTypes from 'prop-types';

const StatsComponent = ({ statsData }) => {
  
  return (
    <section className="flex flex-col gap-6 bg-white">
      <div className="text-center">
        <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[40px]">Our Numbers</h2>
        <p className="text-center text-[#35383F] text-xs md:text-xl font-[RocknRollOne]">
          Sometimes, we keep quiet and let our numbers do the talking... ...because data doesn&apos;t lie.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <div key={index} className="text-left  border-t border-[#030B1E] pt-2 ">
            <h3 className="text-[#030B1E] font-[poppins] text-lg md:text-[24px] font-medium">
              {stat.number !== undefined ? stat.number.toLocaleString() : ''}
              {stat.suffix}
            </h3>
            <p className="text-[#35383F] font-[poppins] text-[12px] md:tex-[18px]">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

StatsComponent.propTypes = {
  statsData: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number,
      suffix: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StatsComponent;