import {useEffect} from "react";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import JobOpenings from "./components/JobOpenings";
import ApplicationProcess from "./components/ApplicationProcess";
import Footer from '../../components/Footer';
import Divider from "../../components/Divider";

export default function Careers() {
  const backgroundImage = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739291126/careerBG_jikq5r.png'
  const engineer1 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743651075/engineer1_bu0e4r.png'
  const engineer2 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739291575/engineer2_yoavnj.png'
  const engineer3 = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739291679/engineer3_u2v91l.png'
  
  // Scroll to top on component mount
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="w-full">
      <header>
        <NavBar />
        <Header
          showBouncingArrow={true}
          showHomeButtons={false}
          textColor="text-[#016E97]"
          showSubscribeButton={false}
          backgroundImage={backgroundImage}
          headerText="Reinnova Careers"
          middleText="Build a Rewarding Career at Reinnova Green"
          descriptionText="Welcome to Reinnova Green Holding Company, where a career is more than just a job - it's an opportunity to make a real difference for the environment and the future of Nigeria!"
        />
      </header>

      <div className="flex flex-col gap-[60px] lg:gap-[80px] w-[90%] md:w-[80%] mx-auto mt-[50px] lg:mt-[100px]">
        <session data-aos="fade-up" className="lg:px-[50px]">
          <h2 className="text-xs md:text-base font-[poppins] text-[#030B1E]">
            We are a passionate group of companies dedicated to providing
            innovative and sustainable solutions for the packaging, plastic
            waste management, and aluminium industries. We believe in the power
            of collaboration and innovation to create a circular economy that
            benefits our communities and the planet.
          </h2>
        </session>

        {/**Why Choose Reinnova section */}
        <session data-aos="fade-up" className="flex flex-col gap-8">
          <h2 className="text-sm md:text-xl text-center font-semibold text-[#016E97] font-[poppins]">
          Why Choose a Career with RGHC?
          </h2>
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center  "
            data-aos="fade-up"
          >
            <div>
              <img src={engineer1} alt="person with a hand machine" />
            </div>

            <div>
              <ul className="list-disc px-3 space-y-2 text-gray-700">
                <li className="text-[#030B1E] font-[poppins] text-xs xl:text-[16px]">
                  <strong>Make a Positive Impact: </strong>Be part of a company
                  that is driving positive environmental change. Your work will
                  contribute to reducing waste, promoting resource conservation,
                  and creating a more sustainable future for generations to
                  come.
                </li>
                <li className="text-[#030B1E] font-[poppins] text-xs xl:text-[16px]">
                  <strong> Work with Cutting-Edge Technologies:</strong> : We
                  invest in the latest technologies to advance our sustainable
                  solutions. You&apos;ll have the opportunity to work with
                  innovative equipment and processes at the forefront of the
                  industry.
                </li>
                <li className="text-[#030B1E] font-[poppins] text-xs xl:text-[16px]">
                  <strong>Collaborative and Dynamic Environment:</strong> We
                  foster a collaborative and dynamic work environment where you
                  can learn, grow, and contribute your ideas. We encourage
                  teamwork and celebrate individual achievements.
                </li>
                <li className="text-[#030B1E] font-[poppins] text-xs xl:text-[16px]">
                  <strong>Growth and Development Opportunities:</strong> We are
                  committed to the professional development of our employees. We
                  offer comprehensive training programs, mentorship
                  opportunities, and support for career advancement.
                </li>
                <li className="text-[#030B1E] font-[poppins] text-xs xl:text-[16px]">
                  <strong>Competitive Compensation and Benefits:</strong> We
                  offer competitive salaries, benefits packages, and a work
                  environment that values your well-being.
                </li>
              </ul>
            </div>
          </div>
        </session>

        {/**Our Opennings */}
        <session data-aos="fade-up">
          <JobOpenings />
        </session>

        {/**What we look for in our Candidates section*/}
        <session data-aos="fade-up">
          <h2 className="text-sm md:text-xl text-center font-semibold text-[#016E97] font-[poppins] mb-4">
            What We Look For in Our Candidates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li className="text-[#030B1E] text-xs xl:text-sm font-[poppins] xl:leading-[170.6%]">
                  A strong work ethic and a commitment to excellence
                </li>
                <li className="text-[#030B1E] text-xs xl:text-sm font-[poppins] xl:leading-[170.6%]">
                  A passion for sustainability and environmental responsibility
                </li>
                <li className="text-[#030B1E] text-xs xl:text-sm font-[poppins] xl:leading-[170.6%]">
                  Strong technical skills and knowledge relevant to the specific
                  role
                </li>
                <li className="text-[#030B1E] text-xs xl:text-sm font-[poppins] xl:leading-[170.6%]">
                  Excellent communication, collaboration, and problem-solving
                  skills
                </li>
                <li className="text-[#030B1E] text-xs xl:text-sm font-[poppins] xl:leading-[170.6%]">
                  A willingness to learn and adapt to new technologies and
                  processes
                </li>
                <li className="text-[#030B1E] text-xs xl:text-sm font-[poppins] xl:leading-[170.6%]">
                  A team player with a positive and proactive attitude
                </li>
              </ul>
              <div>
                <img src={engineer2} alt="a female engineer" />
              </div>
            </div>
            <div className="h-auto hidden md:block">
              <img
                src={engineer3}
                alt="two engineers"
                className="h-full object-cover rounded-[10px]"
              />
            </div>
          </div>
        </session>

        {/* Application Process */}
        <session data-aos="fade-up">
          <ApplicationProcess />
        </session>

        {/* Divider */}
        <session className="w-[96%] lg:w-[80%] mx-auto">
          <Divider />
        </session>


        <session data-aos="fade-up" className='mb-6 w-[96%] lg:w-[80%] mx-auto'>
          <h2 className="text-sm md:text-xl text-center font-semibold text-[#016E97] font-[poppins] mb-4">Join Us and Make a Difference!</h2>
          <p className="text-xs md:text-sm font-[poppins] text-[#030B1E]">
            We are excited to hear from talented individuals who share our
            commitment to sustainability. At Reinnova Green Holding Company, you
            can build a rewarding career while contributing to a brighter
            future. Submit your resume and a cover letter to{' '}
            <a href="mailto:careers@reinnova.com" className="text-[#016E97] underline">careers@reinnova.com</a>
          </p>
        </session>
      </div>

      {/*Footer */}
      <Footer/>
    </div>
  );
}
