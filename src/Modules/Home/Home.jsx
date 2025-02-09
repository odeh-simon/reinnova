import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import { SubsidiariesCard, SustainabilityCard, WhyChooseUsCard } from "./components/HomeCard";
import StatsComponent from "./components/StatsComponent";
import Testimonial from "../../components/Testimonial";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import GallerySlider from "./components/GallerySlider";
import Footer from "../../components/Footer";
import backgroundImage from '../../assets/images/Home images/homeBG.png'
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  //This is where the data for OUr Numbers section goes
  const statsData = [
    { number: 2480801, suffix: '', description: 'processed and recycled bottles' },
    { number: 77, suffix: ' Million', description: 'saved from beaches' },
    { number: 500, suffix: ' Jobs', description: 'in the circular economy' },
    { number: 43, suffix: '% Females', description: 'in our workforce' },
    { number:'', suffix: 'SDG ', description: 'We subscribe to SDG Goals 8, 12 and 13' },
  ];

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div>
      <header>
        <NavBar />
        <Header
          showSubscribeButton={false}
          middleText="Transforming plastic waste into valuable resources."
          showBouncingArrow={false}
          backgroundImage={backgroundImage}
        />
      </header>

      {/**Main Contents of the Home page starts Here */}
      <main className="mt-[88px] w-full">
        <div className="flex flex-col gap-[88px] w-[90%] mx-auto">
          
          {/**About Us Section */}
          <session className="flex flex-col gap-4" data-aos="fade-up">
            <h1 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[40px]">About Us</h1>
            <h2 className="text-center font-semibold text-[#35383F] text-xs md:text-xl font-[RocknRollOne]">Our story and what makes us different, special and unique</h2>
            <p className="text-[#35383F] font-[poppins] text-sm md:text-[16px] leading-[32px]">
              Reinnova Green Holdings is a Nigerian-based holding company with a
              resolute commitment to sustainability and the green economy. We
              are also a collaborative group of three subsidiaries that work
              together seamlessly to create a closed-loop system that minimizes
              environmental impact while delivering exceptional products. Our
              team is comprised of passionate individuals with extensive
              experience in sustainability practices and their respective
              industries. Their dedication and expertise are the driving force
              behind our success.
            </p>
            <Link to='/about-us' className="border border-[#030B1E] rounded-[10px] py-4 px-8 flex justify-center items-center w-[150px] mx-auto">Lear More</Link>
          </session>
        
          {/*Sustainability Session */}
          <session data-aos="fade-up">
            <SustainabilityCard />
          </session>

          {/**Our Numbers Section */}
          <session data-aos="fade-up">
            <StatsComponent  statsData={statsData} />
          </session>
        </div>

          {/** Our Subsidiaries Section*/}
        <session data-aos="fade-up">
          <SubsidiariesCard />
        </session>
        
          
        <div className="flex flex-col gap-[24px] w-[90%] mx-auto">
          {/**Why Choose Reinnova Green Section */}
          <session data-aos="fade-up">
            <WhyChooseUsCard />
          </session>

          {/**Testimonial Section */}
          <session data-aos="fade-up">
            <Testimonial 
              headerText="Testimonial"
            />
          </session>

          {/**Contact Us section */}
          <session className="mb-10 border-b-[0.5px] border-[#eee5e5] pb-6 flex flex-col gap-3" data-aos="fade-up">            
              <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[40px]">
              Contact Us
              </h2>
              <p className="text-center text-[#35383F] text-xs md:text-xl font-[RocknRollOne]">
                Contact Us Today to Discuss Your Sustainable Packaging Needs
              </p>
              <p className="text-[#35383F] text-xs md:text-[16px] font-[poppins] ">Become part of the movement making the world a better place. Click the contact us button today to start your journey to a waste free world with Reinovva Green</p>
              <div className="flex items-center justify-center mt-4">
                <Button label="Contact Us" onClick={()=> navigate('/contact-us') }/>
              </div>
          </session>

          {/**Gallery Section */}
          <session data-aos="fade-up">
            <GallerySlider />
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
