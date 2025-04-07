import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import '../components/Bounce.css'

const OurFocusSlider = ({ paragraphs }) => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const [isInView, setIsInView] = useState(false);
  const sliderRef = useRef(null);
  const currentIndexRef = useRef(-2);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 } // Trigger when 50% of the slider is visible
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setVisibleIndexes((prevIndexes) => {
        const currentIndex = currentIndexRef.current;
        if (!prevIndexes.includes(currentIndex)) {
          return [...prevIndexes, currentIndex];
        }
        return prevIndexes;
      });

      currentIndexRef.current += 1;

      if (currentIndexRef.current >= paragraphs.length) {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [isInView, paragraphs.length]);

  return (
    <div ref={sliderRef} className="flex flex-col gap-4">
      {paragraphs.map((text, index) => (
        <div
          key={index}
          className={`bg-[#016E97] p-4 w-fit rounded-tr-[700px] rounded-br-[70px] transition-transform duration-500 ${
            visibleIndexes.includes(index)
              ? "translate-x-0 opacity-100 animate-bounce-once"
              : "translate-x-full opacity-0"
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <p className="font-[poppins] text-xs lg:text-[18px] text-white lg:leading-[32px]">{text}</p>
        </div>
      ))}
    </div>
  );
};

OurFocusSlider.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default OurFocusSlider;