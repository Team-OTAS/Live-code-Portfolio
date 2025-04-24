import AboutUs from "../components/Home/AboutUs";
// import Accordion from "../components/Home/Accordian";
// import CaregiverSection from "../components/Home/CaregiverSection";
import Collaborate from "../components/Home/Collaborate";
import HeroBanner from "../components/Home/HeroBanner";
import LiveSalePlans from "../components/Home/LiveSalePlans";
import TrustedBySection from "../components/Home/TrustedBySection";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

function Home() {
  // Animation hooks for each section
  const heroControls = useAnimation();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const trustedControls = useAnimation();
  const trustedRef = useRef(null);
  const trustedInView = useInView(trustedRef, { once: true, margin: "-100px" });

  const collaborateControls = useAnimation();
  const collaborateRef = useRef(null);
  const collaborateInView = useInView(collaborateRef, {
    once: true,
    margin: "-100px",
  });

  const aboutControls = useAnimation();
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });

  const plansControls = useAnimation();
  const plansRef = useRef(null);
  const plansInView = useInView(plansRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (heroInView)
      heroControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
  }, [heroInView, heroControls]);
  useEffect(() => {
    if (trustedInView)
      trustedControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
  }, [trustedInView, trustedControls]);
  useEffect(() => {
    if (collaborateInView)
      collaborateControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
  }, [collaborateInView, collaborateControls]);
  useEffect(() => {
    if (aboutInView)
      aboutControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
  }, [aboutInView, aboutControls]);
  useEffect(() => {
    if (plansInView)
      plansControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
  }, [plansInView, plansControls]);

  return (
    <div className="mx-auto">
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 60 }}
        animate={heroControls}
      >
        <HeroBanner />
      </motion.div>
      <motion.div
        ref={trustedRef}
        initial={{ opacity: 0, y: 60 }}
        animate={trustedControls}
      >
        <TrustedBySection />
      </motion.div>
      <motion.div
        ref={collaborateRef}
        initial={{ opacity: 0, y: 60 }}
        animate={collaborateControls}
      >
        <Collaborate />
      </motion.div>
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, y: 60 }}
        animate={aboutControls}
      >
        <AboutUs />
      </motion.div>
      <motion.div
        ref={plansRef}
        initial={{ opacity: 0, y: 60 }}
        animate={plansControls}
      >
        <LiveSalePlans />
      </motion.div>
    </div>
  );
}

export default Home;
