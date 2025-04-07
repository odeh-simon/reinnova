import OurFocusSlider from "./OurFocusSlider";

const paragraphs = [
  "Expanding our recycling capacity to significantly reduce plastic waste pollution.",
  "Innovating eco-friendly packaging solutions that support global sustainability goals.",
  "Enhancing local production capabilities to drive import substitution and industrial growth.",
  "Strengthening our impact in aluminium manufacturing, ensuring long-term value for the construction industry.",
];

const OurFocus = () => {
  return (
    <div>
      {/* Other content */}
      <OurFocusSlider paragraphs={paragraphs} />
    </div>
  );
};

export default OurFocus;