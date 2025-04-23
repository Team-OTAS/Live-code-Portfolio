const TrustedBySection = () => {
  return (
    <div className="containers flex flex-col md:flex-row w-full p-5 bg-white shadow-md rounded-lg">
      <div className="flex flex-wrap justify-center space-x-4 w-1/2">
        {/* Replace the logo images with actual image URLs */}
        <img src="logo1-url" alt="Logo 1" className="w-24 h-auto" />
        <img src="logo2-url" alt="Logo 2" className="w-24 h-auto" />
        <img src="logo3-url" alt="Logo 3" className="w-24 h-auto" />
        <img src="logo4-url" alt="Logo 4" className="w-24 h-auto" />
        <img src="logo5-url" alt="Logo 5" className="w-24 h-auto" />
        <img src="logo6-url" alt="Logo 6" className="w-24 h-auto" />
      </div>
      <div className="mt-5 md:mt-0 md:ml-10 text-center w-1/2">
        <h3 className="text-lg font-bold">
          Trusted by many successful <br /> Online Live Sale Business
        </h3>
        <button className="mt-4 bg-brown-500 border border-primary text-primary rounded-full px-4 py-2">
          OUR CUSTOMERS’ STORIES
        </button>
      </div>
    </div>
  );
};

export default TrustedBySection;
