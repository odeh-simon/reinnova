import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import { PackagingProduct } from "./components/green-package/PackagingProducts";
import Testimonial from "../../components/Testimonial";
import Contact from "../../components/Contact";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import Divider from "../../components/Divider";

export default function GreenPackaging() {
  const backgroundImage =
    "https://res.cloudinary.com/dsnz8adqi/image/upload/v1743522475/greenpackageBG_vb4lyy.png";
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header>
        <NavBar />

        <Header
          showHomeButtons={false}
          showSubscribeButton={false}
          backgroundImage={backgroundImage}
          headerText="Reinnova Green Packaging"
          middleText="High-Quality, Sustainable Tube Packaging"
        />
      </header>

      <main className="w-full flex flex-col gap-[30px] mt-[80px]">
        {/**About Reinnova Green Packaging */}
        <section
          className="w-[90%] mx-auto flex flex-col gap-5"
          data-aos="fade-up"
        >
          <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[40px]">
            About Us - Reinnova Green Packaging
          </h2>
          <p className="text-[#35383F] font-[poppins] text-sm md:text-[16px] leading-[32px]">
            <strong>ReInnova Green Packaging,</strong> a subsidiary of ReInnova
            Green Holding Company, is a leading manufacturer of sustainable
            packaging solutions in Nigeria. are committed to delivering
            world-class tube packaging solutions for the pharmaceutical, oral
            care, body care, and home cleaning industries. With a strong focus
            on quality, innovation, and sustainability, we supply some of the
            biggest brands, including{" "}
            <strong>Unilever, Dabur, Aspira, SC Johnson, and Colgate.</strong>
          </p>
          <p className="text-[#35383F] font-[poppins] text-sm md:text-[16px] leading-[32px]">
            Our <strong>Laminate Tube</strong> division operates two
            state-of-the-art machines with a combined production capacity of{" "}
            <strong>400 tubes per minute,</strong>
            translating to an annual output of{" "}
            <strong>89 million tubes.</strong> These tubes are used for
            toothpaste, creams, and personal care products.
          </p>
          <p className="text-[#35383F] font-[poppins] text-sm md:text-[16px] leading-[32px]">
            On the <strong>Aluminium Tube</strong> side, we run two advanced
            production lines capable of producing{" "}
            <strong>14 million tubes annually,</strong> ensuring high-quality ,
            durable packaging for pharmaceutical ointments and creams{" "}
          </p>
          <p className="text-[#35383F] font-[poppins] text-sm md:text-[16px] leading-[32px]">
            Our collapsible <strong>Seamless Tubes</strong> are engineered for
            high-barrier protection, our seamless tubes offer{" "}
            <strong>tamper-evident security,</strong>
            ensuring product integrity for pharmaceutical applications.
          </p>
        </section>

        {/**Our Packaging Products */}
        <section data-aos="fade-up">
          <PackagingProduct />
        </section>

        {/* Divider */}
        <section className="my-8 w-[96%] md:w-[80%] mx-auto">
          <Divider />
        </section>

        {/* why choose us */}
        <section className="">
          <h1 className="text-[#016E97] font-[poppins] text-lg md:text-[40px] font-bold mb-4 text-center">
            Why Choose Us?
          </h1>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 border-4 border-[#016E97] rounded-[10px] p-5 w-[96%] mx-auto">
            <div className="flex items-start gap-2">
              <div className="w-16 h-6 bg-[#4C9AB6]"></div>
              <p className="text-sm md:text-lg font-[poppins]">
                <strong>Certified & Audited -</strong> We adhere to the highest
                international standards, holding <strong>
                  ISO, BRCG, and RSA
                  certifications.
                </strong>
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-16 h-6 bg-[#4C9AB6]"></div>
              <p className="text-sm md:text-lg font-[poppins]">
                <strong>Preferred Partner -</strong> We are the first-choice
                tube packaging provider for global brands like{" "}
                <strong>Unilever, Colgate, and SC Johnson.</strong>
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-16 h-6 bg-[#4C9AB6]"></div>
              <p className="text-sm md:text-lg font-[poppins]">
                <strong>Sustainability Focused -</strong> We integrate eco-friendly materials and
                processes to minimize our environmental footprint.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <section className="my-8 w-[96%] md:w-[80%] mx-auto">
          <Divider />
        </section>

        {/**Testimonial */}
        <section className="w-[90%] mx-auto" data-aos="fade-up">
          <Testimonial
            headerText="Hear what some of our customer and clients have to say"
            paragraphText=""
          />
        </section>

        {/* Divider */}
        <section className="my-8 w-[96%] md:w-[80%] mx-auto">
          <Divider />
        </section>

        {/**Conact Section */}
        <section className="w-[90%] mx-auto" data-aos="fade-up">
          <Contact />
        </section>
      </main>

      {/**Footer */}
      <Footer />
    </>
  );
}
