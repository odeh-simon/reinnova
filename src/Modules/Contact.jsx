import Contact from "../components/Contact"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
export default function ContactUs() {
  return (
    <div className="w-full flex flex-col gap-8">
        <NavBar />
        <div className="w-[90%] mx-auto">
            <Contact />
        </div>
        <Footer />
    </div>
  )
}
