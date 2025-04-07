import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import { useEffect } from "react";
import Testimonial from "../../components/Testimonial";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import {
  AluminiumProcess,
  AluminiumProducts,
  BenefitsOfAluminium,
  WhyFirstAluminium,
} from "./components/first-aluminium/AluminiumExports";
import Divider from "../../components/Divider";

export default function FirstAluminium() {
  const backgroundImage =
    "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739294318/firstaluminiumBG_ohjrrn.png";

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
          backgroundImage={backgroundImage}
          headerText="First Aluminium Nigeria Limited"
          middleText="Durable, Sustainable, and Built to Last"
          descriptionText=" Renowned Aluminium Rolling Mill for Building Products and Industrial Applications"
        />
      </header>

      <main className="w-[90%] mx-auto flex flex-col gap-[40px] lg:gap-[80px] mt-[100px]">
        {/**About Reinnova Green Packaging */}
        <section className="flex flex-col gap-5" data-aos="fade-up">
          <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[40px]">
            About First Aluminium Nigeria Limited
          </h2>
          <div className="flex flex-col gap-3 p-6 bg-white shadow-custom-gray">
            <p className="text-[#35383F] font-[poppins] text-sm md:text-[16px] leading-[32px]">
              First Aluminium Nigeria, formerly known as{" "}
              <strong>Aluminium City (Alucity),</strong>
              has been a trusted name in <strong>roofing solutions</strong> for
              decades. While we have expanded into{" "}
              <strong>plastic recycling and aluminium packaging,</strong> we
              remain committed to delivering{" "}
              <strong>top-quality roofing installations</strong> for
              <strong>
                factories, industrial buildings, and large-scale projects.
              </strong>{" "}
              Our expertise ensures that every installation is done with{" "}
              <strong>precision and durability,</strong> providing businesses
              with long-lasting roofing solutions that stand the test of time.
            </p>
            <p className="text-[#35383F] font-[poppins] text-sm md:text-[16px] leading-[32px]">
              As we move towards a more <strong>sustainable future,</strong>{" "}
              First Aluminium is transitioning into{" "}
              <strong>eco-friendly roofing systems,</strong> integrating
              <strong>renewable materials</strong> that support businesses in
              reducing their environmental impact. We understand the evolving
              needs of modern industries and are dedicated to providing{" "}
              <strong>
                energy-efficient, weather-resistant, and cost-effective roofing
                solutions
              </strong>{" "}
              that combine durability with sustainability.
            </p>
            <p className="text-[#35383F] font-[poppins] text-sm md:text-[16px] leading-[32px]">
              At <strong>First Aluminium Nigeria,</strong> we believe that
              strong, <strong>sustainable roofing</strong> is the foundation of
              a better-built environment. Our experience in{" "}
              <strong>large-scale roofing projects</strong> and commitment to
              <strong>eco-conscious innovations</strong> set us apart as{" "}
              <strong>
                Nigeria&apos;s leading provider of industrial and commercial
                roofing solutions.
              </strong>
            </p>
          </div>
        </section>

        {/**Our Plastic Recycling Products */}
        <section data-aos="fade-up">
          <AluminiumProducts />
        </section>

        {/**Our Plastic Recycling Process */}
        <section data-aos="fade-up">
          <AluminiumProcess />
        </section>

        {/**The Benefits of Plastic Packaging */}
        <section data-aos="fade-up">
          <BenefitsOfAluminium />
        </section>

        {/* why first aluminium */}
        <section data-aos="fade-up">
          <WhyFirstAluminium />
        </section>

        {/* divider */}
        <section>
          <Divider />
        </section>

        {/**Testimonial */}
        <section data-aos="fade-up" className="w-[90%] lg:w-[80%] mx-auto">
          <Testimonial
            headerText="Hear what some of our customer and clients have to say"
            paragraphText=""
          />
        </section>

        {/* divider */}
        <section>
          <Divider />
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
