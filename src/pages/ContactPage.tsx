import { motion } from "framer-motion";
import CONTACTPAGEVIDEO from "@/assets/contactpage.mp4";
import { useEffect, useState } from "react";

const ContactPage = () => {
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
    <>
      <div className="relative">
        <div className="relative flex flex-col items-center justify-center">
          <div className="items-left absolute left-[1.5rem] top-2/3 z-10 flex transform flex-col sm:left-[7%] ">
            {/* <TextRevealTW
              text="CONTACT US"
              type="h1"
              classNames="font-heavytitle leading-[0.9] font-extrabold  text-primary-900 text-4xl xs:text-5xl sm:!text-6xl md:!text-7xl lg:!text-7xl -mt-1"
              animationDelayMs={0.3}
            /> */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="rounded border-2 bg-white bg-opacity-10 px-4 py-2 font-heavytitle text-3xl font-bold text-primary-800 transition-colors hover:bg-primary-800 hover:text-white md:text-5xl lg:text-7xl"
              onClick={() => {
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
              }}
            >
              CONTACT US
            </motion.button>
          </div>
          <video className="-top-32 left-0 z-[-1] h-screen w-screen object-cover" autoPlay muted loop>
            <source src={CONTACTPAGEVIDEO} type="video/mp4" className="h-screen w-screen object-cover" />
          </video>
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
          <motion.span
            animate={{ y: scrollY / 10 }}
            className={`y-10 max-w-h-[16rem] absolute -bottom-[8%] right-2 h-[18vw] w-[18vw] max-w-[16rem]  -translate-y-1/4 bg-[url("@/assets/img/logos/logo.png")] bg-contain bg-center bg-no-repeat  md:-bottom-[9%] md:h-[15vw] md:w-[15vw] lg:-bottom-[10%]`}
          ></motion.span>
        </div>
        <div className="mx-auto bg-white py-24 md:px-6">
          <div className="container mx-auto">
            <div className="font mb-20 flex max-w-[30rem] flex-col justify-start px-6 xl:px-0">
              <p className="font-sans text-2xl font-semibold text-black">
                Feel free to reach out to SafetyCraft for inquiries, quotes, or to discuss your specific boat building
                needs.
              </p>
            </div>
            <section className="bg-white">
              <div className="dark:bg-neutral-700 block rounded-lg shadow-[0_2px_20px_20px_rgba(0,0,0,0.07),0_10px_20px_0px_rgba(0,0,0,0.04)]">
                <div className="flex flex-wrap items-center">
                  <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                    <div className="h-[500px] w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.273837020769!2d2.6671119764095637!3d39.59851340503161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297930d3ec627c7%3A0xe131376b59de12c8!2sSafetyCraft!5e0!3m2!1ses!2ses!4v1697551210391!5m2!1ses!2ses"
                        className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-bl-lg lg:rounded-tr-none"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                    <div className="flex flex-wrap px-6 pb-12 pt-12 sm:px-3 md:pb-0 lg:pt-0">
                      <div className="mb-12 w-full shrink-0 grow-0 basis-auto sm:px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                        <div className="flex items-start">
                          <div className="shrink-0">
                            <div className="text-primary inline-block rounded-md bg-primary-700 p-4">
                              <a href="tel:+34662646521">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <a
                              href="tel:+34662646521"
                              className="text-gray-800
                              transition-colors
                              duration-200
                              ease-in-out
                              hover:text-primary-700
                            "
                            >
                              <p className="mb-2 font-title text-2xl font-bold uppercase text-primary-700">Phone</p>
                              +34 662 646 521
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mb-12 w-full shrink-0 grow-0 basis-auto sm:px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                        <div className="flex items-start">
                          <div className="shrink-0">
                            <div className="text-primary inline-block rounded-md bg-primary-700 p-4">
                              <a href="mailto:inquiries@safetycraft.net">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <a
                              href="mailto:inquiries@safetycraft.net"
                              className="text-gray-800
                              transition-colors
                              duration-200
                              ease-in-out
                              hover:text-primary-700
                            "
                            >
                              <p className="mb-2 font-title text-2xl font-bold uppercase text-primary-700">Mail</p>
                              inquiries@safetycraft.net
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mb-12 w-full shrink-0 grow-0 basis-auto sm:px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
                        <div className="align-start flex">
                          <div className="shrink-0">
                            <div className="text-primary inline-block rounded-md bg-primary-700 p-4">
                              <a href="https://maps.app.goo.gl/Prz52riF2EyT7jtPA">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <a
                              href="https://maps.app.goo.gl/Prz52riF2EyT7jtPA"
                              className="
                              text-gray-800
                              transition-colors
                              duration-200
                              ease-in-out
                              hover:text-primary-700
                            "
                            >
                              <p className="mb-2 font-title text-2xl font-bold uppercase text-primary-700">Adress</p>
                              Carrer Gremi de Sabaters, 17, A, 07009 Palma, Balearic Islands
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="w-full shrink-0 grow-0 basis-auto sm:px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                        <div className="align-start flex">
                          <div className="shrink-0">
                            <div className="text-primary inline-block rounded-md bg-primary-700 p-4">
                              <a href="https://wa.me/34662646521">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  x="0px"
                                  y="0px"
                                  width="24"
                                  height="24"
                                  viewBox="0,0,256,256"
                                >
                                  <g
                                    fill="#ffffff"
                                    fill-rule="nonzero"
                                    stroke="none"
                                    stroke-width="1"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="10"
                                    stroke-dasharray=""
                                    stroke-dashoffset="0"
                                    font-family="none"
                                    font-weight="none"
                                    font-size="none"
                                    text-anchor="none"
                                  >
                                    <g transform="scale(5.12,5.12)">
                                      <path d="M25,2c-12.69047,0 -23,10.30953 -23,23c0,4.0791 1.11869,7.88588 2.98438,11.20898l-2.94727,10.52148c-0.09582,0.34262 -0.00241,0.71035 0.24531,0.96571c0.24772,0.25536 0.61244,0.35989 0.95781,0.27452l10.9707,-2.71875c3.22369,1.72098 6.88165,2.74805 10.78906,2.74805c12.69047,0 23,-10.30953 23,-23c0,-12.69047 -10.30953,-23 -23,-23zM25,4c11.60953,0 21,9.39047 21,21c0,11.60953 -9.39047,21 -21,21c-3.72198,0 -7.20788,-0.97037 -10.23828,-2.66602c-0.22164,-0.12385 -0.48208,-0.15876 -0.72852,-0.09766l-9.60742,2.38086l2.57617,-9.19141c0.07449,-0.26248 0.03851,-0.54399 -0.09961,-0.7793c-1.84166,-3.12289 -2.90234,-6.75638 -2.90234,-10.64648c0,-11.60953 9.39047,-21 21,-21zM16.64258,13c-0.64104,0 -1.55653,0.23849 -2.30859,1.04883c-0.45172,0.48672 -2.33398,2.32068 -2.33398,5.54492c0,3.36152 2.33139,6.2621 2.61328,6.63477h0.00195v0.00195c-0.02674,-0.03514 0.3578,0.52172 0.87109,1.18945c0.5133,0.66773 1.23108,1.54472 2.13281,2.49414c1.80347,1.89885 4.33914,4.09336 7.48633,5.43555c1.44932,0.61717 2.59271,0.98981 3.45898,1.26172c1.60539,0.5041 3.06762,0.42747 4.16602,0.26563c0.82216,-0.12108 1.72641,-0.51584 2.62109,-1.08203c0.89469,-0.56619 1.77153,-1.2702 2.1582,-2.33984c0.27701,-0.76683 0.41783,-1.47548 0.46875,-2.05859c0.02546,-0.29156 0.02869,-0.54888 0.00977,-0.78711c-0.01897,-0.23823 0.0013,-0.42071 -0.2207,-0.78516c-0.46557,-0.76441 -0.99283,-0.78437 -1.54297,-1.05664c-0.30567,-0.15128 -1.17595,-0.57625 -2.04883,-0.99219c-0.8719,-0.41547 -1.62686,-0.78344 -2.0918,-0.94922c-0.29375,-0.10568 -0.65243,-0.25782 -1.16992,-0.19922c-0.51749,0.0586 -1.0286,0.43198 -1.32617,0.87305c-0.28205,0.41807 -1.4175,1.75835 -1.76367,2.15234c-0.0046,-0.0028 0.02544,0.01104 -0.11133,-0.05664c-0.42813,-0.21189 -0.95173,-0.39205 -1.72656,-0.80078c-0.77483,-0.40873 -1.74407,-1.01229 -2.80469,-1.94727v-0.00195c-1.57861,-1.38975 -2.68437,-3.1346 -3.0332,-3.7207c0.0235,-0.02796 -0.00279,0.0059 0.04687,-0.04297l0.00195,-0.00195c0.35652,-0.35115 0.67247,-0.77056 0.93945,-1.07812c0.37854,-0.43609 0.54559,-0.82052 0.72656,-1.17969c0.36067,-0.71583 0.15985,-1.50352 -0.04883,-1.91797v-0.00195c0.01441,0.02867 -0.11288,-0.25219 -0.25,-0.57617c-0.13751,-0.32491 -0.31279,-0.74613 -0.5,-1.19531c-0.37442,-0.89836 -0.79243,-1.90595 -1.04102,-2.49609v-0.00195c-0.29285,-0.69513 -0.68904,-1.1959 -1.20703,-1.4375c-0.51799,-0.2416 -0.97563,-0.17291 -0.99414,-0.17383h-0.00195c-0.36964,-0.01705 -0.77527,-0.02148 -1.17773,-0.02148zM16.64258,15c0.38554,0 0.76564,0.0047 1.08398,0.01953c0.32749,0.01632 0.30712,0.01766 0.24414,-0.01172c-0.06399,-0.02984 0.02283,-0.03953 0.20898,0.40234c0.24341,0.57785 0.66348,1.58909 1.03906,2.49023c0.18779,0.45057 0.36354,0.87343 0.50391,1.20508c0.14036,0.33165 0.21642,0.51683 0.30469,0.69336v0.00195l0.00195,0.00195c0.08654,0.17075 0.07889,0.06143 0.04883,0.12109c-0.21103,0.41883 -0.23966,0.52166 -0.45312,0.76758c-0.32502,0.37443 -0.65655,0.792 -0.83203,0.96484c-0.15353,0.15082 -0.43055,0.38578 -0.60352,0.8457c-0.17323,0.46063 -0.09238,1.09262 0.18555,1.56445c0.37003,0.62819 1.58941,2.6129 3.48438,4.28125c1.19338,1.05202 2.30519,1.74828 3.19336,2.2168c0.88817,0.46852 1.61157,0.74215 1.77344,0.82227c0.38438,0.19023 0.80448,0.33795 1.29297,0.2793c0.48849,-0.05865 0.90964,-0.35504 1.17773,-0.6582l0.00195,-0.00195c0.3568,-0.40451 1.41702,-1.61513 1.92578,-2.36133c0.02156,0.0076 0.0145,0.0017 0.18359,0.0625v0.00195h0.00195c0.0772,0.02749 1.04413,0.46028 1.90625,0.87109c0.86212,0.41081 1.73716,0.8378 2.02148,0.97852c0.41033,0.20308 0.60422,0.33529 0.6543,0.33594c0.00338,0.08798 0.0068,0.18333 -0.00586,0.32813c-0.03507,0.40164 -0.14243,0.95757 -0.35742,1.55273c-0.10532,0.29136 -0.65389,0.89227 -1.3457,1.33008c-0.69181,0.43781 -1.53386,0.74705 -1.8457,0.79297c-0.9376,0.13815 -2.05083,0.18859 -3.27344,-0.19531c-0.84773,-0.26609 -1.90476,-0.61053 -3.27344,-1.19336c-2.77581,-1.18381 -5.13503,-3.19825 -6.82031,-4.97266c-0.84264,-0.8872 -1.51775,-1.71309 -1.99805,-2.33789c-0.4794,-0.62364 -0.68874,-0.94816 -0.86328,-1.17773l-0.00195,-0.00195c-0.30983,-0.40973 -2.20703,-3.04868 -2.20703,-5.42578c0,-2.51576 1.1685,-3.50231 1.80078,-4.18359c0.33194,-0.35766 0.69484,-0.41016 0.8418,-0.41016z"></path>
                                    </g>
                                  </g>
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <a
                              href="https://wa.me/34662646521"
                              className="text-gray-800
                              transition-colors
                              duration-200
                              ease-in-out
                              hover:text-primary-700
                            "
                            >
                              <p className="font-title text-2xl font-bold uppercase text-primary-700">CHAT</p>
                              +34 662 646 521
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
