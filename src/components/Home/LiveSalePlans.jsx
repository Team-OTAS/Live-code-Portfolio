import list from "./../../assets/image/home/list.svg";
import phone from "./../../assets/image/home/phone.svg";

const plans = [
  {
    title: "Standard Plan",
    features: [
      "500 to 2000 Comments per Live Sale",
      "Support 4 Live Sales Per Week",
      "Support 400 Auto Reply Message to Customers",
    ],
    buttonColor: "text-indigo-600 border border-indigo-600",
    bgColor: "bg-white",
    textColor: "text-gray-900",
  },
  {
    title: "Business Plan",
    features: [
      "Up to 1 Million Comments per Live Sale",
      "Support unlimited Live Sales Per Week",
      "Support unlimited Auto Reply Message to customers",
      "24 / 7 Customer Support",
      "Dedicated Dev Ops Support",
    ],
    buttonColor: "bg-indigo-600 text-white",
    bgColor: "bg-white",
    textColor: "text-gray-900",
  },
];

export default function LiveSalePlans() {
  return (
    <div className="min-h-screen bg-[#5c3b31] text-white flex flex-col items-center px-4 pt-10">
      <p className="uppercase text-sm tracking-wide mb-2">Live Sale Packages</p>
      <h2 className="text-[64px] font-semibold text-center mb-10 ">
        Choose the one that fit <br /> with your business
      </h2>
      <div className="flex flex-col md:flex-row gap-10">
        {/* {plans.map((plan, index) => ( */}
        <div
          // key={index}
          className={`${plans[0].bgColor} text-primary h-[350px] rounded-2xl p-6 w-full md:w-[350px] shadow-md`}
        >
          <h3 className="text-xl font-bold mb-4">{plans[0].title}</h3>
          <ul className="space-y-3 mb-6">
            {plans[0].features.map((feature, i) => (
              <li key={i} className="flex items-start  gap-3">
                <img src={list} alt="list" className="w-3 mt-1" />
                <span className="text-[16px]">{feature}</span>
              </li>
            ))}
          </ul>
          <button
            className={`w-full work-sans text-[20px] py-3 mt-5 rounded-xl text-sm font-semibold ${plans[0].buttonColor}`}
          >
            DISCUSS WITH US
          </button>
        </div>

        <div
          // key={index}
          className={`${plans[1].bgColor} text-primary rounded-2xl p-6 w-full md:w-[350px] shadow-md`}
        >
          <h3 className="text-xl font-bold mb-4">{plans[1].title}</h3>
          <ul className="space-y-3 mb-6">
            {plans[1].features.map((feature, i) => (
              <li key={i} className="flex items-start  gap-3">
                <img src={list} alt="list" className="w-3 mt-1" />
                <span className="text-[16px]">{feature}</span>
              </li>
            ))}
          </ul>
          <button
            className={`w-full work-sans text-[20px] py-3 mt-5 rounded-xl text-sm font-semibold ${plans[1].buttonColor}`}
          >
            DISCUSS WITH US
          </button>
        </div>
        {/* ))} */}
      </div>

      <div className="w-[1000px] h-[1px] border border-dashed mt-20"></div>

      <div className="w-full lg:w-[1000px] mt-20 text-white flex flex-col md:flex-row items-center justify-between">
        {/* Left Side Content */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-[64px] font-semibold mb-4">
            Upgrade your <br className="hidden md:block" />
            live sale easily.
          </h2>
          <p className="text-[20px] text-gray-200 mb-6">
            Have any questions? Feels free to ask our specialist to discuss your
            worries.
          </p>
          <button className="button mt-5 text-primary bg-white">
            DISCUSS WITH US
          </button>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center items-end">
          <img
            src={phone} // Replace with your image path
            alt="Phone Login Screen"
            className=""
          />
        </div>
      </div>
    </div>
  );
}
