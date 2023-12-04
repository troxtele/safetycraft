import { Outlet } from "react-router-dom";
import useScrollDirection from "@/hooks/useScrollDirection";
import FooterComponent from "./FooterComponent";
import { motion } from "framer-motion";
import { IconButton, Collapse, Navbar, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/img/logos/logo.png";

function MainNavigation() {
  const { visible, isTop } = useScrollDirection();
  const [openNav, setOpenNav] = useState(false);

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const handleOnClick = () => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));

    if (!visible) setOpenNav(false);

    return () => {
      window.removeEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    };
  }, [visible]);

  const navList = (
    <>
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography as="li" variant="small" color="blue-gray" className="text-title p-1 font-bold uppercase">
          <NavLink
            to="/boats"
            onClick={() => setOpenNav(false)}
            className={({ isActive }) => {
              return `group relative flex items-center transition-colors duration-300 ease-in-out hover:text-primary-700 ${
                isActive ? "text-primary-700 [&>span]:scale-x-100" : ""
              }`;
            }}
          >
            Boats
            <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 transform bg-black text-black transition-transform duration-300 ease-in-out group-hover:scale-x-100 "></span>
          </NavLink>
        </Typography>
        <Typography as="li" variant="small" color="blue-gray" className="text-title p-1 font-bold uppercase">
          <NavLink
            to="/about"
            onClick={() => setOpenNav(false)}
            className={({ isActive }) => {
              return `group relative flex items-center transition-colors duration-300 ease-in-out hover:text-primary-700 ${
                isActive ? "text-primary-700 [&>span]:scale-x-100" : ""
              }`;
            }}
          >
            About
            <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 transform bg-black text-black transition-transform duration-300 ease-in-out group-hover:scale-x-100  group-active:scale-x-100"></span>
          </NavLink>
        </Typography>
        <Typography as="li" variant="small" color="blue-gray" className="text-title p-1 font-bold uppercase">
          <NavLink
            to="/contact"
            onClick={() => setOpenNav(false)}
            className={({ isActive }) => {
              return `group relative flex items-center transition-colors duration-300 ease-in-out hover:text-primary-700 ${
                isActive ? "text-primary-700 [&>span]:scale-x-100" : ""
              }`;
            }}
          >
            Contact
            <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 transform bg-black text-black transition-transform duration-300 ease-in-out group-hover:scale-x-100  group-active:scale-x-100 "></span>
          </NavLink>
        </Typography>
        <div className="flex space-x-5 sm:justify-center">
          {/* <a
            href="/"
            target="_blank"
            className="text-gray-800 hover:text-primary-700"
          >
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
              <title>Facebook</title>
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                fill="currentColor"
              ></path>
            </svg>
          </a> */}
          <a
            href="https://www.instagram.com/safetycraft.official/"
            target="_blank"
            className="text-gray-800 hover:text-primary-700"
          >
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
              <title>Instagram</title>
              <path
                d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          {/* <a href="" target="_blank" className="text-gray-800 hover:text-primary-700">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
              <title>YouTube</title>
              <path
                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <a href="/" target="_blank" className="text-gray-800 hover:text-primary-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
              <path
                d="M20.447,20.452H16.893V14.883c0-1.328-.027-3.037-1.852-3.037-1.853,0-2.136,1.445-2.136,2.939v5.667H9.351V9h3.414v1.561h.046a3.745,3.745,0,0,1,3.37-1.85c3.6,0,4.267,2.37,4.267,5.455v6.286ZM5.337,7.433A2.064,2.064,0,1,1,7.4,5.368,2.062,2.062,0,0,1,5.337,7.433ZM7.119,20.452H3.555V9H7.119ZM22.225,0H1.771A1.75,1.75,0,0,0,0,1.729V22.271A1.749,1.749,0,0,0,1.771,24H22.222A1.756,1.756,0,0,0,24,22.271V1.729A1.756,1.756,0,0,0,22.222,0Z"
                fill="currentColor"
              ></path>
            </svg>
          </a> */}
        </div>
      </ul>
    </>
  );
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed ${!visible && !isTop ? "-top-32" : "top-0"} ${
          !isTop && visible ? "bg-white shadow-xl" : "bg-transparent"
        } 
        ${openNav ? "bg-white shadow-xl" : ""}
        z-50 m-auto flex h-14 w-screen flex-row-reverse items-center justify-between align-middle transition-all duration-500 md:h-20 lg:h-32 lg:hover:bg-white lg:hover:shadow-xl`}
      >
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none border-0 bg-transparent px-6 py-0 text-black shadow-none backdrop-blur-none backdrop-saturate-[none] md:px-12 lg:py-16">
          <div className="flex items-center justify-between text-blue-gray-900">
            <NavLink to="/" className={"flex items-center"}>
              <img src={Logo} alt="Logo" className="hidden w-12 p-2 sm:h-20 sm:w-20 md:inline-block lg:p-0" />
              <Typography
                className="mr-4 cursor-pointer py-1.5 font-abnes text-base font-medium !leading-[1] text-primary-700 sm:text-xl md:text-2xl xs:text-lg"
                onClick={() => setOpenNav(false)}
              >
                SaFETYcRAFT
              </Typography>
            </NavLink>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <IconButton
                variant="text"
                className="-mt-2 ml-auto h-5 w-5 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                <div
                  className="group flex h-12 w-12 flex-col items-center justify-center rounded border-black"
                  onClick={() => handleOnClick()}
                >
                  <div
                    className={`${genericHamburgerLine} ${
                      openNav
                        ? "translate-y-3 rotate-45 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                    }`}
                  />
                  <div
                    className={`${genericHamburgerLine} ${
                      openNav ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                    }`}
                  />
                  <div
                    className={`${genericHamburgerLine} ${
                      openNav
                        ? "-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                    }`}
                  />
                </div>
              </IconButton>
            </div>
          </div>
          <Collapse
            open={openNav}
            className={`absolute left-0 top-full my-3 bg-white px-6 md:my-0 ${openNav ? "shadow-xl" : ""}`}
          >
            {navList}
          </Collapse>
        </Navbar>
      </motion.header>

      <Outlet />
      <FooterComponent />
    </>
  );
}

export default MainNavigation;
