import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/icons/footer-logo.svg";
import dotIcon from '../assets/icons/dot-icon-white.svg';

const Footer = ({ stayConnectedText = "Stay Connected! Subscribe For The Latest Updates" }) => {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(pathname);
  const [isSubsidiariesDropDownOpen, setIsSubsidiariesDropDownOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleSubsidiariesDropDown = () => {
    setIsSubsidiariesDropDownOpen(!isSubsidiariesDropDownOpen);
  };

  const currentYear = new Date().getFullYear();

  // newsletter embed code
  useEffect(() => {
    const existingScript = document.querySelector('script[data-uid="77f3d4dfec"]');

    if (!existingScript) {
      const script = document.createElement("script");
      script.async = true;
      script.setAttribute("data-uid", "77f3d4dfec");
      script.src = "https://reinnova-green-holdings.kit.com/77f3d4dfec/index.js";
      document.getElementById("newsletter-embed").appendChild(script);
    }

    return () => {
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <footer className="bg-[#016E97] w-full py-6 text-white mt-6">
      {/* Subscribe Section */}
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-[20px] md:text-[30px] text-[#FCFFFF] font-[poppins] font-semibold text-center">
            {stayConnectedText}
          </h2>
          {/* subscribe button */}
          <div id="newsletter-embed" className=" w-full md:w-[70%] mx-auto">
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row item-start md:items-center justify-between my-10 md:border-t md:border-b md:border-[#FCFFFF]">
          <img
            src={logo}
            alt="Logo"
            className="w-[150px] h-auto mb-4 md:mb-0"
          />{" "}
          {/* Logo */}
          <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 xl:gap-[114px]">
            {[
              { name: "home", path: "/" },
              { name: "about", path: "/about-us" },
              { name: "blog", path: "/blog" },
              { name: "careers", path: "/careers" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative flex flex-col items-start md:items-center cursor-pointer"
                onClick={() => handleLinkClick(link.path)}
              >
                <div className="flex flex-col items-center">
                  {activeLink === link.path && (
                    <img src={dotIcon} alt="" className="text-center w-[10px] h-[10px]" />
                  )}
                  <span className="capitalize font-[poppins] text-xs md:text-[16px] font-medium text-[#FCFFFF]">
                    {link.name}
                  </span>
                  {activeLink === link.path && (
                    <span className="h-[7px] w-full bg-white rounded-[20px] mt-1"></span>
                  )}
                </div>
              </Link>
            ))}
            <div className="relative group">
              <div
                className="relative flex flex-col items-start md:items-center cursor-pointer"
                onClick={toggleSubsidiariesDropDown}
              >
                <div className="flex flex-col items-center">
                  {activeLink === "/green-packaging" || activeLink === '/green-ecoplast' || activeLink === '/first-aluminium' ?(
                    <img src={dotIcon} alt="" className="text-center w-[10px] h-[10px]" />
                  ):null}
                  <span className="capitalize font-[poppins] text-xs md:text-[16px] font-medium text-[#FCFFFF]">
                    Subsidiaries
                    <svg
                      className="inline w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                  {activeLink === "/green-packaging" || activeLink === '/green-ecoplast' || activeLink === '/first-aluminium' ?(
                    <span className="h-[7px] w-full bg-white rounded-[20px] mt-1"></span>
                  ):null}
                </div>
              </div>
              <ul className={`absolute top-full left-0 bg-[#DEF6FF] w-32 shadow-lg ${isSubsidiariesDropDownOpen ? 'block' : 'hidden'} group-hover:block`}>
                <li
                  className={`py-2 px-4 hover:bg-[#016E97] font-[poppins] text-[10px] text-[black] hover:border-b-2 pb-[2px] hover:border-[#016E97] border-b-2 ${
                    pathname === "/green-packaging"
                      ? "border-b-[7px] border-[#016E97]"
                      : "border-transparent"
                  } `}
                >
                  <Link to="/green-packaging" onClick={() => handleLinkClick('/green-packaging')} className="hover:text-white">Reinnova Green Packaging</Link>
                </li>
                <li
                  className={`py-2 px-4 hover:bg-[#016E97]  font-[poppins] text-[10px] text-black hover:border-b-2 pb-[2px] hover:border-[#016E97] border-b-2 ${
                    pathname === "/green-ecoplast"
                      ? "border-b-[7px] border-[#016E97]"
                      : "border-transparent"
                  } `}
                >
                  <Link to="/green-ecoplast" onClick={() => handleLinkClick('/green-ecoplast')} className="hover:text-white">Reinnova Green Ecoplast</Link>
                </li>
                <li
                  className={`py-2 px-4 hover:bg-[#016E97] font-[poppins] text-[10px] text-black hover:border-b-2 pb-[2px] hover:border-[#016E97] border-b-2 ${
                    pathname === "/first-aluminium"
                      ? "border-b-[7px] border-[#016E97]"
                      : "border-transparent"
                  } `}
                >
                  <Link to="/first-aluminium" onClick={() => handleLinkClick('/first-aluminium')} className="hover:text-white">First Aluminium</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 font-[poppins] text-xs md:text-sm font-medium text-[#FCFFFF] text-center md:text-left">
          <p>
            All rights reserved &copy;{currentYear} Reinnova Green Holdings - Building A
            Greener Future, One Product At A Time
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
