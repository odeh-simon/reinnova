import Card from "../../../../components/Card";
import jericans from "../../../../assets/images/Subsidiary images/green ecoplast/jericans.png";
import cups from "../../../../assets/images/Subsidiary images/green ecoplast/cups.png";
import chairs from "../../../../assets/images/Subsidiary images/green ecoplast/chairs.png";
import bottles from "../../../../assets/images/Subsidiary images/green ecoplast/bottles.png";
import glasses from "../../../../assets/images/Subsidiary images/green ecoplast/glasses.png";
import globe from "../../../../assets/images/Subsidiary images/green ecoplast/globe.png";
import bin from "../../../../assets/images/Subsidiary images/green ecoplast/bin.png";
import openBottles from "../../../../assets/images/Subsidiary images/green ecoplast/open-bottles.png";
import packOfCans from "../../../../assets/images/Subsidiary images/green ecoplast/pack-of-cans.png";
import spoons from "../../../../assets/images/Subsidiary images/green ecoplast/spoons.png";

export const RecyclingProducts = () => {
  return (
    <>
      <div>
        <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[30px] mb-8">
          Our Plastic Recycling Products
        </h2>

        {/**Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[32px]">
          <Card
            headerText="Cleaning Packaging"
            bgColor="#FAFEFF"
            imageSrc={jericans}
            imageWidth="w-full"
            imageHeight="h-[auto]"
            imageCaption="At Reinnova Green, we embrace the circular economy model. This means we prioritize reducing waste and maximizing resource utilization throughout our operations."
            captionAlign="text-left"
          />
          <Card
            headerText="Cleaning Packaging"
            bgColor="#FAFEFF"
            imageSrc={cups}
            imageWidth="w-full"
            imageHeight="h-[auto]"
            imageCaption="At Reinnova Green, we embrace the circular economy model. This means we prioritize reducing waste and maximizing resource utilization throughout our operations."
            captionAlign="text-left"
          />
          <Card
            headerText="Cleaning Packaging"
            bgColor="#FAFEFF"
            imageSrc={chairs}
            imageWidth="w-full"
            imageHeight="h-[auto]"
            imageCaption="At Reinnova Green, we embrace the circular economy model. This means we prioritize reducing waste and maximizing resource utilization throughout our operations."
            captionAlign="text-left"
          />
        </div>
      </div>
    </>
  );
};
export const RecyclingProcess = () => {
    return (
      <div>
        <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[30px] mb-8">
          Our Plastic Recycling Process
        </h2>
  
        {/** Image Cards */}
        <div className="overflow-x-auto">
          <div className="flex gap-[24px]">
            {/* Card 1 */}
            <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
              <Card
                steps="1:"
                headerText="Plastic Waste Collection"
                bgColor="#FAFEFF"
                imageSrc={packOfCans}
                imageWidth="w-full"
                imageHeight="h-auto"
                imageCaption="We offer various options for plastic waste collection, catering to businesses, households, and recycling initiatives."
                captionAlign="text-left"
                headerAlign="text-left"
              />
            </div>
  
            {/* Card 2 */}
            <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 py-4">
              <Card
                steps="2:"
                headerText="Sorting and Segregation"
                bgColor="#FAFEFF"
                imageSrc={bottles}
                imageWidth="w-full"
                imageHeight="h-auto"
                imageCaption="The plastic waste undergoes a rigorous sorting process to separate different plastic types ensuring optimal recycling quality."
                captionAlign="text-left"
                headerAlign="text-left"
              />
            </div>
  
            {/* Card 3 */}
            <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
              <Card
                steps="3:"
                headerText="Cleaning and Washing"
                bgColor="#FAFEFF"
                imageSrc={openBottles}
                imageWidth="w-full"
                imageHeight="h-auto"
                imageCaption="The sorted plastic is meticulously washed and cleaned to remove any impurities or contaminants to ensure quality."
                captionAlign="text-left"
                headerAlign="text-left"
              />
            </div>
  
            {/* Card 4 */}
            <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
              <Card
                steps="4:"
                headerText="Size Reduction"
                bgColor="#FAFEFF"
                imageSrc={glasses}
                imageWidth="w-full"
                imageHeight="h-auto"
                imageCaption="The clean plastic is shredded into small flakes or pellets suitable for further processing."
                captionAlign="text-left"
                headerAlign="text-left"
              />
            </div>
  
            {/* Card 5 */}
            <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
              <Card
                steps="5:"
                headerText="Quality Control"
                bgColor="#FAFEFF"
                imageSrc={glasses}
                imageWidth="w-full"
                imageHeight="h-auto"
                imageCaption="The reprocessed plastic flakes and pellets undergo stringent quality control checks to ensure they meet our high standards."
                captionAlign="text-left"
                headerAlign="text-left"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
{/**Benefits of Plastic Packaging */}

export const BenefitsOfPlasticPackaging = () => {
    return (
      <>
        <div>
          <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[30px] mb-8">
            The Benefits of Plastic Packaging
          </h2>
  
          {/**Image Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[32px]">
            <Card
              headerText="Reduced Environmental Impact"
              bgColor="#FAFEFF"
              imageSrc={globe}
              imageWidth="w-full"
              imageHeight="h-[auto]"
              imageCaption="Plastic recycling significantly reduces our reliance on virgin plastic production, which has a high environmental cost associated with energy consumption and resource extraction."
              captionAlign="text-left"
              headerAlign="text-left"
            />
            <Card
              headerText="Diverted Waste from Landfills"
              bgColor="#FAFEFF"
              imageSrc={bin}
              imageWidth="w-full"
              imageHeight="h-[auto]"
              imageCaption="By recycling plastic waste, we divert tons of plastic from landfills, preventing environmental pollution and promoting a cleaner future."
              captionAlign="text-left"
              headerAlign="text-left"
            />
            <Card
              headerText="Creation of New Products"
              bgColor="#FAFEFF"
              imageSrc={spoons}
              imageWidth="w-full"
              imageHeight="h-[auto]"
              imageCaption=" Recycled plastic can be used to manufacture a vast array of new plastic products, promoting a circular economy for plastic."
              captionAlign="text-left"
              headerAlign="text-left"
            />
          </div>
        </div>
      </>
    );
  };
  
