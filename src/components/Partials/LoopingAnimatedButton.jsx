import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsCurrencyDollar } from "react-icons/bs";

function LoopingAnimatedButton() {
  const [distance, setDistance] = useState(280); // Default distance for xl

  useEffect(() => {
    const updateDistance = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1280) {
        // xl breakpoint
        setDistance(280);
      } else if (screenWidth >= 1024) {
        // lg breakpoint
        setDistance(150);
      } else if (screenWidth >= 768) {
        // md breakpoint
        setDistance(100);
      } else {
        // For smaller screens (optional)
        setDistance(80);
      }
    };

    updateDistance(); // Initial calculation
    window.addEventListener("resize", updateDistance); // Recalculate on resize

    return () => window.removeEventListener("resize", updateDistance); // Cleanup
  }, []);
  return (
    <button className="relative w-[100%] h-12 bg-gradient-to-r from-white to-[#EF3639] rounded-full overflow-hidden focus:outline-none">
      <div className="absolute inset-0 flex items-center justify-center text-white font-semibold z-10"></div>
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center"
        animate={{
          x: [0, 340, 0], // Path of the ball

        }}
        transition={{
          duration: 5, // Increased duration for slower movement
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <div className="w-full h-full bg-[#EF3639] rounded-full flex items-center justify-center text-white">
          <BsCurrencyDollar />
        </div>
      </motion.div>
    </button>
  );
}

export default LoopingAnimatedButton;
