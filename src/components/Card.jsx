import PropTypes from 'prop-types';

const Card = ({
  bgColor = 'bg-white', // Optional background color, defaults to white
  steps, // Optional steps
  headerText,
  imageSrc, // Required image source
  imageWidth = 'w-full', // Optional image width, defaults to full width
  imageHeight = 'h-auto', // Optional image height, defaults to auto
  imageCaption, // Required image caption
  captionAlign = 'text-center', // Optional text alignment for caption, defaults to center
  buttonText, // Optional button text
  onButtonClick, // Optional button onClick handler
  headerAlign = 'text-center'
}) => {
  return (
    <div className={`py-5 flex flex-col px-5 rounded-[10px] h-[400px] shadow-md ${bgColor}`}>
      {/* Optional Steps */}
      {steps && (
        <p className="text-xs md:text-sm font-medium text-left">
          Step{steps}
        </p>
      )}

      <div className='flex flex-col gap-4'>
        {/* Optional Header Text */}
        {headerText && (
          <h3 className={`text-sm md:text-[18px] font-medium ${headerAlign}`}>
            {headerText}
          </h3>
        )}
        {/* Image */}
        <div className={`mx-auto ${imageWidth} ${imageHeight}`}>
          <img src={imageSrc} alt={imageCaption} className="rounded-[5px]" />
        </div>
        {/* Required Image Caption */}
        <p className={`text-[#05232E] text-xs md:text-[14px] font-[poppins] leading-[170%] ${captionAlign} mb-2`}>
          {imageCaption}
        </p>
        {/* Optional Button */}
        {buttonText && (
          <div className="flex justify-center">
            <button
              onClick={onButtonClick}
              className="bg-[#016E97] cursor-pointer text-white font-[poppins] font-medium py-3 px-4 rounded-[10px] hover:bg-teal-700"
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  bgColor: PropTypes.string,
  steps: PropTypes.string,
  headerText: PropTypes.string,
  headerAlign: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  imageCaption: PropTypes.string.isRequired,
  captionAlign: PropTypes.string,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default Card;