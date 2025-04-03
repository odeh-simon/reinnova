import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import TeamCard from "./components/TeamCard";
import { useEffect } from "react";

export default function Team() {
    const backgroundImage ='https://res.cloudinary.com/dsnz8adqi/image/upload/v1739290570/bg_zq3nvc.png'
      // Scroll to top on component mount
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <header>
            <NavBar />
            <Header 
                headerText="The Reinnova Team"
                middleText="Meet the inspiring leaders and dedicated team members at Reinnova Green."
                showSubscribeButton={false}
                showBouncingArrow={true}
                showHomeButtons={false}
                textColor='text-[#016E97]'
                backgroundImage={backgroundImage}
            />

        </header>

        <main className="px-4 mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <TeamCard 
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1743681333/tosa_oaa7mn.png"
                    name="TOSA OGBOMO"
                    role="MD/GROUP CEO , REINNOVA GREEN HOLDINGS LIMITED "
                />

                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1743681333/mbonu_smriok.png"
                    name="DR OKECHUKWU N MBONU"
                    role="CHAIRMAN, BOARD OF DIRECTORS"
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1743681333/calistus_pvssk7.png"
                    name="MR. CALLISTUS UDALOR"
                    role="MEMBER, BOARD OF DIRECTORS"
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1743681333/julia_njt99s.png"
                    name="Julia Oku Jacks"
                    role="MEMBER, BOARD OF DIRECTORS"
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1743681333/segun_rahnto.png"
                    name="SEGUN ONAKOMAIYA"
                    role="SYNERGY CAPITAL INVESTMENTS"
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1743681332/iredia_u6dzzu.png"
                    name="Isorae Iredia Christopher"
                    role="HEAD TECHNICAL PROJECTS, REINNOVA GREEN ECOPLAST "
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1743681332/olowo_ixqc8a.png"
                    name="Olowo Idowu Daniel"
                    role="Laminate Production Manager, ReInnova Green Packaging"
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1743681334/soba_akrwuf.png"
                    name="Soba Fubara- Abraham"
                    role="Chief Operating Officer- ReInnova Green Ecoplast"
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1743681332/peter_tlupne.png"
                    name="Peter Akinbola"
                    role="Group Head Maintenance - Reinnova Green Holdings."
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1743681332/adewale_tvhrhp.png"
                    name="ADEWALE AJITERU"
                    role="MAINTENANCE HEAD, Reinnova Green PACKAGING"
                />
                <TeamCard
                    imageSrc="https://res.cloudinary.com/dsnz8adqi/image/upload/v1743681332/andrew_yrwket.png"
                    name="Andrew Ugbo"
                    role="aluminium production Manager, Reinnova Green packaging"
                />
            </div>
        </main>

        <Footer />
    </div>
  )
}
