import { Link } from "react-router-dom";
import Logo from "@/assets/img/logos/logo.png";

const FooterComponent = () => {
  return (
    <footer className="bg-[#242424] ">
      <div className="mx-auto w-full max-w-screen-2xl px-6 py-12 lg:py-24">
        <div className="flex flex-row flex-wrap md:justify-between lg:flex-row-reverse">
          <div className="mb-6 justify-end sm:flex-[1_1_400px]">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Logo" className="w-12 sm:h-20 sm:w-20" />
              <span className="ml-2 font-abnes text-[0.9rem] font-bold text-gray-100 sm:text-xl xs:text-base">
                SafeTyCraft
              </span>
            </Link>
          </div>
          <div className="grid flex-[3_1_auto] grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-200 dark:text-white">BOATS</h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  {/*TODO: Change redirection to boat model*/}
                  <a href="/boats" className="hover:text-primary-700 ">
                    XF24
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-200 dark:text-white">WHY US</h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/about#hdpesection" className="hover:text-primary-700 ">
                    Hdpe
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/about#crewsection" className="hover:text-primary-700 ">
                    Crew
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/about#footprintsection" className="hover:text-primary-700 ">
                    Footprint
                  </a>
                </li>
              </ul>
            </div>
            <div>
              {/* TODO: Add contact info */}
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-200 dark:text-white">CONTACT</h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="tel:+34662646521"
                    className="transition-colors duration-200 ease-in-out hover:text-primary-700"
                  >
                    +34 662 646 521
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="mailto:inquiries@safetycraft.net"
                    className="transition-colors duration-200 ease-in-out hover:text-primary-700 break-words"
                  >
                    inquiries@safetycraft.net
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/Prz52riF2EyT7jtPA"
                    className="
                              transition-colors
                              duration-200
                              ease-in-out
                              hover:text-primary-700
                            "
                  >
                    Carrer Gremi de Sabaters, 17, A, 07009 Palma, Balearic Islands
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-24 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-20" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2023{" "}
            <a href="/" className="text-title hover:text-primary-700 ">
              SafetyCraft™
            </a>
            . All Rights Reserved.
          </span>

          <div className="links flex gap-5 text-gray-400">
            <Link to="/terms-and-conditions" className=" transition-all duration-200 hover:text-white">
              Terms and conditions
            </Link>
            <Link to="/privacy-policy" className=" transition-all duration-200 hover:text-white">
              Privacy Policy
            </Link>
          </div>
          <div className="mt-4 flex space-x-5 sm:mt-0 sm:justify-center">
            {/*  <a href="/" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-primary-700">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
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
              className="text-gray-500 hover:text-gray-900 dark:hover:text-primary-700"
            >
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                <title>Instagram</title>
                <path
                  d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            {/* <a href="/" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-primary-700">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                <title>YouTube</title>
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a href="/" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-primary-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  d="M20.447,20.452H16.893V14.883c0-1.328-.027-3.037-1.852-3.037-1.853,0-2.136,1.445-2.136,2.939v5.667H9.351V9h3.414v1.561h.046a3.745,3.745,0,0,1,3.37-1.85c3.6,0,4.267,2.37,4.267,5.455v6.286ZM5.337,7.433A2.064,2.064,0,1,1,7.4,5.368,2.062,2.062,0,0,1,5.337,7.433ZM7.119,20.452H3.555V9H7.119ZM22.225,0H1.771A1.75,1.75,0,0,0,0,1.729V22.271A1.749,1.749,0,0,0,1.771,24H22.222A1.756,1.756,0,0,0,24,22.271V1.729A1.756,1.756,0,0,0,22.222,0Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
