//this component is where the data for the landing page cards are stored

import Card from "../../../components/Card";
import recycleIcon from "../../../assets/icons/Home Icons/recycle-icon.svg";
import bottleIcon from "../../../assets/icons/Home Icons/bottle-icon.svg";
import trashIcon from "../../../assets/icons/Home Icons/trash-icon.svg";
import roofIcon from "../../../assets/icons/Home Icons/roof-icon.svg";
import toothbrush from "../../../assets/images/Home images/toothbrush.png";
import spoons from "../../../assets/images/Home images/spoons.png";
import aluminium from "../../../assets/images/Home images/aluminium.png";
import watermarkBG from '../../../assets/images/watermarkBG.png'
import { useNavigate } from "react-router-dom";

export const SustainabilityCard = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* the Sustainability Card content goes here */}
      <div className="flex flex-col gap-1">
        <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[40px]">
          Our Commitment to Sustainability
        </h2>
        <p className="text-center text-[#35383F] text-xs md:text-xl font-[RocknRollOne]">
          Creating a Greener Future Through Circular Economy Practices
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[32px] items-center">
        {/**First Card */}
        <Card
          bgColor="#FAFEFF"
          imageSrc={recycleIcon}
          imageWidth="w-[103.16px]"
          imageHeight="h-[100px]"
          imageCaption="At Reinnova Green, we embrace the circular economy model. This means we prioritize reducing waste and maximizing resource utilization throughout our operations."
          captionAlign="text-center"
        />

        {/**Second Card */}
        <Card
          bgColor="#FAFEFF"
          imageSrc={bottleIcon}
          imageWidth="w-[42.607px]"
          imageHeight="h-[100px]"
          imageCaption="We incorporate recycled materials into our products to implement efficient waste management practices, and significantly reduce our environmental impact."
          captionAlign="text-center"
        />

        {/**Third Card */}
        <Card
          bgColor="#FAFEFF"
          imageSrc={trashIcon}
          imageWidth="w-[76.212px]"
          imageHeight="h-[90px]"
          imageCaption="Reinnova Green Ecoplast transforms plastic waste into valuable resources, giving plastic a second life, diverting tons of plastic from harming the environment "
          captionAlign="text-center"
        />

        {/**fourth Card */}
        <Card
          bgColor="#FAFEFF"
          imageSrc={roofIcon}
          imageWidth="w-[76.212px]"
          imageHeight="h-[90px]"
          imageCaption="Our subsidiaries Reinnova Green Packaging and First Aluminum Nigeria Limited utilize a significant amount of recycled aluminum in their products."
          captionAlign="text-center"
        />
      </div>
    </div>
  );
};

{
  /**This is where the contents of the subsidiary section on the home page is stored */
}
export const SubsidiariesCard = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full px-6 flex flex-col gap-6 mt-14 py-8 bg-center bg-cover" style={{backgroundImage: `url(${watermarkBG})`}}>
      {/* the Subsidiaries Card content goes here */}
      <div className="flex flex-col gap-1">
        <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[40px]">
          Our Commitment to Sustainability
        </h2>
        <p className="text-center text-[#35383F] text-xs md:text-xl font-[RocknRollOne]">
          Creating a Greener Future Through Circular Economy Practices
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[32px]">
        <Card
          bgColor="bg-[#E9F9FF]"
          headerText="Reinnova Green Packaging"
          imageSrc={toothbrush}
          imageWidth="w-full"
          imageHeight="h-[auto]"
          imageCaption="Manufactures high-quality and innovative packaging solutions using recycled aluminium and sustainable laminate materials for various industries, including pharmaceutical, oral hygiene and body care"
          captionAlign="text-left"
          buttonText="Learn More"
          onButtonClick={() => navigate("/about-us")}
        />
        <Card
          bgColor="bg-[#E9F9FF]"
          headerText="Reinnova Green Ecoplast"
          imageSrc={spoons}
          imageWidth="w-full"
          imageHeight="h-[auto]"
          imageCaption="Provides a solution for plastic waste by transforming it into valuable resources. They collect plastic waste, meticulously sort it, and reprocess it into high-quality plastic flakes and pellets for use in new products."
          captionAlign="text-left"
          buttonText="Learn More"
          onButtonClick={() => navigate("/about-us")}
        />
        <Card
          bgColor="bg-[#E9F9FF]"
          headerText="First Aluminum Nigeria Limited"
          imageSrc={aluminium}
          imageWidth="w-full"
          imageHeight="h-[auto]"
          imageCaption="Offers exceptional aluminum roofing solutions while keeping sustainability at the forefront. They utilize recycled aluminum roofing sheets, reducing reliance on virgin materials and  lowering environmental impact."
          captionAlign="text-left"
          buttonText="Learn More"
          onButtonClick={() => navigate("/about-us")}
        />
      </div>
    </div>
  );
};

{
  /**This is where the contents of the "Why Choose Reinnova Green" section on the home page is stored */
}

export const WhyChooseUsCard = () => {
  return (
    <div className="w-full flex flex-col gap-8 px-3 py-8 mt-8">
      {/* the Why Choose Us Card content goes here */}
      <div className="flex flex-col gap-1">
        <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[40px]">
          Why Choose Reinnova Green
        </h2>
        <p className="text-center text-[#35383F] text-xs md:text-xl font-[RocknRollOne]">
          Partnering with Reinnova Green: A Sustainable Choice for Your Business
          and the Environment
        </p>
      </div>

      <ul className="list-disc flex flex-col gap-4">
        <li>
          <span className="font-semibold text-[#05232E] font-[poppins] text-sm md:text-[16px]">
            Environmentally Friendly Products:{" "}
          </span>
          <span className="font-[400] text-[#05232E] font-[poppins] text-xs md:text-[14px]">
            We prioritize using recycled materials and sustainable practices
            throughout our production processes, minimizing environmental
            impact.
          </span>
        </li>
        <li>
          <span className="font-semibold text-[#05232E] font-[poppins] text-sm md:text-[16px]">
            Reduced Environmental Footprint:{" "}
          </span>
          <span className="font-[400] text-[#05232E] font-[poppins] text-xs md:text-[14px]">
            Our commitment to circular economy principles translates to a lower
            carbon footprint and less waste generation.
          </span>
        </li>
        <li>
          <span className="font-semibold text-[#05232E] font-[poppins] text-sm md:text-[16px]">
            Superior Quality and Performance:{" "}
          </span>
          <span className="font-[400] text-[#05232E] font-[poppins] text-xs md:text-[14px]">
            We are dedicated to providing exceptional quality products that meet
            the highest standards for functionality and durability. Our
            commitment to quality goes beyond materials; it encompasses
            meticulous production processes and rigorous quality control checks.
          </span>
        </li>
        <li>
          <span className="font-semibold text-[#05232E] font-[poppins] text-sm md:text-[16px]">
            Exceptional Customer Service:{" "}
          </span>
          <span className="font-[400] text-[#05232E] font-[poppins] text-xs md:text-[14px]">
            We understand the importance of building strong relationships with
            our clients. Our dedicated team is committed to providing
            exceptional customer service, ensuring a seamless and positive
            experience throughout the entire process.
          </span>
        </li>

        <li>
          <span className="font-semibold text-[#05232E] font-[poppins] text-sm md:text-[16px]">
            Sustainable Solutions for a Greener Tomorrow:{" "}
          </span>
          <span className="font-[400] text-[#05232E] font-[poppins] text-xs md:text-[14px]">
            By partnering with Reinnova Green, you&apos;re not only fulfilling your
            business needs but also contributing to a more sustainable future.
            Together, we can create a positive impact on the environment for
            generations to come.
          </span>
        </li>
      </ul>
    </div>
  );
};
