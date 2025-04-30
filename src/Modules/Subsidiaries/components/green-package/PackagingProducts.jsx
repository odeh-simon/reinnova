import Card from '../../../../components/Card';

export const PackagingProduct = () => {
  const seamlessTube = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743521013/seamless-tubes_qlnmlv.svg'
  const aluminiumTube = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743521588/aluminium-tubes_c6yihh.svg'
  const laminateTube = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1743520951/laminate-tubes_uv3gc6.svg'
  const watermarkBG = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739292675/watermarkBG_asqyuf.png'

    return (
      <div className=" w-full px-6 lg:px-[100px] flex flex-col gap-6 mt-14 py-8 bg-center bg-cover" style={{backgroundImage: `url(${watermarkBG})`}}>
        {/* the Subsidiaries Card content goes here */}
        <div className="flex flex-col gap-1">
          <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] md:text-[30px]">
            Our Packaging Products
          </h2>
          <p className="text-center text-[#35383F] text-[10px] md:text-[16px] lg:w-[80%] md:mx-auto font-[RocknRollOne]">
            Reinnova Green Packaging offers a wide range of high-quality and sustainable packaging tubes to cater to diverse needs across various industries. 
          </p>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[32px]">
          <Card
            bgColor="bg-[#FAFEFF]"
            headerText="Laminate Tubes"
            imageSrc={laminateTube}
            imageWidth=""
            imageHeight="h-[auto]"
            imageCaption="Durable, high-quality and eco-friendly Laminate Tubes available in a variety of sizes and designs to suit your unique requirements."
            captionAlign="text-left"
          />
          <Card
            bgColor="bg-[#FAFEFF]"
            headerText="Aluminum Tubes"
            imageSrc={aluminiumTube}
            imageWidth=""
            imageHeight="h-[auto]"
            imageCaption="Aluminium Tubes thoughtfully crafted in a wide array of shapes, sizes, and finishes, ensuring they meet the diverse needs of your cosmetic products."
            captionAlign="text-left"
          />
          <Card
            bgColor="bg-[#FAFEFF]"
            headerText="Seamless Tubes"
            imageSrc={seamlessTube}
            imageWidth=""
            imageHeight="h-[auto]"
            imageCaption="High-barrier and tamper-evident featured Seamless Tubes designed to guarantee the safety and quality of your pharmaceutical products."
            captionAlign="text-left"
          />
        </div>
      </div>
    );
  };
  