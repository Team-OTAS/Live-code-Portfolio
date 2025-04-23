// import { useState } from "react";
// import { motion } from "framer-motion";
// import Skeleton from "react-loading-skeleton"; // Import the skeleton loader
import elder from "./../../assets/image/service/eldercare.jpg";
import infant from "./../../assets/image/service/newborn.jpg";
import hospital from "./../../assets/image/service/hospitalCare.jpg";
import newborn from "./../../assets/image/service/childCare.jpg";
import icon1 from "./../../assets/image/service/newborn_care_icon.svg";
import icon2 from "./../../assets/image/service/child_care_icon.svg";
import icon3 from "./../../assets/image/service/hospital_care_icon.svg";
import icon4 from "./../../assets/image/service/elder_care_icon.svg";
// import { FaBaby, FaChild, FaHospitalAlt, FaUserFriends } from "react-icons/fa";

export const services = {
  InfantCare: {
    icon: icon1,
    image: newborn,
    title: "Newborn Care",
    description:
      "“Our caregivers provide gentle and nurturing care for infants, ensuring safety and well-being”",
  },
  childCare: {
    icon: icon2,
    image: infant,
    title: "Child Care",
    description:
      "“Reliable and compassionate childcare services, providing parents peace of mind knowing their children are in safe hands.”",
  },
  hospitalCare: {
    icon: icon3,
    image: hospital,
    title: "Hospital Companion Care",
    description:
      "“We offer companionship and support for those in hospital settings, making recovery less lonely and more comfortable”",
  },
  elderCare: {
    icon: icon4,
    image: elder,
    title: "Elder Care",
    description:
      "“We offer warm, attentive support for seniors, assisting with daily tasks to maintain comfort and independence at home.”",
  },
};

const AboutUs = ({ classData }) => {
  return (
    <div className="p-5 containers">
      <h2 className="header-text">What our customer saying</h2>
      <p className="body-text mb-10">
        With satisfied feedback from our customers..
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between space-y-4 md:space-y-0">
        <div className="bg-white shadow-md py-10 px-20 rounded-xl flex-1 mr-2">
          <p className="mb-10">
            This is a lifesaver! 🙌 It’s so user-friendly, even for someone like
            me who isn’t super tech-savvy.
          </p>
          <p className="font-semibold mb-3">U Kyaw Soe</p>
          <p className="text-gray-600">Naypyidaw Electronics</p>
        </div>

        <div className="bg-white shadow-md py-10 px-20 rounded-xl flex-1 mr-2">
          <p className="mb-10">
            This is a lifesaver! 🙌 It’s so user-friendly, even for someone like
            me who isn’t super tech-savvy.
          </p>
          <p className="font-semibold mb-3">U Kyaw Soe</p>
          <p className="text-gray-600">Naypyidaw Electronics</p>
        </div>

        <div className="bg-white shadow-md py-10 px-20 rounded-xl flex-1 mr-2">
          <p className="mb-10">
            This is a lifesaver! 🙌 It’s so user-friendly, even for someone like
            me who isn’t super tech-savvy.
          </p>
          <p className="font-semibold mb-3">U Kyaw Soe</p>
          <p className="text-gray-600">Naypyidaw Electronics</p>
        </div>

        <div className="bg-white shadow-md py-10 px-20 rounded-xl flex-1 mr-2">
          <p className="mb-10">
            This is a lifesaver! 🙌 It’s so user-friendly, even for someone like
            me who isn’t super tech-savvy.
          </p>
          <p className="font-semibold mb-3">U Kyaw Soe</p>
          <p className="text-gray-600">Naypyidaw Electronics</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
