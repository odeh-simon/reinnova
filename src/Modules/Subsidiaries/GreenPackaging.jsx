import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import backgreoundImage from "../../assets/images/Subsidiary images/greenpackageBG.png";
import { PackagingProduct } from "./components/green-package/PackagingProducts";
import Testimonial from "../../components/Testimonial";
import Contact from "../../components/Contact";
import { useEffect } from "react";
import Footer from "../../components/Footer";

export default function GreenPackaging() {
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
          backgroundImage={backgreoundImage}
          headerText="Reinnova Green Packaging"
          middleText="Sustainable Packaging Solutions for a Greener Future"
          descriptionText="High-Quality Tubes Made with Recycled Aluminium and Sustainable Materials"
        />
      </header>

      <main className="w-full flex flex-col gap-[30px] mt-[80px]">
        {/**About Reinnova Green Packaging */}
        <section className="w-[90%] mx-auto flex flex-col gap-5" data-aos="fade-up">
          <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[40px]">
            About Reinnova Green Packaging
          </h2>
          <p className="text-[#35383F] font-[poppins] text-sm md:text-[16px] leading-[32px]">
            Reinnova Green Packaging, a subsidiary of Reinnova Green Holding
            Company, is a leading manufacturer of sustainable packaging
            solutions in Nigeria. We are dedicated to creating high-quality and
            innovative packaging tubes that minimize environmental impact. We
            achieve this by using a significant amount of recycled aluminium in
            our production process, reducing reliance on virgin materials and
            promoting resource conservation. Our commitment extends beyond
            materials; we prioritize energy efficiency and responsible waste
            management throughout our operations. The result? Sustainable
            packaging solutions that meet the highest standards for quality,
            functionality, and environmental responsibility.
          </p>
        </section>

        {/**Our Packaging Products */}
        <section data-aos="fade-up">
          <PackagingProduct /> 
        </section>

        {/**Testimonial */}
        <section className="w-[90%] mx-auto" data-aos="fade-up">
            <Testimonial
             headerText="Hear what some of our customer and clients have to say"
             paragraphText=""
            />
        </section>

        {/**Conact Section */}
        <section className="w-[90%] mx-auto" data-aos="fade-up">
            <Contact />
        </section>
      </main>

      {/**Footer */}
      <Footer/>
    </>
  );
}
