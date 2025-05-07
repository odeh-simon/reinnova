import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import TeamCard from "./components/TeamCard";
import { useEffect } from "react";

export default function Team() {
    const backgroundImage = 'https://res.cloudinary.com/dsnz8adqi/image/upload/v1739291126/careerBG_jikq5r.png'
    // Scroll to top on component mount
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="w-full">
        <header>
            <NavBar />
            <Header 
                headerText="The ReInnova Team"
                middleText="Meet the inspiring leaders and dedicated team members at Reinnova Green."
                showSubscribeButton={false}
                showBouncingArrow={true}
                bouncingArrowColor="blue"
                showHomeButtons={false}
                textColor='text-[#016E97]'
                backgroundImage={backgroundImage}
            />

        </header>

        <main className="md:px-4 mt-[100px] w-[90%] lg:w-[85%] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[40px]">
                <TeamCard 
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1746029975/tosa_xzrh29.png"
                    name="TOSA OGBOMO"
                    role="MD/GROUP CEO , REINNOVA GREEN HOLDINGS LIMITED "
                />

                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1746029964/mbonu_cvneti.png"
                    name="DR OKECHUKWU N MBONU"
                    role="CHAIRMAN, BOARD OF DIRECTORS"
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1746029952/calistus_tygxnx.png"
                    name="MR. CALLISTUS UDALOR"
                    role="MEMBER, BOARD OF DIRECTORS"
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1746029962/julia_houdz6.png"
                    name="Julia Oku Jacks"
                    role="MEMBER, BOARD OF DIRECTORS"
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1746029971/segun_zwfx54.png"
                    name="SEGUN ONAKOMAIYA"
                    role="SYNERGY CAPITAL INVESTMENTS"
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1746029960/iredia_uxjtrz.png"
                    name="Isorae Iredia Christopher"
                    role="HEAD TECHNICAL PROJECTS, REINNOVA GREEN ECOPLAST"
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1746029967/olowo_jnbhf6.png"
                    name="Olowo Idowu Daniel"
                    role="Laminate Production Manager, ReInnova Green Packaging"
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1746029958/fred_fzmajb.png"
                    name="FREDERICK FAWOHUNRE"
                    role="Head of Production AND MAINTENANCE , ReInnova Green Holdings"
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1746029977/uzoma_ve2fl5.png"
                    name="Mbaegbu Tosan Uzoma"
                    role="Commercial Manager, ReInnova Green Ecoplast"
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1746029954/faith_fu7oh9.png"
                    name="Faith Aibor"
                    role="Group Head Procurement and Administration - Reinnova Green Holdings"
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1746029956/fatima_dfd4fo.png"
                    name="Shittu Fatimah Bolanle"
                    role="Finance Business Partner, Reinnova Green Holdings"
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1746029973/soba_wb2o8y.png"
                    name="Soba Fubara- Abraham"
                    role="Chief Operating Officer- ReInnova Green Ecoplast"
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1746029969/peter_bthhy2.png"
                    name="Peter Akinbola"
                    role="Group Head Maintenance - Reinnova Green Holdings."
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1746029950/adewale_xa4amk.png"
                    name="ADEWALE AJITERU"
                    role="MAINTENANCE HEAD, Reinnova Green PACKAGING"
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1746029951/andrew_qbsumm.png"
                    name="Andrew Ugbo"
                    role="aluminium production Manager, Reinnova Green packaging"
                />
            </div>
        </main>

        <Footer />
    </div>
  )
}
