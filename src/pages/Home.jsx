// import Footer from "../components/Footer";
import AboutUs from "../components/Home/AboutUs";
import Accordion from "../components/Home/Accordian";
import CaregiverSection from "../components/Home/CaregiverSection";
// import SimpleCareSolutions from "../components/Home/care/SimpleCareSoluutions";
import Collaborate from "../components/Home/Collaborate";
import HeroBanner from "../components/Home/HeroBanner";
import LiveSalePlans from "../components/Home/LiveSalePlans";
// import Steps from "../components/Home/StepPage";
import Testmonial from "../components/Home/testmonial/Testmonial";
import TrustedBySection from "../components/Home/TrustedBySection";

function Home() {
  return (
    <div className=" mx-auto">
      <HeroBanner />
      <TrustedBySection />
      <Collaborate />
      <AboutUs />
      <LiveSalePlans />
    </div>
  );
}

export default Home;
