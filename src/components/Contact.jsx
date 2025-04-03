import SocialIcons from '../components/socialIcons';

export default function Contact() {
  return (
    <div className="w-full ">
      <div className=" flex flex-col gap-[56px] mb-6">
        <header>
          <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[30px] mb-4">
            Reach out to us let&apos;s work together
          </h2>
          <p className="text-center text-[#35383F] text-xs md:text-base font-[RocknRollOne]">
            Please feel free to connect with us through email, give us a call,
            or use the convenient contact form provided below to send us a brief
            message.{" "}
          </p>
        </header>

        <div className="w-full flex flex-col-reverse items-start gap-6 md:flex-row md:justify-between">

          {/**Manual Contacts */}
          <div className="w-full md:w-2/3">
            <p className="text-[#35383F] text-xs font-medium md:text-sm font-[poppins]">
              <strong className="font-bold text-sm md:text-base">Email: </strong>
              customersupport@reinnova.com
            </p>
            <p className="text-[#35383F] text-xs font-medium md:text-sm font-[poppins]">
              <strong className="font-bold text-sm md:text-base">
                Phone Calls Only:{" "}
              </strong>
              +234(0)987654321
            </p>
            <p className="text-[#35383F] text-xs font-medium md:text-sm font-[poppins]">
              <strong className="font-bold text-sm md:text-base">
                Whatsapp Only:{" "}
              </strong>{" "}
              +234(0)987654321
            </p>

            {/* social icons */}
            <div className='mt-4'>
              <SocialIcons />
            </div>
          </div>

            {/**Form section */}
          <div className="w-full md:w-2/3">
            <form action="https://formspree.io/f/xeoelgqe" method="POST" className="flex flex-col gap-8">
              <input type="text" name="fullName" placeholder="Your Name" required className="w-full py-6 px-6 bg-[#FCFFFF] border-[0.5px] border-[#7E7E7E] rounded-[10px]"/>
              <input type="text" name="email" placeholder="Your Email" required className="w-full py-6 px-6 bg-[#FCFFFF] border-[0.5px] border-[#7E7E7E] rounded-[10px]"/>
              <input type="text" name="phone" placeholder="Your Phone Number" required className="w-full py-6 px-6 bg-[#FCFFFF] border-[0.5px] border-[#7E7E7E] rounded-[10px]"/>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Your Message"
                required className="w-full py-6 px-6 bg-[#FCFFFF] border-[0.5px] border-[#7E7E7E] rounded-[10px]"
              ></textarea>
              <button type="submit" 
                className="bg-[#016E97] w-full md:w-[40%] lg:w-[30%] rounded-[10px] py-3 px-5 text-center text-white cursor-pointer hover:text-black font-[poppins] text-xs hover:bg-[#6ba7c0]">
                Send Message
              </button>
              <p className="block md:hidden text-center">OR</p>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}
