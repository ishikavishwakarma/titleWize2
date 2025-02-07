import React from "react";
import "../css/Partners.css";
import { FaRegCopyright } from "react-icons/fa6";

const Partners = () => {
  return (
    <div className=" w-full h-[80vh] flex items-center justify-evenly flex-col gap-14 ">
      <div className=" text-[4vw] sm:text-[2vw] font-semibold w-[90%] lg:w-[55vw] flex justify-between items-center px-5">
        <h1 className="text-xl md:text-4xl">Partnered with </h1>
        <span>|</span>
        <img
          src="260.png"
          className="partner-logo h-[13vh] sm:h-[15vh]"
          alt="Partner Logo"
        />
      </div>
      <div className=" p-4 sm:px-4 sm:py-8 w-[90%] md:w-[70%] lg:w-[50vw] border-[1.9px] border-gray-800 flex flex-col justify-center items-center bg-white">
        <h1 className="text-[20px] lg:text-[24px] font-bold text-gray-900 leading-[1.3] max-w-[800px] text-center">
          Revolutionize how you assess risks for your real estate deals.
        </h1>

        <div className="mt-6">
          <a  href="https://docs.google.com/forms/d/e/1FAIpQLScWXBOILpMFZzCas7jng9_pjLztmCqT8RQRYdHiLevp49oV_w/viewform" // Replace with your actual Google Forms link
              target="_blank"
              rel="noopener noreferrer" className="px-6 py-2.5 bg-[#EF4444] text-white rounded text-base font-medium hover:bg-red-600 transition-colors">
            Request Access
          </a>
        </div>

        <div className="mt-12 sm:mt-16 flex items-center gap-1 sm:gap-3">
          <p className="text-sm sm:text-base text-gray-900">
            Want to see the product in action?
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://cal.com/dattaprasad"
            className="text-center py-2 px-1 sm:px-4 border w-32 sm:w-fit hover:bg-black border-gray-200 rounded text-sm md:text-sm sm:text-base text-gray-900 hover:text-white transition-colors"
          >
            Book a demo
          </a>
        </div>
      </div>

      <div className="footer w-full flex justify-between items-center p-6  text-[0.9vw] text-[#575757]">
        <h5 className="flex md:text-base items-center gap-1">
          <FaRegCopyright />
          Litigrit Technologies Pvt. Ltd. All right reserved.
        </h5>
        <div className="flex gap-6">
          <h5 className="md:text-base">Terms &nbsp; & &nbsp; Privacy</h5>
          
        </div>
      </div>
    </div>
  );
};

export default Partners;
