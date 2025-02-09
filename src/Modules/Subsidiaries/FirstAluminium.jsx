import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import { useEffect } from "react";
import backgreoundImage from "../../assets/images/Subsidiary images/firstaluminiumBG.png";
import Testimonial from "../../components/Testimonial";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import { AluminiumProcess, AluminiumProducts, BenefitsOfAluminium } from "./components/first-aluminium/AluminiumExports";

export default function FirstAluminium() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <header>
        <NavBar />
        <Header
          showHomeButtons={false}
          showSubscribeButton={false}
          backgroundImage={backgreoundImage}
          headerText="First Aluminium Nigeria Limited"
          middleText="Powering Progress Through Sustainable Aluminium Solutions"
          descriptionText=" Renowned Aluminium Rolling Mill for Building Products and Industrial Applications"
        />
      </header>

      <main className="w-[90%] mx-auto flex flex-col gap-[60px] mt-[80px]">
        {/**About Reinnova Green Packaging */}
        <section className="flex flex-col gap-5" data-aos="fade-up">
          <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[40px]">
            About First Aluminium Nigeria Limited
          </h2>
          <p className="text-[#35383F] font-[poppins] text-sm md:text-[16px] leading-[32px]">
            First Aluminium Nigeria Limited, a subsidiary of Reinnova Green
            Holding Company, is a leading manufacturer of high-quality aluminium
            products in Nigeria. Established in 1197, we have a long-standing
            history of providing innovative and sustainable aluminium solutions
            for various industries. Our state-of-the-art rolling mill utilizes
            advanced technology to produce a wide range of aluminium products,
            including sheets, coils, and circles. We are committed to
            responsible manufacturing practices, minimizing our environmental
            footprint and contributing to a sustainable future.
          </p>
        </section>

        {/**Our Plastic Recycling Products */}
        <section data-aos="fade-up">
          <AluminiumProducts/>
        </section>

        {/**Our Plastic Recycling Process */}
        <section data-aos="fade-up">
          <AluminiumProcess/>
        </section>

        {/**The Benefits of Plastic Packaging */}
        <section data-aos="fade-up">
          <BenefitsOfAluminium/>
        </section>

        {/**Testimonial */}
        <section data-aos="fade-up">
          <Testimonial
            headerText="Hear what some of our customer and clients have to say"
            paragraphText=""
          />
        </section>

        {/**Contact Us */}
        <section data-aos="fade-up">
          <Contact />
        </section>
      </main>

      {/**Footer Section */}
      <Footer />
    </div>
  );
}
