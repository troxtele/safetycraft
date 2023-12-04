import { TextRevealTW } from "@/components/TextRevealH1";
import AboutPageImage from "@/assets/img/about/whysafety.webp";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="privacy-policy relative">
      <div className="relative">
        <div className="items-left - absolute left-[1.5rem] top-2/3 z-10 flex transform flex-col gap-0 sm:left-[7%]">
          <TextRevealTW
            text="HIGH"
            type="h2"
            classNames="font-abnes leading-[0.9] text-2xl font-bold text-white sm:text-4xl md:text-5xl lg:text-3xl"
            animationDelayMs={0}
          />
          <TextRevealTW
            text="PERFORMANCE"
            type="h1"
            classNames="font-heavytitle leading-[0.9] font-extrabold text-primary-900 text-5xl xs:text-6xl sm:!text-7xl md:!text-8xl lg:!text-7xl -mt-1"
            animationDelayMs={0.3}
          />
          <TextRevealTW
            text="DESIGN"
            type="h2"
            classNames="font-abnes leading-[0.9] text-2xl font-bold text-white sm:text-4xl md:text-5xl lg:text-3xl"
            animationDelayMs={0}
          />
          {/* A scroll jumping span left bottom positioned that when is clicked it scrolls to the next section*/}
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <img src={AboutPageImage} alt="homepage" className="h-screen w-screen object-cover " />
          <motion.span
            animate={{ y: scrollY / 10 }}
            className={`y-10 max-w-h-[16rem] absolute -bottom-[8%] right-2 h-[18vw] w-[18vw] max-w-[16rem]  bg-[url("@/assets/img/logos/logo.png")] bg-contain bg-center bg-no-repeat md:-bottom-[9%] md:h-[15vw] md:w-[15vw] lg:-bottom-[10%] `}
          ></motion.span>
        </div>
        <motion.span
          animate={{ y: scrollY / 10 }}
          className="hover:text-primary-900s absolute bottom-2 left-5 animate-bounce cursor-pointer
                      text-xs font-extrabold text-white
                    "
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }}
        >
          SCROLL &#9759;
        </motion.span>
      </div>
      <div className="bg-white py-20 text-[1.1rem] font-semibold text-gray-900">
        <div className="relative m-auto w-full max-w-[60rem] px-6 2xl:mx-auto">
          <div className="points grid gap-16 sm:gap-20">
            <div className="point grid gap-4">
              {/* header */}
              <div className="header">
                <h3 className="text-xl font-bold">1. Collection of Information</h3>
              </div>
              <div className="sub">
                <div className="item">
                  <span>1.1</span> We gather certain information about users of the Website. This information includes:
                </div>
              </div>
              {/* list */}
              <ul className="list mt-2 grid gap-4">
                <li>
                  <span>(a)</span> personal information, provided through voluntary subscription to Our newsletter;
                </li>
                <li>
                  <span>(b)</span>personal information, provided to Us by You through any other method (including
                  without limitation correspondence and discussions);
                </li>
                <li>
                  <span>(c)</span> information collected by Us through click -tracking in relation to Your use of the
                  Website, including the content You upload and the content You access;
                </li>
                <li>
                  <span>(d)</span> aggregated data, which tracks traffic to the Website; and
                </li>
                <li>
                  <span>(e)</span> cookies, which are pieces of information transferred to Your computer hard drive for
                  record keeping (such as Your preferences on Our Website).
                </li>
              </ul>

              <div className="sub">
                <div className="item">
                  <span>1.2</span> Failure to provide necessary personal information when requested may result in
                  certain functions of the Website not being available to You.
                </div>

                <div className="item">
                  <span>1.3</span> You confirm that any personal information You provide is current, complete and
                  accurate at the time you provide it, and You agree to maintain and update this information as required
                  to keep it so.
                </div>
              </div>
            </div>

            <div className="point grid gap-4">
              {/* header */}
              <div className="header">
                <h3 className="text-xl font-bold">2. Use of Information</h3>
              </div>
              <div className="sub">
                <div className="item">
                  <span>2.1</span> Any personal information You provide may be used for the following purposes:
                </div>
              </div>

              {/* list */}
              <ul className="list mt-2 grid gap-4">
                <li>
                  <span>(a)</span>
                  <span>
                    to verify Your identity and/or the accuracy of that information (including using the information to
                    contact You);
                  </span>
                </li>
                {/* item */}
                <li>
                  <span>(b)</span>
                  <span>
                    to send You correspondence to Your nominated email address, including promotional material to inform
                    you any special offers or information that may help and support You with Your research and
                    purchasing decisions;
                  </span>
                </li>
                {/* item */}
                <li>
                  <span>(c)</span>
                  <span>
                    to gain feedback from You in order to better understand Our customer and how We continue to deliver
                    a class-leading product and service;
                  </span>
                </li>
                {/* item */}
                <li>
                  <span>(d)</span>
                  <span>to contact You in response to Your request to book a test drive or provide a quote;</span>
                </li>
                {/* item */}
                <li>
                  <span>(e)</span>
                  <span>responding to any queries and/or comments You have sent to Us;</span>
                </li>
                {/* item */}
                <li>
                  <span>(f)</span>
                  <span>such other use that You authorise.</span>
                </li>
              </ul>

              <div className="sub">
                <div className="item">
                  <span>2.2</span>
                  You will have the option to choose to not receive certain types of email communications from Us,
                  except for those that are absolutely necessary (including to provide you with details of any Quotes).
                  Emails will always contain a link at the bottom to be removed from our mailing list.
                </div>
              </div>
            </div>

            <div className="point grid gap-4">
              {/* header */}
              <div className="header">
                <h3 className="text-xl font-bold">3. Disclosure of Information</h3>
              </div>

              <div className="sub">
                <div className="item">
                  <span>3.1</span> You agree that We may disclose Your personal information (including, but not limited
                  to, Your name and contact details):
                </div>
              </div>

              {/* list */}
              <ul className="list mt-2 grid gap-4">
                {/* item */}
                <li>
                  <span>(a)</span>
                  <span>
                    to the relevant authorities, any internet search provider that You use to access the Website, and/or
                    the applicable intellectual property rights holders (or their representatives) if We consider you
                    are infringing the intellectual property rights of any person; and
                  </span>
                </li>

                {/* item */}
                <li>
                  <span>(b)</span>
                  <span>
                    where We consider in Our absolute discretion We are required to disclose Your personal information
                    in accordance with any applicable law, regulation, legal process or Government request.
                  </span>
                </li>
              </ul>
            </div>

            <div className="point grid gap-4">
              {/* header */}
              <div className="header">
                <h3 className="text-xl font-bold">4. Cookies and Tracking</h3>
              </div>

              <div className="sub">
                <div className="item">
                  <span>4.1</span>
                  We may use a cookie file containing information that can identify the computer You are working from.
                  This information will not identify You as an individual, as it only gives us details of your IP
                  address, PC platform (e.g. Windows or Mac), web browser and domain (whether You are accessing the
                  Website from within the country or elsewhere). We may use the information generated by cookies to:
                </div>
              </div>

              {/* list */}
              <ul className="list mt-2 grid gap-4">
                {/* item */}
                <li>
                  <span>(a)</span>
                  <span>
                    track traffic patterns to and from the Website including information like the pages You visit, the
                    time you spend on each page, the date and time of your visit, and referring pages (pages you came
                    from or go to);
                  </span>
                </li>

                {/* item */}
                <li>
                  <span>(b)</span>
                  <span>
                    use Google Remarketing in combination with Google Analytics to advertise online (third-party
                    vendors, including Google, show our advertisements on sites across the Internet). Third-party
                    vendors, including Google, use first-party cookies (such as Google Analytics cookie) and third-party
                    cookies (such as the DoubleClick cookie) together to inform, optimise, and serve advertisements
                    based on someone’s past visits to our Website. Users can opt out of Google Analytics for Display
                    Advertising and customise Google Display Network advertisements using the Ads Preferences Manager.
                  </span>
                </li>
              </ul>

              <div className="sub">
                <div className="item">
                  <span>4.2</span>
                  You can choose to refuse cookies by turning them off in your browser and/or deleting them from Your
                  hard drive. You do not need to have cookies turned on to browse the Website.
                </div>
              </div>
            </div>

            <div className="point grid gap-4">
              {/* header */}
              <div className="header">
                <h3 className="text-xl font-bold">5. Security</h3>
              </div>

              {/* list */}
              <div className="sub">
                {/* item */}
                <div className="item">
                  <span>5.1</span>
                  While we take strict precautions to protect Your personal information against unauthorised use or
                  disclosure, no data transmission over the Internet can be guaranteed to be completely secure. We
                  cannot ensure or warrant the security of any information You transmit or receive through the Website.
                  These activities are conducted at Your own risk.
                </div>
              </div>
            </div>
            <div className="point grid gap-4">
              {/* header */}
              <div className="header">
                <h3 className="text-xl font-bold">6. Changes to Policy</h3>
              </div>

              {/* sub */}
              <div className="sub">
                <div className="item">
                  <span>6.1</span> We reserve the right to change this policy at any time by notifying users of the
                  existence of a revised policy by updating the "last updated" date at the bottom of this page. By
                  continuing to use the Website, You agree to be abound by the amended policy. You should check from
                  time to time to see if the policy has changed or not.
                </div>
              </div>
            </div>
            <div className="point grid gap-4">
              {/* header */}
              <div className="header">
                <h3 className="text-xl font-bold">7. Holding, Correcting and Updating</h3>
              </div>

              {/* sub */}
              <div className="sub">
                <div className="item">
                  <span>7.1</span> Any personal information that you provide to us will be collected and held by us at
                  345 Bluff Road, Invercargill, Southland, New Zealand. Under the Privacy Act 1993 you have rights of
                  access to and correction of personal information that We hold.
                </div>
                <div className="item">
                  <span> 7.2</span> If you have any questions about how Our services work or regarding this statement,
                  <Link to="/contact" className="inline-block pl-2 text-primary-800">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
