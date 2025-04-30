import Card from "../../../../components/Card";
import FirstAluminiunCard from "./FirstAluminiumCard";
import ProcessCard from "./ProcessCard";

const constructionImage =
  "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739294344/construction_iq9xm4.png";
const industrialApplication =
  "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739294357/industrial-application_yatmgz.png";
const customSolution =
  "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739294353/custom-solution_cpn8ks.png";
const corrosion =
  "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739294348/corrosion_tpzfrg.png";
const maleable =
  "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739294361/maleable_lclovg.png";
const preparation =
  "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739294369/preparation_cdmzlh.png";
const sustainable =
  "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739294377/sustainable_mmvjbh.png";

export const AluminiumProducts = () => {
  return (
    <>
      <div>
        <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] md:text-[30px]">
          Our Aluminium Products
        </h2>

        {/**Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[32px]">
          <Card
            headerText="Building and Construction"
            bgColor="#FAFEFF"
            imageSrc={constructionImage}
            imageWidth="w-full"
            imageHeight="h-[auto]"
            imageCaption="We manufacture high-quality aluminium sheets for roofing, cladding, and architectural applications. Our products are known for their durability, weather resistance, and aesthetic appeal."
            captionAlign="text-left"
          />
          <Card
            headerText="Industrial Applications"
            bgColor="#FAFEFF"
            imageSrc={industrialApplication}
            imageWidth="w-full"
            imageHeight="h-[auto]"
            imageCaption="We offer a variety of aluminium coils and circles suitable for diverse industrial uses, including heat exchangers, automotive parts, and food packaging, Known for excellent strength-to-weight ratio, formability, and recyclability."
            captionAlign="text-left"
          />
          <Card
            headerText="Custom Solutions"
            bgColor="#FAFEFF"
            imageSrc={customSolution}
            imageWidth="w-full"
            imageHeight="h-[auto]"
            imageCaption="We understand that every project has unique requirements. Our team is dedicated to working closely with clients to develop customized aluminium solutions that meet their specific needs."
            captionAlign="text-left"
          />
        </div>
      </div>
    </>
  );
};
export const AluminiumProcess = () => {
  return (
    <div className="w-full">
      <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] md:text-[30px]">
        Our Aluminium Process
      </h2>
      <p className="text-[#05232E] text-center font-[RocknRollOne] text-sm md:text-lg mb-6">
        Step-by-step conversion of aluminium slugs into printed pharmaceutical
        tubes.
      </p>

      {/** Image Cards */}
      <div className="overflow-x-auto bg-[#AEB2B3] py-[48px]">
        <div className="flex gap-[40px] w-[90%] lg:w-[80%] mx-auto">
          {/* Card 1 */}
          <div className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/4">
            <ProcessCard
              step="1:"
              headerText="Slug Preparation"
              bodyText="99.7%-pure aluminium slugs that are precisely weighed, lubricated and queued for extrusion."
            />
          </div>
          <div className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/4">
            <ProcessCard
              step="2:"
              headerText="Cold Impact Extrusion"
              bodyText="Each slug is struck once by a punch inside a steel die, forcing the metal to flow upward and outward in a single stroke to form a seamless tube body with an open base and a closed shoulder. This “back-impact” process also work-hardens the aluminium and extrudes it to form a tube."
            />
          </div>
          <div className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/4">
            <ProcessCard
              step="3:"
              headerText="Trimming, Heading, Threading"
              bodyText="The rough tube is automatically trimmed to length, the neck is reamed, and threads or a crimp profile for the cap are rolled or cut. These operations give uniform mouth dimensions essential for accurate dosing closures."
            />
          </div>
          <div className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/4 pr-4">
            <ProcessCard
              step="4:"
              headerText="Annealing (softening)"
              bodyText="Work-hardened tubes pass through a continuous oven and slow-cool to restore ductility, making the walls collapsible and ready for further forming."
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

export const BenefitsOfAluminium = () => {
  return (
    <>
      <div>
        <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] md:text-[30px] mb-8">
          The Benefits of Aluminum
        </h2>

        {/**Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[32px]">
          <Card
            headerText="Lightweight and Durable"
            bgColor="#FAFEFF"
            imageSrc={preparation}
            imageWidth="w-full"
            imageHeight="h-[auto]"
            imageCaption="Aluminium offers exceptional strength-to-weight ratio, making it ideal for applications requiring both lightweight construction and long-lasting performance."
            captionAlign="text-center"
            headerAlign="text-center"
          />
          <Card
            headerText="Malleable and Formability"
            bgColor="#FAFEFF"
            imageSrc={maleable}
            imageWidth="w-full"
            imageHeight="h-[auto]"
            imageCaption="Aluminium's exceptional formability allows it to be shaped into various configurations, making it versatile for diverse applications for different purposes."
            captionAlign="text-center"
            headerAlign="text-center"
          />
          <Card
            headerText="Sustainable Choice"
            bgColor="#FAFEFF"
            imageSrc={sustainable}
            imageWidth="w-full"
            imageHeight="h-[auto]"
            imageCaption="Aluminium is one of the most recyclable metals globally. We prioritize using recycled aluminium in our production processes minimizing environmental impact."
            captionAlign="text-center"
            headerAlign="text-center"
          />
          <Card
            headerText="Corrosion Resistan"
            bgColor="#FAFEFF"
            imageSrc={corrosion}
            imageWidth="w-full"
            imageHeight="h-[auto]"
            imageCaption="Aluminium naturally forms a protective oxide layer, making it highly resistant to corrosion and ideal for various environmental conditions."
            captionAlign="text-center"
            headerAlign="text-center"
          />
        </div>
      </div>
    </>
  );
};

export const WhyFirstAluminium = () => {
  return (
    <>
      <div>
        <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] md:text-[30px] mb-8">
          Why First Aluminium?
        </h2>

        {/**Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[32px]">
          <FirstAluminiunCard
            header="Comprehensive Tube Solutions"
            description="From laminate toothpaste tubes to aluminium pharmaceutical tubes and seamless cosmetic tubes, First Aluminium covers the full spectrum of FMCG packaging needs—one supplier, every format."
          />
          <FirstAluminiunCard
            header="Trusted by Leading FMCG Brands"
            description="Household names in personal care and healthcare choose us because our packaging safeguards product integrity and amplifies on-shelf appeal."
          />
          <FirstAluminiunCard
            header="Decades of Manufacturing Excellence"
            description="Years of experience have refined our processes, ensuring reliable lead times, consistent quality, and deep technical know-how in tube production."
          />
          <FirstAluminiunCard
            header="Cutting-Edge Quality Assurance"
            description="State-of-the-art equipment and rigorous QC protocols deliver flawless finishes, precise dimensions, and barrier performance you can count on—every run, every time."
          />
        </div>
      </div>
    </>
  );
};
