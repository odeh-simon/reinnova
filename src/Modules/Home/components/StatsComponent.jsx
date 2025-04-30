import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

const StatsComponent = ({ statsData }) => {
  const [counts, setCounts] = useState(statsData.map((stat) => (stat.number !== undefined ? 0 : '')));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          statsData.forEach((stat, index) => {
            // Only count for the first three items
            if (index < 3 && stat.number !== undefined) {
              const target = stat.number;
              const duration = 1000; // Rapid counting for first three
              const increment = target / (duration / 16); // Approx 60fps
              let current = 0;

              const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(counter);
                }
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(current);
                  return newCounts;
                });
              }, 16);
            }
          });
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [statsData]);

  return (
    <section ref={sectionRef} className="flex flex-col gap-6 bg-white py-10">
      <div className="text-center">
        <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] md:text-[30px] lg:text-[40px]">
          Our Numbers
        </h2>
        <p className="text-center text-[#35383F] text-xs md:text-lg font-[RocknRollOne]">
          The numbers tell the story of our remarkable industry growth and performance.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 mx-auto">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`text-left w-fit ${
              statsData.length === 5 && index === 3 ? "grid-cols-1" : ""
            }`}
          >
            <div>
              <img src={stat.icon} alt="" className="w-auto h-auto" />
            </div>
            <h3 className="text-[#030B1E] font-[poppins] text-lg lg:text-[30px] font-medium">
              {index < 3 && stat.number !== undefined
                ? counts[index].toLocaleString()
                : stat.number !== undefined
                ? stat.number.toLocaleString()
                : ''}
              {stat.suffix}
            </h3>
            <p className="text-[#35383F] font-[poppins] underline text-[12px] md:text-xs">
              {stat.description}
            </p>
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
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StatsComponent;