import watermarkBG from '../../../../assets/images/watermarkBG.png';
import Card from '../../../../components/Card';
import laminateTube from '../../../../assets/images/Subsidiary images/green packages/laminate-tubes.png';
import aluminiumTube from '../../../../assets/images/Subsidiary images/green packages/aluminium-tubes.png';
import seamlessTube from '../../../../assets/images/Subsidiary images/green packages/seamless-tubes.png';

export const PackagingProduct = () => {
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
  