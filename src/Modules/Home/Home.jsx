import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import {
  SubsidiariesCard,
  SustainabilityCard,
  WhyChooseUsCard,
} from "./components/HomeCard";
import StatsComponent from "./components/StatsComponent";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import GallerySlider from "./components/GallerySlider";
import Footer from "../../components/Footer";
import HeaderSlide from "./components/HeaderSlide";
import Divider from "../../components/Divider";
import SocialIcons from "../../components/socialIcons";

const bottle = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1746021803/bottle_e6usbm.svg";
const savedBottle = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1746021805/saved-bottle_lqenzc.svg";
const jobsIcon = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1746021804/jobs_hixouy.svg";
const sdg = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1746021806/sdg_ymzesd.svg";
const femaleIcon = "https://res.cloudinary.com/dsnz8adqi/image/upload/v1746021804/females_nz2qpy.svg";

// Import Testimonial but defer its rendering
import Testimonial from "../../components/Testimonial";

export default function Home() {
  const navigate = useNavigate();
  const [loadDelayed, setLoadDelayed] = useState(false);

  //This is where the data for Our Numbers section goes
  const statsData = [
    {
      number: 2480801,
      suffix: " kg",
      description: "processed and recycled bottles",
      icon: bottle,
    },
    {
      number: 87,
      suffix: " Million bottles",
      description: "saved from beaches",
      icon: savedBottle,
    },
    {
      number: 500,
      suffix: " Jobs",
      description: "in the circular economy",
      icon: jobsIcon,
    },
    {
      number: "",
      suffix: "SDG ",
      description: "We subscribe to SDG Goals 8, 12 and 13",
      icon: sdg,
    },
    {
      number: 43,
      suffix: "% Females",
      description: "in our workforce",
      icon: femaleIcon,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    // Delay loading heavy components until after initial render
    setLoadDelayed(true);
  }, []);

  return (
    <div>
      <header>
        <NavBar />
        <HeaderSlide />
      </header>

      {/**Main Contents of the Home page starts Here */}
      <main className="mt-[60px] w-full">
        <div className="flex flex-col gap-[60px] lg:gap-[80px] w-[90%] lg:w-[85%] mx-auto">
          {/**About Us Section */}
          <section className="flex flex-col lg:px-[140px]" data-aos="fade-up">
            <h1 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] md:text-[30px] lg:text-[40px]">
              About Us
            </h1>
            <h2 className="text-center font-medium text-[#35383F] text-sm md:text-lg font-[RocknRollOne] mb-4">
              Reimagining Sustainability, Engineering the Future
            </h2>
            <p className="text-[#35383F] font-[poppins] text-sm md:text-sm leading-[32px]">
              At{" "}
              <span className="font-bold">ReInnova Green Holding Company,</span>{" "}
              our journey is a testament to resilience, innovation, and an
              unrelenting commitment to sustainability. From our inception as{" "}
              <span className="font-bold">First Aluminium Nigeria Plc </span>
              in 1959, we have evolved through decades of industrial excellence,
              pioneering advancements in{" "}
              <span className="font-bold">
                aluminium manufacturing, packaging solutions, and plastic
                recycling.
              </span>{" "}
              Today, we stand as a{" "}
              <span className="font-bold">
                trailblazer in Nigeria&apos;s green economy,
              </span>{" "}
              leading the charge toward a circular future where materials are
              repurposed, waste is minimised, and industries are built on
              sustainable foundations.
            </p>
            <Link
              to="/about-us"
              className="border border-[#030B1E] rounded-[10px] mt-5 py-2 px-6 flex justify-center items-center w-[150px] mx-auto"
            >
              Learn More
            </Link>
          </section>

          {/*Sustainability Section */}
          <section data-aos="fade-up">
            <SustainabilityCard />
          </section>

          {/**Our Numbers Section */}
          <section data-aos="fade-up" className="mb-[60px] lg:px-[100px]">
            <StatsComponent statsData={statsData} />
          </section>
        </div>

        {/** Our Subsidiaries Section*/}
        <section data-aos="fade-up" className=""> 
          <SubsidiariesCard />
        </section>

        <div className="flex flex-col mt-[40px] gap-[60px] w-[90%] md:w-[80%] mx-auto">
          {/**Why Choose Reinnova Green Section */}
          <section data-aos="fade-up" className="lg:px-[100px]">
            <WhyChooseUsCard />
          </section>

          {/* divider */}
          <Divider />

          {/**Testimonial Section */}
          <section data-aos="fade-up" className="w-[90%] lg:w-[80%] mx-auto lg:px-[100px]">
            {loadDelayed ? (
              <Testimonial headerText="Testimonials" />
            ) : null}
          </section>

          {/* divider */}
          <Divider />

          {/**Gallery Section */}
          <section data-aos="fade-up">
            {loadDelayed ? <GallerySlider /> : null}
          </section>

          {/* divider */}
          <Divider />

          {/**Contact Us section */}
          <section className="mb-[60px] flex flex-col gap-3 lg:px-[100px]" data-aos="fade-up">
            <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] md:text-[30px] lg:text-[40px]">
              Contact Us
            </h2>
            <p className="text-center text-[#35383F] mb-6 text-xs md:text-lg font-[RocknRollOne]">
              Contact Us Today to Discuss Your Sustainable Packaging Needs
            </p>
            <p className="text-[#35383F] text-xs md:text-[16px] font-[poppins] ">
              Become part of the movement making the world a better place. Click
              the contact us button today to start your journey to a waste free
              world with Reinovva Green
            </p>
            <div className="flex items-center justify-center mt-4">
              <Button
                label="Contact Us"
                onClick={() => navigate("/contact-us")}
              />
            </div>

            <div className="flex items-center justify-center mt-5">
              <SocialIcons />
            </div>
          </section>
        </div>

        {/**Footer Section */}
        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
}