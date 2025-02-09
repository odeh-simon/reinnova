import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import backgroundImage from "../../assets/images/About images/aboutBG.png";
import missionImage from "../../assets/images/About images/mission.png";
import visionImage from "../../assets/images/About images/vision.png";
import Footer from "../../components/Footer";
import { useEffect } from "react";

export default function About() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header>
        <NavBar />
        <Header
          showSubscribeButton={false}
          showHomeButtons={false}
          backgroundImage={backgroundImage}
          headerText="About Us"
          middleText="Building a Sustainable Future, Together"
          descriptionText="We are a Nigerian company dedicated to sustainability by creating innovative solutions for eco-friendly packaging, recycled plastic management and aluminium roofing."
        />
      </header>

      <div className="container mx-auto px-4 lg:px-8 mt-8">
        <div className="mb-10 flex flex-col gap-3" data-aos="fade-up">
          <p className="text-[#35383F] font-[poppins] text-xs md:text-sm">
            Reinnova Green Holding Company is a visionary force for
            sustainability in Nigeria, established with a singular mission: to
            empower businesses and individuals to adopt environmentally
            responsible practices and contribute to a greener future. We achieve
            this mission through our network of innovative subsidiaries, each
            dedicated to tackling a specific challenge within the sustainability
            landscape.
          </p>
          <p className="text-[#35383F] font-[poppins] text-xs md:text-sm">
            Our journey began with a deep concern for the growing environmental
            issues facing Nigeria and the world. We recognized the urgent need
            for innovative solutions that promote responsible resource
            management, minimize waste generation, and create a circular
            economy. Fueled by this passion for environmental stewardship,
            Reinnova Green Holding Company was born.
          </p>
        </div>
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-sm md:text-xl font-semibold text-[#016E97] font-[poppins]">Our Mission</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start" data-aos="fade-up">
          {/* Mission Image */}
          <div>
            <img
              src={missionImage}
              alt="Our Mission"
              className="w-full rounded-lg h-fit object-cover shadow-lg"
            />
          </div>
          {/* Mission Content */}
          <div>
            <ul className="list-disc px-3 flex flex-col gap-3">
              <li className="text-[#030B1E] font-[poppins] text-sm md:text-[16px]">
                <strong>Empower Sustainable Practices:</strong> We aim to equip
                businesses and individuals with the tools and knowledge
                necessary to integrate sustainable practices into their
                operations and lifestyles.
              </li>
              <li className="text-[#030B1E] font-[poppins] text-sm md:text-[16px]">
                <strong>Minimize Environmental Impact:</strong> Our core mission
                revolves around reducing the environmental footprint of human
                activities through responsible resource management and waste
                reduction strategies.
              </li>
              <li className="text-[#030B1E] font-[poppins] text-sm md:text-[16px]">
                <strong>Foster a Circular Economy:</strong> We envision a
                circular economy where resources are used efficiently, waste is
                minimized, and materials are continuously cycled back into
                productive use.
              </li>
              <li className="text-[#030B1E] font-[poppins] text-sm md:text-[16px]">
                <strong>Contribute to a Greener Future:</strong> By promoting
                sustainable practices, we strive to create a lasting positive
                impact on the environment and ensure a healthy planet for future
                generations.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="container mx-auto px-4 lg:px-8 mt-12">
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-lg md:text-3xl font-semibold text-[#016E97] font-[poppins]">Our Vision</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start" data-aos="fade-up">
          {/* Vision Content */}
          <div>
            <ul className="list-disc px-3 space-y-2 text-gray-700">
              <li className="text-[#030B1E] font-[poppins] text-sm md:text-[16px]">
                <strong>Leading Sustainability Solutions Provider:</strong> We
                aspire to become the preeminent provider of sustainable
                solutions in Nigeria, offering a comprehensive range of services
                and products that empower others to embrace a greener future.
              </li>
              <li className="text-[#030B1E] font-[poppins] text-sm md:text-[16px]">
                <strong>Inspiring Sustainability:</strong> We aim to serve as an
                inspiration for businesses and individuals, encouraging them to
                adopt sustainable practices and contribute to positive
                environmental change.
              </li>
              <li className="text-[#030B1E] font-[poppins] text-sm md:text-[16px]">
                <strong>Thriving Communities in a Healthy Environment:</strong>{" "}
                Our vision is for a nation where communities can flourish in a
                clean and healthy environment, free from the detrimental effects
                of environmental pollution and resource depletion.
              </li>
              <li className="text-[#030B1E] font-[poppins] text-sm md:text-[16px]">
                <strong>Innovation for a Greener Tomorrow: </strong>We believe
                in the power of innovation to drive progress towards a more
                sustainable future. Our vision emphasizes continuous research
                and development to discover new and improved solutions for
                environmental challenges.
              </li>
            </ul>
          </div>
          {/* Vision Image */}
          <div>
            <img
              src={visionImage}
              alt="Our Vision"
              className="w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}