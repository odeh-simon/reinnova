// src/components/Button.jsx
import PropTypes from 'prop-types';

const Button = ({ label,  onClick}) => {
  return (
    <button
      className={`relative w-fit flex items-center justify-center cursor-pointer font-montserrat hover:bg-[#016f97e5] bg-[#016E97] text-white hover:border-none rounded-[10px] px-[26px] py-3`}
      onClick={onClick}
    >
      <span className="text-center text-xs font-[poppins] font-medium md:text-base">{label}</span>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default Button;
