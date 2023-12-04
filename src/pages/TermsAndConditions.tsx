import { TextRevealTW } from "@/components/TextRevealH1";
import AboutPageImage from "@/assets/img/about/whysafety.webp";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TermsAndConditions() {
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
    <div className="terms-and-conditions relative overflow-hidden">
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
          <p>
            Thank you for visiting{" "}
            <a className="text-primary-800" href="#">
              www.safetycraft.com{" "}
            </a>{" "}
            ("Website”). This Website is operated by Stabicraft® Marine Limited (“We”, “Us”, or Our”). You acknowledge
            that by accessing and using this Website, including any information, reports or other related materials
            regarding our Stabicraft® boats ("Products") that You may obtain through the Website, You agree to be bound
            by the provisions of these terms and conditions (“Terms and Conditions”) dealing with Your use of the
            Website. We may change these Terms and Conditions and give notice to You by posting amended Terms and
            Conditions on the Website at any time.
          </p>
          <div className="points mt-12 grid gap-12">
            <div className="point grid gap-4">
              {/* header */}
              <div className="header">
                <h3 className="text-xl font-bold">1. Website Content and Security</h3>
              </div>
              {/* sub */}
              <div className="sub">
                {/* item */}
                <div className="item">
                  <span>1.1</span>Our Website provides You with information regarding Our Products, including how you
                  can find a dealer to purchase Our Products. We also provide services to You in order to book a test
                  drive of Our Products, Get a Quote for Our Products and register the warranty for Your Products. We
                  will use Our best endeavours to make sure all information on the Website is accurate and up to date.
                </div>
                {/* item */}
                <div className="item">
                  <span>1.2</span>All Quotes provided through the Website facility are valid for a one month period or
                  the date as stated in the Quote emailed to You, whichever is the latter. All Quotes are including
                  Goods and Services Tax.
                </div>
                {/* item */}
                <div className="item">
                  <span>1.3</span>Our Stabicraft® Warranty is valid for three years. Nothing in this Warranty purports
                  to modify or exclude the conditions, warranties and undertakings, and other legal rights, under the
                  New Zealand Consumer Guarantees Act and other laws. This Warranty gives you additional protection for
                  You Product, and identifies a preferred approach to resolving warranty claims.
                </div>
                {/* item */}
                <div className="item">
                  <span>1.4</span>By subscribing to Our newsletter, you agree to receive email communications from Us
                  about the Products and other advertising and promotional materials We believe may interest You. Please
                  refer to Our <Link to="/privacy-policy" className="text-primary-800 mx-2">Privacy Policy</Link> for further conditions relating to Your personal information.
                  Our Privacy Policy is incorporated into these Terms.
                </div>
                {/* item */}
                <div className="item">
                  <span>1.5</span>You agree to use the Website solely for Your own use and to refrain from using the
                  Website for any other purpose.
                </div>
                {/* item */}
                <div className="item">
                  <span>1.6</span> You must use the Website responsibly, lawfully and in good faith. You must refrain
                  from any acts or omissions which are misleading or unlawful. You may not violate or attempt to violate
                  the Website in any way, including but not limited to:
                </div>
              </div>

              {/* list */}
              <ul className="list mt-2 grid gap-4">
                <li>
                  <span>(a)</span>attempting to probe, scan, or test the vulnerability of any system, subsystem or
                  network;
                </li>
                <li>
                  <span>(b)</span> tampering, hacking, modifying or otherwise corrupting or breaching security or
                  authentication measures without proper authorization;
                </li>
                <li>
                  <span>(c)</span> transmitting material that contains viruses, Trojan horses, worms, time bombs,
                  cancelbots or other computer programming routines or engines with the intent or effect of damaging,
                  destroying, disrupting or otherwise impairing a computer’s functionality or the Website.
                </li>
              </ul>
            </div>
            <div className="point grid gap-4">
              {/* header */}
              <div className="header">
                <h3 className="text-xl font-bold">2. Intellectual Property </h3>
              </div>
              {/* sub */}
              <div className="sub">
                {/* item */}
                <div className="item">
                  <span>2.1</span>All copyright, trade marks and other intellectual property rights subsisting in or
                  used in connection with the Website and the Products are and will remain Our sole property.
                  STABICRAFT® is our trade mark. All rights in this trade mark are expressly reserved.
                </div>
                <div className="item">
                  {" "}
                  <span>2.2</span>You may not remove Our trade marks, copyright symbols, or any other statement or
                  device which asserts Our intellectual property rights in relation to the Website, the Products, or
                  from any materials You download from the Website
                </div>
              </div>
            </div>

            <div className="point grid gap-4">
              {/* header */}
              <div className="header">
                <h3 className="text-xl font-bold">3. Links to and from Other Websites</h3>
              </div>
              {/* sub */}
              <div className="sub">
                {/* item */}
                <div className="item">
                  <span>3.1</span>Throughout Our Website You may find links to third party websites. The provision of a
                  link to such a website does not mean that We endorse that website. If You visit any website via a link
                  on this Website You do so at Your own risk.
                </div>
                {/* item */}
                <div className="item">
                  <span>3.2</span>Any party wishing to link to Our Website is entitled to do so provided that the
                  conditions below are observed:
                </div>
              </div>

              {/* list */}
              <ul className="list mt-2 grid gap-4">
                <li>
                  <span>(a)</span>You do not seek to imply that We are endorsing the services or products of another
                  party unless this has been agreed with Us in writing;
                </li>
                <li>
                  <span>(b)</span> You do not misrepresent Your relationship with Our Website; and
                </li>
                <li>
                  <span>(c)</span> The Website from which You link to this Website does not contain offensive or
                  otherwise controversial content or, content that infringes any intellectual property rights or rights
                  of a third party.
                </li>
              </ul>

              {/* sub */}
              <div className="sub">
                {/* item */}
                <div className="item">
                  <span>1.3</span>By linking this Website in breach of this clause You shall indemnify Us for any loss
                  or damage suffered by Us as a result of such linking.
                </div>
              </div>
            </div>

            <div className="point grid gap-4">
              {/* header */}
              <div className="header">
                <h3 className="text-xl font-bold">4. Warranties and Disclaimers</h3>
              </div>
              {/* sub */}
              <div className="sub">
                {/* item */}
                <div className="item">
                  <span>4.1</span>To the maximum extent permitted by law, the Website is provided on an “as is” basis,
                  without any warranty of any kind either express or implied including but not limited as to warranties
                  of merchantability, fitness for a particular purpose, title, and non-infringement. We do not warrant
                  that the Website is error free, that any information provided to us from third parties is accurate, or
                  that any services provided in relation to the Website will be uninterrupted.
                </div>
                {/* item */}
                <div className="item">
                  <span>4.2</span>You agree to indemnify Us and Our affiliates, subsidiaries, directors, officers,
                  employees and agents against all actions, proceedings, costs, claims, demands, liabilities and
                  expenses whatsoever arising from Your use of the Website.
                </div>
              </div>
            </div>
            <div className="point grid gap-4">
              {/* header */}
              <div className="header">
                <h3 className="text-xl font-bold">5. Risk and Liability</h3>
              </div>
              {/* sub */}
              <div className="sub">
                {/* item */}
                <div className="item">
                  <span>5.1</span>You accept all risk and any liability arising from Your use of the Website. In no
                  event will We be liable to You or any other person for any lost profits, lost savings, lost data, or
                  damages (including special, direct, indirect, punitive, consequential, or incidental damages) or any
                  claims, proceedings, costs, demands, liabilities and expenses incurred by You arising out of or
                  relating to Your use of the Website, whether in contract, tort (including negligence) or equity.
                </div>
              </div>
            </div>
            <div className="point grid gap-4">
              {/* header */}
              <div className="header">
                <h3 className="text-xl font-bold">6. Governing Law and Disputes</h3>
              </div>
              {/* sub */}
              <div className="sub">
                {/* item */}
                <div className="item">
                  <span>6.1</span>These Terms and Conditions will be construed in accordance with the laws of New
                  Zealand, and in terms of the enforceability of these Terms and Conditions shall be deemed “in writing”
                  and “accepted” by both parties.
                </div>
                {/* item */}
                <div className="item">
                  <span>6.2</span>Any disputes arising out of this these Terms and Conditions or their subject matter
                  shall be referred to and finally resolved by arbitration in New Zealand in accordance with New Zealand
                  law. The arbitration will be by one arbitrator, to be agreed upon by the parties. If the parties fail
                  to agree upon an arbitrator within 21 (twenty-one) days, an arbitrator will be appointed by the
                  President of the Arbitrator’s and Mediator’s Institute of New Zealand Inc and the arbitration will be
                  held in Auckland, New Zealand, in accordance with the New Zealand Arbitration Act 1996. Nothing in
                  these Terms and Conditions prevents a party from issuing proceedings in relation to any dispute where
                  the nature of the dispute is such that the party requires urgent interim relief.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
