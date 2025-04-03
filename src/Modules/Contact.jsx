import { useEffect } from 'react';
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
export default function ContactUs() {
      // Scroll to top on component mount
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="w-full flex flex-col gap-8">
        <NavBar />
        <div className="w-[90%] mx-auto">
          {/* <iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__UAIGXZUNEdRRElWS0o0WDk2SUxDT0o5N05aU0lCMC4u&embed=true" frameBorder="0" marginWidth="0" marginHeight="0"  allowfullscreen webkitallowfullscreen mozallowfullscreen style={{border:'none', maxWidth:'100vw', maxHeight:'100vh' }}> </iframe> */}
            <Contact />
        </div>
        <Footer />
    </div>
  )
}
