import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import {
  SubsidiariesCard,
  SustainabilityCard,
  WhyChooseUsCard,
} from "./components/HomeCard";
import StatsComponent from "./components/StatsComponent";
import Testimonial from "../../components/Testimonial";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import GallerySlider from "./components/GallerySlider";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import HeaderSlide from "./components/HeaderSlide";
import bottle from "../../assets/icons/our numbers/bottle.svg";
import savedBottle from "../../assets/icons/our numbers/saved-bottle.svg";
import jobsIcon from "../../assets/icons/our numbers/jobs.svg";
import sdg from "../../assets/icons/our numbers/sdg.svg";
import femaleIcon from "../../assets/icons/our numbers/females.svg";
import Divider from "../../components/Divider";
import SocialIcons from "../../components/socialIcons";

export default function Home() {
  const navigate = useNavigate();
  //This is where the data for OUr Numbers section goes
  const statsData = [
    {
      number: 2480801,
      suffix: "",
      description: "processed and recycled bottles",
      icon: bottle,
    },
    { number: 87, suffix: " Million", description: "saved from beaches", icon: savedBottle },
    { number: 500, suffix: " Jobs", description: "in the circular economy", icon: jobsIcon },
    {
      number: "",
      suffix: "SDG ",
      description: "We subscribe to SDG Goals 8, 12 and 13",
      icon: sdg,
    },
    { number: 43, suffix: "% Females", description: "in our workforce", icon: femaleIcon },

  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header>
        <NavBar />
        <HeaderSlide />
      </header>

      {/**Main Contents of the Home page starts Here */}
      <main className="mt-[40px] w-full">
        <div className="flex flex-col gap-[60px] w-[90%] mx-auto">
          {/**About Us Section */}
          <session className="flex flex-col gap-4" data-aos="fade-up">
            <h1 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[40px]">
              About Us
            </h1>
            <h2 className="text-center font-semibold text-[#35383F] text-xs md:text-xl font-[RocknRollOne]">
              Reimagining Sustainability, Engineering the Future   
            </h2>
            <p className="text-[#35383F] font-[poppins] text-sm md:text-[16px] leading-[32px]">
              At <span className="font-bold">ReInnova Green Holding Company,</span> our journey is a testament to
              resilience, innovation, and an unrelenting commitment to
              sustainability. From our inception as <span className="font-bold">First Aluminium Nigeria Plc </span>
              in 1959, we have evolved through decades of industrial excellence,
              pioneering advancements in <span className="font-bold">
                aluminium manufacturing, packaging
                solutions, and plastic recycling.
              </span> Today, we stand as a <span className="font-bold">
                trailblazer
                in Nigeria&apos;s green economy,
              </span> leading the charge toward a circular
              future where materials are repurposed, waste is minimised, and
              industries are built on sustainable foundations.
            </p>
            <Link
              to="/about-us"
              className="border border-[#030B1E] rounded-[10px] py-4 px-8 flex justify-center items-center w-[150px] mx-auto"
            >
              Learn More
            </Link>
          </session>

          {/*Sustainability Session */}
          <session data-aos="fade-up">
            <SustainabilityCard />
          </session>

          {/**Our Numbers Section */}
          <session data-aos="fade-up">
            <StatsComponent statsData={statsData} />
          </session>
        </div>

        {/** Our Subsidiaries Section*/}
        <session data-aos="fade-up">
          <SubsidiariesCard />
        </session>

        <div className="flex flex-col gap-10 w-[90%] mx-auto">
          {/**Why Choose Reinnova Green Section */}
          <session data-aos="fade-up ">
            <WhyChooseUsCard />
          </session>

          {/* divider */}
          <Divider/>

          {/**Testimonial Section */}
          <session data-aos="fade-up">
            <Testimonial headerText="Testimonials" />
          </session>

           {/* divider */}
           <Divider/>

          {/**Gallery Section */}
          <session data-aos="fade-up">
            <GallerySlider />
          </session>

           {/* divider */}
           <Divider/>

          {/**Contact Us section */}
          <session
            className="mb-10 flex flex-col gap-3"
            data-aos="fade-up"
          >
            <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[40px]">
              Contact Us
            </h2>
            <p className="text-center text-[#35383F] text-xs md:text-xl font-[RocknRollOne]">
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
          </session>
        </div>

        {/**Footer Section */}
        <session>
          <Footer />
        </session>
      </main>
    </div>
  );
}
