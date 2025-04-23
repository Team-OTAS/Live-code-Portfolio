import { motion } from "framer-motion";
import herobanner from "./../../assets/image/home/herobanner.svg";

// import { GradualSpacing } from "../animaition/GradualSpacing";

const HeroBanner = () => {
  return (
    <div className="pt-20 px-10 mx-auto min-h-[100vh] flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-center mx-auto">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="">
            <h2 className="header-text">
              Manage Live <br /> Sale Easily
            </h2>
            <motion.p
              initial={{ opacity: 0, x: -200 }} // Image enters with a slight slide up
              animate={{ opacity: 1, x: 0 }} // Final state
              exit={{ opacity: 0, x: 200 }} // Exit animation
              transition={{ duration: 1, delay: 0.5 }} // Transition duration
              className="text-[20px] sourcesans font-bold mt-2 md:mt-5"
            >
              With a just few simple clicks- mange your <br /> live sale stocks,
              rack live sale orders, save <br /> time with our auto replay
              messages
            </motion.p>
            <a
              href="https://m.me/197568866770556?source=qr_link_share"
              target="_blank"
              className="inline-flex items-center mt-10 bg-primary text-[16px]  font-semibold text-white py-5 px-10 rounded-full hover:bg-green-600 transition duration-200"
            >
              <span className="open-sans text-[24px]"> See our packages</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="w-1/2 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={herobanner} alt="Hero Banner" className="w-full" />
        </motion.div>

        <motion.div
          className="w-full md:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={herobanner} alt="Hero Banner" className="" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
