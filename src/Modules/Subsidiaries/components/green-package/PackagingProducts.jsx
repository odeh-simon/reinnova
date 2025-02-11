import Card from '../../../../components/Card';

export const PackagingProduct = () => {
  const seamlessTube = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739292224/seamless-tubes_qlnmlv.png'
  const aluminiumTube = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739292179/aluminium-tubes_c6yihh.png'
  const laminateTube = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739292212/laminate-tubes_uv3gc6.png'
  const watermarkBG = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739292675/watermarkBG_asqyuf.png'

    return (
      <div className=" w-full px-6 flex flex-col gap-6 mt-14 py-8 bg-center bg-cover" style={{backgroundImage: `url(${watermarkBG})`}}>
        {/* the Subsidiaries Card content goes here */}
        <div className="flex flex-col gap-1">
          <h2 className="text-center text-[#016E97] font-[poppins] font-semibold text-[16px] lg:text-[30px]">
            Our Packaging Products
          </h2>
          <p className="text-center text-[#35383F] text-[10px] md:text-[16px] md:w-[80%] md:mx-auto font-[RocknRollOne]">
            Reinnova Green Packaging offers a wide range of high-quality and sustainable packaging tubes to cater to diverse needs across various industries. 
          </p>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[32px]">
          <Card
            bgColor="bg-[#E9F9FF]"
            headerText="Laminate Tubes"
            imageSrc={laminateTube}
            imageWidth="w-full"
            imageHeight="h-[auto]"
            imageCaption="We produce high-quality laminate tubes that are both durable and eco-friendly, available in a variety of sizes and designs to suit your unique requirements."
            captionAlign="text-left"
          />
          <Card
            bgColor="bg-[#E9F9FF]"
            headerText="Aluminum Tubes"
            imageSrc={aluminiumTube}
            imageWidth="w-full"
            imageHeight="h-[auto]"
            imageCaption="We produce high-quality laminate tubes that are both durable and eco-friendly, available in a variety of sizes and designs to suit your unique requirements."
            captionAlign="text-left"
          />
          <Card
            bgColor="bg-[#E9F9FF]"
            headerText="Seamless Tubes"
            imageSrc={seamlessTube}
            imageWidth="w-full"
            imageHeight="h-[auto]"
            imageCaption="We provide seamless tubes designed with high-barrier and tamper-evident features to guarantee the safety and quality of your pharmaceutical products."
            captionAlign="text-left"
          />
        </div>
      </div>
    );
  };
  