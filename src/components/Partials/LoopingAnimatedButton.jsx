import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsCurrencyDollar } from "react-icons/bs";

function LoopingAnimatedButton() {
  // const [distance, setDistance] = useState(280); // Default distance for xl

  // useEffect(() => {
  //   const updateDistance = () => {
  //     const screenWidth = window.innerWidth;

  //     if (screenWidth >= 1280) {
  //       // xl breakpoint
  //       setDistance(280);
  //     } else if (screenWidth >= 1024) {
  //       // lg breakpoint
  //       setDistance(150);
  //     } else if (screenWidth >= 768) {
  //       // md breakpoint
  //       setDistance(100);
  //     } else {
  //       // For smaller screens (optional)
  //       setDistance(80);
  //     }
  //   };

  //   updateDistance(); // Initial calculation
  //   window.addEventListener("resize", updateDistance); // Recalculate on resize

  //   return () => window.removeEventListener("resize", updateDistance); // Cleanup
  // }, []);
  const [xValue, setXValue] = useState("550%");

  useEffect(() => {
    const updateXValue = () => {
      if (window.matchMedia("(min-width: 1280px)").matches) {
        setXValue("550%"); // For xl screens
      } else if (window.matchMedia("(min-width: 1024px)").matches) {
        setXValue("300%"); // For lg screens
      }else if (window.matchMedia("(min-width: 768px)").matches) {
        setXValue("400%"); // For lg screens
      } else {
        setXValue("300%"); // For smaller screens
      }
    };

    updateXValue(); // Set initial value
    window.addEventListener("resize", updateXValue); // Update on resize
    return () => window.removeEventListener("resize", updateXValue);
  }, []);
  return (
    <button className="relative w-[90%] h-12 bg-gradient-to-r from-white to-[#EF3639] rounded-full overflow-hidden focus:outline-none">
      <motion.div
        className="absolute top-0 bottom-0 w-12 flex items-center justify-center"
        animate={{ x: [xValue, "0%", "0%"] }}  
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
          ease: "linear",
        }}
      >
        <div className="w-full h-full bg-[#EF3639] rounded-full flex items-center justify-center text-white">
          <BsCurrencyDollar />
        </div>
      </motion.div>
        <div className="absolute inset-0 flex items-center justify-center text-white font-semibold z-10"></div>
    </button>
  );
}

export default LoopingAnimatedButton;
