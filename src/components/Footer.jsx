import {
  FaFacebookF,
  FaTiktok,
  FaLinkedinIn,
  FaFacebookMessenger,
  FaTelegramPlane,
} from "react-icons/fa";
import logo from "./../assets/image/logo.svg";

export default function Footer() {
  return (
    <footer className="lg:w-[1000px] flex flex-col md:flex-row justify-between items-center py-10 mx-auto bg-white text-parimary">
      <div className="text-center md:text-left">
        <img src={logo} alt="logo" className="w-25" />
        <p className="mt-5 font-semibold text-[24px]">
          Sell Easily & Better with us.
        </p>
      </div>

      <div className="flex flex-col items-center md:items-start gap-2 mt-4 md:mt-0">
        <div className="flex gap-10 mb-2 text-[20px] font-medium">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Packages
          </a>
        </div>
        <div className="flex gap-10 text-[20px] font-medium">
          <a href="#" className="hover:underline">
            Customer
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>

      <div className="mt-4 md:mt-0 text-center md:text-left">
        <p className="font-medium text-[20px] mb-5">Follow Us for Updates</p>
        <div className="flex gap-3 justify-center md:justify-end">
          <a
            href="#"
            className="border border-gray-400 rounded-full p-2 hover:bg-gray-100"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="border border-gray-400 rounded-full p-2 hover:bg-gray-100"
          >
            <FaTiktok />
          </a>
          <a
            href="#"
            className="border border-gray-400 rounded-full p-2 hover:bg-gray-100"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="border border-gray-400 rounded-full p-2 hover:bg-gray-100"
          >
            <FaFacebookMessenger />
          </a>
          <a
            href="#"
            className="border border-gray-400 rounded-full p-2 hover:bg-gray-100"
          >
            <FaTelegramPlane />
          </a>
        </div>
      </div>
    </footer>
  );
}
