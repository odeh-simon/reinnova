import Card from "../../../../components/Card";
import CommitmentCard from "./CommitmentCard";
import RecyclingCard from "./RecyclingCard";

const bottles =
  "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739292833/bottles_ndtasv.png";
const glasses =
  "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739292843/glasses_ds6wrr.png";
const globe =
  "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739292846/globe_xbh2ub.png";
const bin =
  "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739292832/bin_lntzot.png";
const openBottles =
  "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739292853/open-bottles_kg5of4.png";
const packOfCans =
  "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739292857/pack-of-cans_hdl2e5.png";
const spoons =
  "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739292860/spoons_ui0gne.png";
const qualityControl =
  "https://res.cloudinary.com/dsnz8adqi/image/upload/v1746630467/quality-control_mrrewb.png";
const repurposing =
  "https://res.cloudinary.com/dsnz8adqi/image/upload/v1746630467/repurposing_r3w03f.png";

export const CommitmentToQuality = () => {
  const processingPower =
    "https://res.cloudinary.com/dsnz8adqi/image/upload/v1743645310/processing-power_pjxeel.png";
  const globalReach =
    "https://res.cloudinary.com/dsnz8adqi/image/upload/v1743646580/global-reach_lopx33.png";
  const technology =
    "https://res.cloudinary.com/dsnz8adqi/image/upload/v1743645310/technology_lymf6q.png";

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="w-[90%] lg:w-[70%] mx-auto">
          <h2 className="text-center text-[#016E97] mb-6 font-[poppins] font-semibold text-[16px] md:text-[30px]">
            Commitment to Quality
          </h2>
          <p className="text-[#35383F] font-[poppins] text-sm md:text-base md:leading-[40px]">
            Strict quality checks are conducted at every step of our process,
            ensuring that{" "}
            <span className="font-medium">
              only the finest pellets and flakes
            </span>{" "}
            reach our clients. Whether for <strong>local use or export,</strong>{" "}
            our products drive sustainability while supporting industries in
            creating eco-friendly packaging solutions.
          </p>
        </div>

        {/**Image Cards */}
        <session className="bg-[#4C9AB6] py-[60px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] lg:w-[80%] mx-auto">
            <CommitmentCard
              header="Processing Power"
              imageSrc={processingPower}
              description="40+ tonnes of PET waste crushed and processed into flakes daily. 20+ tonnes of PP/HDPE waste transformed into high-quality pellets."
            />
            <CommitmentCard
              header="Global Reach"
              imageSrc={globalReach}
              description="Since 2019, we have processed and exported over 25,000 MT of recycled plastic materials to Europe, Asia, and the USA."
            />
            <CommitmentCard
              header="State-of-the-Art Sorter"
              imageSrc={technology}
              description="Our advanced polymer sorter ensures purity by removing all impurities, guaranteeing premium quality."
            />
          </div>
        </session>
      </div>
    </>
  );
};
export const RecyclingProducts = () => {
  const petFlakes =
    "https://res.cloudinary.com/dsnz8adqi/image/upload/v1744028349/pet-flakes_bd7am4.png";
  const pp =
    "https://res.cloudinary.com/dsnz8adqi/image/upload/v1744028914/pp_fyabk5.png";
  const ldpe =
    "https://res.cloudinary.com/dsnz8adqi/image/upload/v1743647390/ldpe_ufn1bg.png";

  return (
    <>
      <div>
        <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] md:text-[30px] mb-8">
          Our Plastic Recycling Products
        </h2>

        {/**Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] lg:gap-12">
          <RecyclingCard
            header="PET Flakes"
            imageSrc={petFlakes}
            description="We produce premium packaging solutions specifically designed for cleaning products. Our packaging is recognized for its strength, resistance to moisture, and sleek design, ensuring your products stand out on the shelves."
          />
          <RecyclingCard
            header="PP/PE"
            imageSrc={pp}
            description="We provide a wide selection of plastic kitchen products, including durable spoons, colorful plates, and versatile cups, perfect for everyday use. Our items are designed for convenience and are lightweight."
          />
          <RecyclingCard
            header="LDPE/HDPE"
            imageSrc={ldpe}
            description="We recognize that each home has its own distinct style and needs. Our team is committed to collaborating with clients to create tailored plastic solutions, including chairs, tables, and food flasks, that perfectly fit their lifestyle."
          />
        </div>
      </div>
    </>
  );
};
export const RecyclingProcess = () => {
  return (
    <div>
      <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] md:text-[30px] md:mb-8">
        Our Plastic Recycling Process
      </h2>

      {/** Image Cards */}
      <div className="overflow-x-auto">
        <div className="flex gap-[24px]">
          {/* Card 1 */}
          <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 h-[400px]">
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
          <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 h-[400px]">
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
          <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 h-[400px]">
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
          <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 h-[400px]">
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
          <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 h-[400px]">
            <Card
              steps="5:"
              headerText="Quality Control"
              bgColor="#FAFEFF"
              imageSrc={qualityControl}
              imageWidth="w-full"
              imageHeight="h-auto"
              imageCaption="The reprocessed plastic flakes and pellets undergo stringent quality control checks to ensure they meet our high standards."
              captionAlign="text-left"
              headerAlign="text-left"
            />
          </div>

          {/* Card 6 */}
          <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 h-[400px]">
            <Card
              steps="6:"
              headerText="Repurposing/Reintroduction"
              bgColor="#FAFEFF"
              imageSrc={repurposing}
              imageWidth="w-full"
              imageHeight="h-auto"
              imageCaption="The high quality recycled plastic is then ready to be used in the production of new plastic products, reducing reliance on virgin plastic."
              captionAlign="text-left"
              headerAlign="text-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /**Benefits of Plastic Packaging */
}

export const BenefitsOfPlasticPackaging = () => {
  return (
    <>
      <div>
        <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] md:text-[30px] md:mb-8">
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
