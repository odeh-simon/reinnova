import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from 'prop-types';

const Testimonial = ({ headerText, paragraphText = "400+ Happy Clients can't be wrong. Take a look at some of their reviews" }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://res.cloudinary.com/dsnz8adqi/raw/upload/v1746025872/TestimonialData_xcgmjz.json');
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await response.json();
        setTestimonials(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [testimonials]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const direction = 1;

  if (loading) {
    return <div className="text-center text-[#35383F] font-[poppins]">Loading testimonials...</div>;
  }

  if (error) {
    return <div className="text-center text-[#35383F] font-[poppins]">Error: {error}</div>;
  }

  return (
    <div className="w-full mx-auto text-center">
      <div className="flex flex-col gap-1 mb-4">
        <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] md:text-[24px]">
          {headerText}
        </h2>
        <p className="text-center text-[#35383F] text-xs md:text-xl font-[RocknRollOne]">
          {paragraphText}
        </p>
      </div>

      <div className="relative overflow-hidden h-[350px] md:h-[300px] w-[100%] mx-auto">
        <AnimatePresence initial={false} custom={direction}>
          {testimonials.map((testimonial, index) =>
            index === currentIndex ? (
              <motion.div
                key={testimonial.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 100, damping: 30 },
                  opacity: { duration: 0.5 },
                }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="bg-white flex flex-col justify-center items-center">
                  <div className="flex flex-col gap-2 items-center">
                    <div
                      className="w-[100px] h-[100px] rounded-full overflow-hidden"
                      style={{
                        backgroundImage: `url(${testimonial.avatar})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <h3 className="text-[14px] md:text-[16px] font-[poppins] font-semibold text-[#35383F]">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs md:text-[14px] font-[poppins] text-[#35383F]">
                      {testimonial.role} <span className="font-semibold">{testimonial.location}</span>
                    </p>
                    <p className="text-[14px] md:text-[16px] text-center font-[poppins] italic text-[#35383F]">
                      {testimonial.feedback}
                    </p>
                    <div className="flex justify-center gap-3">
                      {testimonials.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-[10px] h-[10px] rounded-full cursor-pointer ${
                            idx === currentIndex ? "bg-[#016E97]" : "bg-[#E5F8FF]"
                          }`}
                          onClick={() => setCurrentIndex(idx)}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  headerText: PropTypes.string.isRequired,
  paragraphText: PropTypes.string,
};

export default Testimonial;