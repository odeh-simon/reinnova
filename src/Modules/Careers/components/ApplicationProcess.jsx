import React from 'react';
import step1 from '../../../assets/images/Career images/step1.svg'
import step2 from '../../../assets/images/Career images/step2.svg'
import step3 from '../../../assets/images/Career images/step3.svg'
import step4 from '../../../assets/images/Career images/step4.svg'

const ApplicationProcess = () => {
  return (
    <div className=" bg-white max-w-5xl mx-auto rounded-lg w-full">
      <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[20px] lg:text-[30px] mb-8">
        The Application Process
      </h2>

      <div className="flex flex-col gap-4 lg:gap-2 items-start lg:items-center lg:justify-center w-full lg:w-[50%] lg:mx-auto">
        {/** Step 1*/}
        <div className='flex gap-4 lg:justify-center' data-aos="fade-up">
            <div className='hidden lg:flex w-[186.567px]'>
                <img src={step1} alt="step 1" className='w-full h-[181.096px]'/>
            </div>
            <div className='hidden lg:flex relative'>
                <div className="absolute left-0 top-0 h-full border-l border-gray-300"></div>
            </div>
            <div className=''>
                <h3 className="text-[#016e9761] font-[poppins] leading-[170%] font-semibold text-[24px]">Step 1</h3>
                <p className="text-[#030B1E] text-sm lg:text-[16px] font-[poppins] leading-[170%]">
                    Review the job descriptions carefully and identify the positions that
                    align with your skills and interests.
                </p> 
            </div>
        </div>

        {/** Step 2*/}
        <div className='flex gap-4 lg:justify-start lg:ml-16' data-aos="fade-up">
            <div className='hidden lg:block w-[186.567px]'>
                <img src={step2} alt="step 2" className='w-full h-[181.096px]'/>
            </div>
            <div className='hidden lg:flex relative'>
                <div className="absolute left-0 top-0 h-full border-l border-gray-300"></div>
            </div>
            <div className=''>
                <h3 className="text-[#016e9761] font-[poppins] leading-[170%] font-semibold text-[24px]">Step 2</h3>
                <p className="text-[#030B1E] text-sm lg:text-[16px] font-[poppins] leading-[170%]">
                    Submit your resume and a cover letter to <a href="mailto:careers@reinnova.com" className='text-[#016E97] underline'>careers@reinnova.com</a> that highlights your qualifications and why you&apos;re a good fit for Reinnova Green Holding Company.
                </p> 
            </div>
        </div>

        {/** Step 3*/}
        <div className='flex gap-4 lg:justify-center lg:ml-12' data-aos="fade-up">
            <div className='hidden lg:block w-[186.567px]'>
                <img src={step3} alt="step 3" className='w-full h-[181.096px]'/>
            </div>
            <div className='hidden lg:flex relative'>
                <div className="absolute left-0 top-0 h-full border-l border-gray-300"></div>
            </div>
            <div className=''>
                <h3 className="text-[#016e9761] font-[poppins] leading-[170%] font-semibold text-[24px]">Step 3</h3>
                <p className="text-[#030B1E] text-sm lg:text-[16px] font-[poppins] leading-[170%]">
                    We encourage you to tailor your application materials to the specific role you are applying for.
                </p> 
            </div>
        </div>
        {/** Step 4*/}
        <div className='flex gap-4 lg:justify-center lg:ml-8' data-aos="fade-up">
            <div className='hidden lg:block w-[186.567px]'>
                <img src={step4} alt="step 4" className='w-full h-[181.096px]'/>
            </div>
            <div className='hidden lg:flex relative'>
                <div className="absolute left-0 top-0 h-full border-l border-gray-300"></div>
            </div>
            <div className=''>
                <h3 className="text-[#016e9761] font-[poppins] leading-[170%] font-semibold text-[24px]">Step 4</h3>
                <p className="text-[#030B1E] text-sm lg:text-[16px] font-[poppins] leading-[170%]">
                Shortlisted candidates will be contacted for an interview.
                </p> 
            </div>
        </div>    
        
      </div>
    </div>
  );
};

export default ApplicationProcess;
