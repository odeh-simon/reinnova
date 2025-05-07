import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import Divider from "../../components/Divider";
import SocialIcons from "../../components/socialIcons";
import OurFocus from "./components/OurFocus";

export default function About() {
  const backgroundImage = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739295202/aboutBG_ov8lgj.png";
  const ourFutureBg = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1746020292/aboutBg_izfrlo.png";
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bgImageStyle = {
    backgroundImage: `url(${ourFutureBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

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

      <main className="px-4 md:px-10 py-[50px] lg:py-[100px] bg-[#EFF8FA]">
        <div className="flex flex-col gap-[50px] lg:gap-[100px] w-full lg:w-[70%] mx-auto">
          <div
            className="px-6 py-4 lg:px-[100px] lg:py-[50px] flex flex-col gap-6 rounded-[28px] bg-white shadow-custom"
            data-aos="fade-up"
          >
            <h1 className="font-semibold text-[#016E97] text-lg md:text-4xl font-[poppins]">
              Our Legacy:{" "}
              <span className="text-[#35383F] font-[RocknRollOne] font-normal text-base md:text-[24px]">
                A Tradition of Industrial
              </span>
            </h1>
            <p className="text-[#35383F] font-[poppins] text-xs md:text-sm">
              Our story began in 1959 and rapidly grew to become one of the
              country&apos;s foremost industrial companies. Over the years, we
              became a household name, dominating the market with our
              <span className="font-bold">
                high-quality aluminium roofing sheets.
              </span>{" "}
              By 1992, we were publicly listed with over 12,730 shareholders,
              cementing our place as an industry giant.
            </p>
            <p className="text-[#35383F] font-[poppins] text-xs md:text-sm">
              As market demands evolved, so did we. Expanding beyond aluminium,
              we ventured into{" "}
              <span className="font-bold">packaging solutions,</span>{" "}
              manufacturing aluminium and laminate tubes for pharmaceutical,
              homecare, and personal care products. Our clients included leading
              brands such as
              <span className="font-bold">
                SC Johnson, Colgate, Unilever, and Dabur,
              </span>{" "}
              solidifying our reputation for world-class quality and innovation.
            </p>
          </div>

          <div
            className="px-6 py-4 lg:px-[100px] lg:py-[50px] flex flex-col gap-3 rounded-[28px] bg-white shadow-custom"
            data-aos="fade-up"
          >
            <h1 className="font-semibold text-[#016E97] text-lg md:text-4xl font-[poppins]">
              Our Transformation:{" "}
              <span className="text-[#35383F] font-[RocknRollOne] font-normal text-base md:text-[20px]">
                Pioneering a Green Revolution
              </span>
            </h1>
            <p className="text-[#35383F] font-[poppins] text-xs md:text-sm">
              In 2019, recognizing the urgent need for{" "}
              <span className="font-bold">
                sustainable industrial solutions,
              </span>{" "}
              we pivoted toward{" "}
              <span className="font-bold">
                plastic recycling and environmentally friendly manufacturing.
              </span>{" "}
              This shift led to the birth of Reinnova Green Holding Company, a
              dynamic enterprise committed to building a circular economy
              through{" "}
              <span className="font-bold">
                sustainable packaging, recycling, and aluminium solutions.
              </span>
            </p>
          </div>

          <div data-aos="fade-up" className="lg:px-[100px]">
            <h2 className="text-sm md:text-lg font-[poppins] text-[#35383F]">
              Today, our group consists of three specialized subsidiaries:
            </h2>
            <ul className="list-disc list-outside ml-5 text-[#35383F] font-[poppins] text-sm md:text-lg flex flex-col gap-5">
              <li>
                <strong>ReInnova Green Packaging: </strong>Nigeria&apos;s
                leading manufacturer of collapsible aluminium tubes, laminate
                tubes, and seamless plastic packaging for pharmaceuticals, oral
                hygiene, and homecare industries.
              </li>
              <li>
                <strong>Reinnova Green Ecoplast: </strong>A driving force in
                plastic recycling, we convert plastic waste into high-quality
                PET flakes, PP/PE pellets, and HDPE resins, reducing dependence
                on virgin plastics and promoting sustainability.
              </li>
              <li>
                <strong>First Aluminium Nigeria Limited: </strong>
                Our legacy business continues to deliver high-performance
                aluminium roofing solutions, utilizing recycled aluminium for
                enhanced durability and environmental impact reduction.
              </li>
            </ul>
          </div>
        </div>
      </main>
      {/* Second container section */}
      <section className="flex flex-col gap-10 lg:gap-[100px]">

        <section className="flex flex-col gap-6 lg:gap-[100px]  w-full">
          <div
            data-aos="fade-up"
            style={bgImageStyle}
            className="w-full h-[fit] py-8 px-5 lg:py-[50px]"
          >
            <div className="w-full lg:w-[80%] lg:px-[100px] mx-auto">
              <div className="text-center">
                <h2 className="text-white font-[poppins] text-base md:text-[40px] font-semibold">
                  Our Future
                </h2>
                <h3 className="text-white font-[RocknRollOne] text-sm md:text-lg">
                  Engineering a Sustainable Tomorrow
                </h3>
              </div>
              <div>
                <p className="text-[white] font-[poppins] text-sm lg:text-[18px] lg:leading-[32px] mt-3">
                  With a{" "}
                  <strong>significant investment in green technologies,</strong>{" "}
                  ReInnova Green is set to become one of{" "}
                  <strong>
                    Africa&apos;s leading and largest sustainable manufacturing
                    enterprises.
                  </strong>
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-[40px] md:w-[90%] mx-auto items-start mt-12">
                <p className="text-white font-[poppins] text-sm md:text-lg">
                  We are focused on:
                </p>
                <OurFocus />
              </div>
            </div>
          </div>
        </section>

        <section
          className="flex flex-col items-center justify-center w-full"
          data-aos="fade-up"
        >
          <div className="w-[80%] md:w-[50%] mx-auto mb-10 md:mb-[60px]">
            <Divider />
          </div>
          <p className="text-center w-[80%] md:w-[504px] font-[poppins] text-[#35383F] text-lg md:text-xl lg:text-3xl mb-4">
            &quot;Through our dedicated subsidiaries and unwavering commitment
            to these core values,{" "}
            <strong>ReInnova Green Holding Company </strong>strives to be a
            catalyst for a sustainable future in Nigeria. We invite you to join
            us on this journey as we work together to create a cleaner,
            healthier, and more prosperous nation for generations to come.&quot;
          </p>

          <div className="w-[80%] md:w-[50%] mx-auto mt-10 md:mt-[60px]">
            <Divider />
          </div>
        </section>

        <section
          className="w-[90%] lg:w-[80%] mx-auto border-[4px] border-[#016E97] rounded-[10px] p-4 flex flex-col lg:flex-row items-start lg:items-center gap-4"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-2">
            <span className="w-[20px] h-[20px] rounded-[10px] border-[#4FAE49] bg-[#4FAE49]"></span>
            <p className="text-[#016E97] font-[poppins] font-semibold text-base ">
              <span className="font-normal">Driving </span>Nigeria&apos;s{" "}
              <span className="text-[#4FAE49]">Green</span> Economy
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-[20px] h-[20px] rounded-[10px] border-[#4FAE49] bg-[#4FAE49]"></span>
            <p className="text-[#016E97] font-[poppins] font-semibold text-base ">
              <span className="font-normal">Leading in</span> Sustainable
              Manufacturing
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-[20px] h-[20px] rounded-[10px] border-[#4FAE49] bg-[#4FAE49]"></span>
            <p className="text-[#016E97] font-[poppins] font-semibold text-base ">
              <span className="font-normal">Investing in a</span> Circular
              Future
            </p>
          </div>
        </section>

        <section
          className="flex flex-col gap-6 items-center justify-center mb-10 md:mb-[100px]"
          data-aos="fade-up"
        >
          <div className="bg-[#016E97] rounded-[7px] px-7 py-2 w-fit">
            <p className="text-sm lg:text-lg font-[poppins] font-semibold text-white">
              Join Us in Shaping a Greener Tomorrow!
            </p>
          </div>
          <button className="bg-transparent border border-[#0765A5] rounded-[10px] cursor-pointer hover:bg-[#016E97] hover:text-white transition duration-500 py-3 px-7 w-fit text-sm lg:text-lg font-[poppins] font-semibold text-[#0765A5]">
            Visit Our Story
          </button>
          {/* social icons */}
          <div>
            <SocialIcons />
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
}
