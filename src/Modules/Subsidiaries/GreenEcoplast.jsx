import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import { useEffect } from "react";
import {
  BenefitsOfPlasticPackaging,
  RecyclingProcess,
  RecyclingProducts,
} from "./components/green-ecoplast/EcoplastExports";
import Testimonial from "../../components/Testimonial";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function GreenEcoplast() {
  const backgroundImage = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739293106/greenecoplastBG_wubfsg.png'

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
          headerText="Reinnova Green Ecoplast"
          middleText="Transforming Plastic Waste into Valuable Resources"
          descriptionText="Sustainable Plastic Recycling Solutions for a Greener Nigeria"
        />
      </header>

      <main className="w-[90%] mx-auto flex flex-col gap-[60px] mt-[80px]">
        {/**About Reinnova Green Packaging */}
        <section
          className="flex flex-col gap-5"
          data-aos="fade-up"
        >
          <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[40px]">
            About Reinnova Green Ecoplast
          </h2>
          <p className="text-[#35383F] font-[poppins] text-sm md:text-[16px] leading-[32px]">
            Reinnova Green Ecoplast, a subsidiary of Reinnova Green Holding
            Company, is a leading force in sustainable plastic waste management
            in Nigeria. We are committed to tackling the plastic waste crisis by
            providing innovative solutions for plastic recycling. Through our
            state-of-the-art recycling facility, we collect, meticulously sort,
            and reprocess plastic waste into high-quality plastic flakes and
            pellets. These reprocessed materials can then be used to manufacture
            a wide range of new plastic products, reducing reliance on virgin
            plastic and creating a circular economy for plastic.
          </p>
        </section>

        {/**Our Plastic Recycling Products */}
        <section data-aos="fade-up">
          <RecyclingProducts />
        </section>

        {/**Our Plastic Recycling Process */}
        <section data-aos="fade-up">
          <RecyclingProcess />
        </section>

        {/**The Benefits of Plastic Packaging */}
        <section data-aos="fade-up">
          <BenefitsOfPlasticPackaging />
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
      <Footer/>
    </div>
  );
}
