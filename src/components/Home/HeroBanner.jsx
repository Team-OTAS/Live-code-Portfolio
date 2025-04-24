// import { motion } from "framer-motion";
import herobanner from "./../../assets/image/home/herobanner.svg";

// import { GradualSpacing } from "../animaition/GradualSpacing";

const HeroBanner = () => {
  return (
    <div className="pt-20 px-10 mx-auto min-h-[100vh] flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-center mx-auto">
        <div className="w-full md:w-1/2">
          <div className="">
            <h2 className="header-text">
              Manage Live <br /> Sale Easily
            </h2>
            <p className="text-[20px] sourcesans font-bold mt-2 md:mt-5">
              With a just few simple clicks- mange your <br /> live sale stocks,
              rack live sale orders, save <br /> time with our auto replay
              messages
            </p>
            <button
              href="https://m.me/197568866770556?source=qr_link_share"
              target="_blank"
              className="button bg-primary mt-5 text-white"
            >
              <span className=""> See our packages</span>
            </button>
          </div>
        </div>

        <div className="w-1/2 hidden md:block">
          <img src={herobanner} alt="Hero Banner" className="w-full" />
        </div>

        <div className="w-full md:hidden">
          <img src={herobanner} alt="Hero Banner" className="" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
