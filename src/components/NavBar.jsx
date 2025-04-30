import logo from "../assets/icons/logo.svg";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import "../components/styles/NavBar.css";
import { useNavigate } from "react-router-dom";
import dotIcon from "../assets/icons/dot-icon.svg";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [issubsidiariesDropDownOpen, setIsSubsidiariesDropDown] =
    useState(false);
  const [isAboutDropDownOpen, setIsAboutDropDown] = useState(false);
  const { pathname } = useLocation();

  const navigate = useNavigate();

  // State to manage sticky and background change
  const [isSticky, setIsSticky] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close dropdowns when menu is closed
    if (!isMenuOpen) {
      setIsSubsidiariesDropDown(false);
      setIsAboutDropDown(false);
    }
  };

  // Function to toggle the Projects dropdown state
  const togglesubsidiariesDropDown = () => {
    setIsSubsidiariesDropDown(!issubsidiariesDropDownOpen);
  };
  const toggleAboutDropDown = () => {
    setIsAboutDropDown(!isAboutDropDownOpen);
  };

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Check if user has scrolled enough to make the navbar sticky
      setIsSticky(scrollTop > 0);
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up: remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="flex justify-between lg:justify-around items-center w-[100%] pr-8 mx-auto h-[5rem] py-[1rem]">
        <div className="flex items-center">
          <div className="pt-[1rem]">
            <img
              className="w-[200px] h-[200px] lg:w-[300px] lg:h-[190px]"
              alt="logo"
              src={logo}
            />
          </div>
        </div>
        <div className="lg:hidden">
          {/* Hamburger menu button */}
          <button className="hamburger-menu" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#000"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            )}
          </button>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="mobile-menu bg-black z-50 w-full flex h-[100vh]">
              <ul className="flex flex-col gap-4">
                <li
                  className={`lg:inline lg:px-1 font-[poppins] text-[18px] text-[#016E97] hover:border-b-2 pb-[2px] hover:border-[white] border-b-2 ${
                    pathname === "/"
                      ? "border-b-[7px] border-[#016E97]"
                      : "border-transparent"
                  } `}
                >
                  <Link to="/">Home</Link>
                </li>

                <li className="lg:inline lg:px-1 font-[poppins] text-[18px] text-[#016E97] hover:border-b-2 pb-[2px] border-transparent relative">
                  <button onClick={toggleAboutDropDown}>
                    About Us{" "}
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
                  </button>
                  {isAboutDropDownOpen && (
                    <ul className="ml-4 ">
                      <li
                        className={`py-2 px-4 hover:bg-blue-800 font-[poppins] text-[14px] text-[#016E97] hover:border-b-2 pb-[2px] hover:border-[white] border-b-2 ${
                          pathname === "/about-us"
                            ? "border-b-[7px] border-[#016E97]"
                            : "border-transparent"
                        } `}
                      >
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li
                        className={`py-2 px-4 hover:bg-blue-800 font-[poppins] text-[14px] text-[#016E97] hover:border-b-2 pb-[2px] hover:border-[white] border-b-2 ${
                          pathname === "/team"
                            ? "border-b-[7px] border-[#016E97]"
                            : "border-transparent"
                        } `}
                      >
                        <Link to="/team">Our Team</Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="lg:inline lg:px-1 font-[poppins] text-[18px] text-[#016E97] hover:border-b-2 pb-[2px] border-transparent relative">
                  <button onClick={togglesubsidiariesDropDown}>
                    Our Subsidiaries{" "}
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
                  </button>
                  {issubsidiariesDropDownOpen && (
                    <ul className="ml-4 ">
                      <li
                        className={`py-2 px-4 hover:bg-blue-800 font-[poppins] text-[14px] text-[#016E97] hover:border-b-2 pb-[2px] hover:border-[white] border-b-2 ${
                          pathname === "/green-packaging"
                            ? "border-b-[7px] border-[#016E97]"
                            : "border-transparent"
                        } `}
                      >
                        <Link to="/green-packaging">
                          Reinnova Green Packaging
                        </Link>
                      </li>
                      <li
                        className={`py-2 px-4 hover:bg-blue-800 font-[poppins] text-[14px] text-[#016E97] hover:border-b-2 pb-[2px] hover:border-[white] border-b-2 ${
                          pathname === "/green-ecoplast"
                            ? "border-b-[7px] border-[#016E97]"
                            : "border-transparent"
                        } `}
                      >
                        <Link to="/green-ecoplast">
                          Reinnova Green Ecoplast
                        </Link>
                      </li>
                      <li
                        className={`py-2 px-4 hover:bg-blue-800 font-[poppins] text-[14px] text-[#016E97] hover:border-b-2 pb-[2px] hover:border-[white] border-b-2 ${
                          pathname === "/first-aluminium"
                            ? "border-b-[7px] border-[#016E97]"
                            : "border-transparent"
                        } `}
                      >
                        <Link to="/first-aluminium">First Aluminium</Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li
                  className={`lg:inline lg:px-1 font-[poppins] text-[18px] text-[#016E97] hover:border-b-2 pb-[2px] hover:border-[white] border-b-2 ${
                    pathname === "/blog"
                      ? "border-b-[7px] border-[#016E97]"
                      : "border-transparent"
                  } `}
                >
                  <Link to="/blog">Blog</Link>
                </li>
                <li
                  className={`lg:inline lg:px-1 font-[poppins] text-[18px] text-[#016E97] hover:border-b-2 pb-[2px] hover:border-[white] border-b-2 ${
                    pathname === "/career"
                      ? "border-b-[7px] border-[#016E97]"
                      : "border-transparent"
                  } `}
                >
                  <Link to="/career">Carrer</Link>
                </li>
             
              </ul>
              <div className="w-[50%] mt-4">
                <Button
                  label="Contact Us"
                  onClick={() => navigate("/contact-us")}
                />
              </div>
            </div>
          )}
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm">
          <ul className="lg:grid grid-flow-col gap-[20px] items-center">
            <li
              className={`lg:inline md:px-1 font-[poppins] text-base text-[#016E97] pb-[2px] `}
            >
              <div className="flex flex-col items-center">
                {pathname === "/" ? (
                  <img
                    src={dotIcon}
                    alt=""
                    className="text-center w-[10px] h-[10px]"
                  />
                ) : null}
                <Link to="/">Home</Link>
                {pathname === "/" ? (
                  <span className="h-[7px] w-full bg-[#016E97] rounded-[20px]"></span>
                ) : null}
              </div>
            </li>

            <li
              className="lg:inline md:px-1 font-[poppins] text-base text-[#016E97] hover:border-b-2 pb-[2px] border-transparent relative"
              onMouseEnter={() => setIsAboutDropDown(true)}
              onMouseLeave={() => setIsAboutDropDown(false)}
            >
              <button className="cursor-pointer flex flex-col items-center">
                {pathname === "/about-us" ||
                pathname === "/team" ? (
                  <img
                    src={dotIcon}
                    alt=""
                    className="text-center w-[10px] h-[10px]"
                  />
                ) : null}
                <div className="flex items-center gap-1">
                  <span>About Us </span>
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
                </div>
                {pathname === "/about-us" ||
                pathname === "/team" ? (
                  <span className="h-[7px] w-full bg-[#016E97] rounded-[20px]"></span>
                ) : null}
              </button>
              {isAboutDropDownOpen && (
                <ul className="absolute top-full left-0 bg-[#DEF6FF] w-32 shadow-lg">
                  <li
                    className={`py-2 px-4 hover:bg-[#016E97] font-[poppins] text-[16px] text-[black] hover:border-b-2 pb-[2px] hover:border-[#016E97] border-b-2 ${
                      pathname === "/about-us"
                        ? "border-b-[7px] border-[#016E97]"
                        : "border-transparent"
                    } `}
                  >
                    <Link to="/about-us" className="hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li
                    className={`py-2 px-4 hover:bg-[#016E97]  font-[poppins] text-[16px] text-black hover:border-b-2 pb-[2px] hover:border-[#016E97] border-b-2 ${
                      pathname === "/team"
                        ? "border-b-[7px] border-[#016E97]"
                        : "border-transparent"
                    } `}
                  >
                    <Link to="/team" className="hover:text-white">
                      Our Team
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              className="lg:inline md:px-1 font-[poppins] text-base text-[#016E97] hover:border-b-2 pb-[2px] border-transparent relative"
              onMouseEnter={() => setIsSubsidiariesDropDown(true)}
              onMouseLeave={() => setIsSubsidiariesDropDown(false)}
            >
              <button className="cursor-pointer flex flex-col items-center">
                {pathname === "/green-packaging" ||
                pathname === "/green-ecoplast" ||
                pathname === "/first-aluminium" ? (
                  <img
                    src={dotIcon}
                    alt=""
                    className="text-center w-[10px] h-[10px]"
                  />
                ) : null}
                <div className="flex items-center gap-1">
                  <span>Our Subsidiaries </span>
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
                </div>
                {pathname === "/green-packaging" ||
                pathname === "/green-ecoplast" ||
                pathname === "/first-aluminium" ? (
                  <span className="h-[7px] w-full bg-[#016E97] rounded-[20px]"></span>
                ) : null}
              </button>
              {issubsidiariesDropDownOpen && (
                <ul className="absolute top-full left-0 bg-[#DEF6FF] w-32 shadow-lg">
                  <li
                    className={`py-2 px-4 hover:bg-[#016E97] font-[poppins] text-xs text-[black] hover:border-b-2 pb-[2px] hover:border-[#016E97] border-b-2 ${
                      pathname === "/green-packaging"
                        ? "border-b-[7px] border-[#016E97]"
                        : "border-transparent"
                    } `}
                  >
                    <Link to="/green-packaging" className="hover:text-white">
                      Reinnova Green Packaging
                    </Link>
                  </li>
                  <li
                    className={`py-2 px-4 hover:bg-[#016E97]  font-[poppins] text-xs text-black hover:border-b-2 pb-[2px] hover:border-[#016E97] border-b-2 ${
                      pathname === "/green-ecoplast"
                        ? "border-b-[7px] border-[#016E97]"
                        : "border-transparent"
                    } `}
                  >
                    <Link to="/green-ecoplast" className="hover:text-white">
                      Reinnova Green Ecoplast
                    </Link>
                  </li>
                  <li
                    className={`py-2 px-4 hover:bg-[#016E97]  font-[poppins] text-xs text-black hover:border-b-2 pb-[2px] hover:border-[#016E97] border-b-2 ${
                      pathname === "/first-aluminium"
                        ? "border-b-[7px] border-[#016E97]"
                        : "border-transparent"
                    } `}
                  >
                    <Link to="/first-aluminium" className="hover:text-white">
                      First Aluminium
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              className={`lg:inline md:px-1 font-[poppins] text-base text-[#016E97] pb-[2px]`}
            >
              <div className="flex flex-col items-center">
                {pathname === "/blog" ? (
                  <img
                    src={dotIcon}
                    alt=""
                    className="text-center w-[10px] h-[10px]"
                  />
                ) : null}
                <Link to="/blog">Blog</Link>
                {pathname === "/blog" ? (
                  <span className="h-[7px] w-full bg-[#016E97] rounded-[20px]"></span>
                ) : null}
              </div>
            </li>
            <li
              className={`lg:inline md:px-1 font-[poppins] text-base text-[#016E97] pb-[2px]  `}
            >
              <div className="flex flex-col items-center">
                {pathname === "/career" ? (
                  <img
                    src={dotIcon}
                    alt=""
                    className="text-center w-[10px] h-[10px]"
                  />
                ) : null}
                <Link to="/career">Career</Link>
                {pathname === "/career" ? (
                  <span className="h-[7px] w-full bg-[#016E97] rounded-[20px]"></span>
                ) : null}
              </div>
            </li>
          </ul>

          <div className="hidden lg:flex items-center">
            <Button
              label="Contact Us"
              onClick={() => navigate("/contact-us")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
