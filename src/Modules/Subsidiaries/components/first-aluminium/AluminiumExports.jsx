import Card from "../../../../components/Card";
import constructionImage from '../../../../assets/images/Subsidiary images/first aluminium/construction.png';
import industrialApplication from '../../../../assets/images/Subsidiary images/first aluminium/industrial-application.png';
import customSolution from '../../../../assets/images/Subsidiary images/first aluminium/custom-solution.png';
import corrosion from '../../../../assets/images/Subsidiary images/first aluminium/corrosion.png';
import maleable from '../../../../assets/images/Subsidiary images/first aluminium/maleable.png';
import melting from '../../../../assets/images/Subsidiary images/first aluminium/melting.png';
import preparation from '../../../../assets/images/Subsidiary images/first aluminium/preparation.png';
import profiles from '../../../../assets/images/Subsidiary images/first aluminium/profiles.png';
import sustainable from '../../../../assets/images/Subsidiary images/first aluminium/sustainable.png';
import tube from '../../../../assets/images/Subsidiary images/first aluminium/tube.png';

export const AluminiumProducts = () => {
  return (
    <>
      <div>
        <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[30px] mb-8">
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
      <div>
        <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[30px] mb-8">
            Our Aluminium Process
        </h2>
  
        {/** Image Cards */}
        <div className="overflow-x-auto">
          <div className="flex gap-[24px]">
            {/* Card 1 */}
            <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
              <Card
                steps="1:"
                headerText="Sourcing Recycled Aluminium"
                bgColor="#FAFEFF"
                imageSrc={profiles}
                imageWidth="w-[full]"
                imageHeight="h-auto"
                imageCaption="We source high-quality recycled aluminium from reputable suppliers, ensuring it meets our strict quality standards."
                captionAlign="text-left"
                headerAlign="text-left"
              />
            </div>
  
            {/* Card 2 */}
            <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 py-4">
              <Card
                steps="2:"
                headerText="Aluminium Preparation"
                bgColor="#FAFEFF"
                imageSrc={preparation}
                imageWidth="w-full"
                imageHeight="h-auto"
                imageCaption="The recycled aluminium undergoes a meticulous cleaning and sorting process to remove any impurities so that it can be ready for use."
                captionAlign="text-left"
                headerAlign="text-left"
              />
            </div>
  
            {/* Card 3 */}
            <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
              <Card
                steps="3:"
                headerText="Melting and Shaping"
                bgColor="#FAFEFF"
                imageSrc={melting}
                imageWidth="w-full"
                imageHeight="h-auto"
                imageCaption="The cleaned aluminium is melted in energy-efficient furnaces and then shaped into sheets or coils suitable for tube production."
                captionAlign="text-left"
                headerAlign="text-left"
              />
            </div>
  
            {/* Card 4 */}
            <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
              <Card
                steps="4:"
                headerText="Tube Formation"
                bgColor="#FAFEFF"
                imageSrc={tube}
                imageWidth="w-full"
                imageHeight="h-auto"
                imageCaption="The aluminium sheets are fed into specialized machines that form them into the desired tube shapes and sizes."
                captionAlign="text-left"
                headerAlign="text-left"
              />
            </div>
  
            {/* Card 5 */}
            <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
              <Card
                steps="5:"
                headerText="Decoration and Printing"
                bgColor="#FAFEFF"
                imageSrc={tube}
                imageWidth="w-full"
                imageHeight="h-auto"
                imageCaption="Our state-of-the-art printing technology allows for high-quality, printing on the tubes to meet your specific brand requirements."
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

export const BenefitsOfAluminium = () => {
    return (
      <>
        <div>
          <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[30px] mb-8">
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
  
