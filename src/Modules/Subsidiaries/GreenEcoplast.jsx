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
import { CommitmentToQuality } from "./components/green-ecoplast/EcoplastExports";
import Divider from "../../components/Divider";
export default function GreenEcoplast() {
  const backgroundImage =
    "https://res.cloudinary.com/dsnz8adqi/image/upload/v1739293106/greenecoplastBG_wubfsg.png";

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
          middleText="Leading the Future of Sustainable Packaging"
          descriptionText="Sustainable Plastic Recycling Solutions for a Greener Nigeria"
        />
      </header>

      <main className="w-full flex flex-col gap-[40px] md:gap-[80px] mt-[50px] lg:mt-[80px]">
        {/**About Reinnova Green Packaging */}
        <section className="flex flex-col gap-5 w-[90%] lg:w-[80%] mx-auto" data-aos="fade-up">
          <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] md:text-[30px] lg:text-[40px] lg:mb-8">
            About Us - Reinnova Green Ecoplast
          </h2>
          <div className=" py-4 lg:px-[100px] lg:py-[50px] flex flex-col gap-3 md:rounded-r-[40px] bg-white md:shadow-custom md:mb-6">
            <p className="text-[#35383F] font-[poppins] text-sm md:text-[16px] leading-[32px]">
              Nigeria generates over 2.5 million tonnes of plastic waste
              annually, with a growing population of over 220 million people.
              The need for eco-friendly solutions has never been greater. At
              <strong> ReInnova Green Ecoplast,</strong> we are turning plastic
              waste into valuable resources, producing high-quality recycled PET
              flakes and PP/HDPE pellets for sustainable packaging solutions.
              <br /> Since divesting from First Aluminium in 2019, we have
              processed and exported over 25,000 MT of recycled materials to
              Europe, Asia, and the USA, reducing plastic pollution while
              meeting global packaging demands
            </p>
            <p className="text-[#35383F] font-[poppins] text-sm md:text-[16px] leading-[32px]">
              With our state-of-the-art recycling facility, we have the capacity
              to crush and process 40 tonnes of PET waste and 20 tonnes of
              PP/HDPE waste daily, transforming them into premium-grade recycled
              pellets and flakes. Our advanced polymer sorter ensures the
              highest level of purity, removing all impurities for consistent
              quality. Each batch undergoes multiple quality checks,
              guaranteeing that our products meet the strictest industry
              standards for both local and international markets
            </p>
            <p className="text-[#35383F] font-[poppins] text-sm md:text-[16px] leading-[32px]">
              At <strong>ReInnova Green Ecoplast,</strong> we are not just
              recycling—we are building the future of green packaging solutions.
              By providing sustainable, high-quality alternatives to virgin
              plastic, we help brands reduce their environmental impact while
              ensuring durability and reliability.
            </p>
          </div>
        </section>

        {/* Commitment to Quality */}
        <section data-aos="fade-up">
          <CommitmentToQuality />
        </section>

        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col gap-[40px] md:gap-[80px] lg:gap-[100px]">
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
          {/**Divider */}
          <section className="w-[96%] md:w-[80%] mx-auto">
            <Divider />
          </section>
          {/**Testimonial */}
          <section data-aos="fade-up" className="w-[90%] lg:w-[80%] mx-auto">
            <Testimonial
              headerText="Hear what some of our customer and clients have to say"
              paragraphText=""
            />
          </section>
          {/**Divider */}
          <section className="w-[96%] md:w-[80%] mx-auto">
            <Divider />
          </section>
          </div>
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
