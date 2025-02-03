import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "../css/Home.css";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  // const dotVariants = {
  //   animate: (i) => ({
  //     x: [
  //       0,
  //       getStraightPoint(i).x,
  //       getTurnPoint(i).x,
  //       getStraightPoint(i).x,
  //       0,
  //     ],
  //     y: [
  //       0,
  //       getStraightPoint(i).y,
  //       getTurnPoint(i).y,
  //       getStraightPoint(i).y,
  //       0,
  //     ],
  //     transition: {
  //       duration: 4,
  //       repeat: Infinity,
  //       repeatType: "loop",
  //     },
  //   }),
  // };

  // Distance configuration for each dot
  const straightDistances = [200, 320, 120, 120]; // Straight movement distances
  const turnDistances = [320, 120, 310, 80]; // Turning movement distances

  // Get straight movement point
  // const getStraightPoint = (index) => {
  //   const straightPositions = [
  //     { x: 0, y: -straightDistances[index] }, // Top
  //     { x: straightDistances[index], y: 0 }, // Right
  //     { x: 0, y: straightDistances[index] }, // Bottom
  //     { x: -straightDistances[index], y: 0 }, // Left
  //   ];
  //   return straightPositions[index];
  // };

  // Get turning movement point
  // const getTurnPoint = (index) => {
  //   const turnPositions = [
  //     { x: -turnDistances[index], y: -straightDistances[index] }, // Top-left
  //     { x: straightDistances[index], y: -turnDistances[index] }, // Top-right
  //     { x: turnDistances[index], y: straightDistances[index] }, // Bottom-right
  //     { x: -straightDistances[index], y: turnDistances[index] }, // Bottom-left
  //   ];
  //   return turnPositions[index];
  // };

  return (
    <div className="home w-screen  relative  h-[80vh] xl:h-[100vh] flex items-center justify-center  flex-col gap-3">
      <motion.span
        className="tag-1 bg-white  border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute lg:top-[10%] xl:top-[10%] lg:left-[15%] xl:left-[16%] text-xl"
        initial={{ opacity: 0.2 }} // Initially hidden
        animate={{ opacity: 1 }} // Dynamic opacity based on state
        transition={{ duration: 1, delay: 12 }}
      >
        RTC
      </motion.span>

      <motion.span
        className="tag-2 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute top-[10%] left-[50%] text-xl"
        initial={{ opacity: 0.2 }} // Initially hidden
        animate={{ opacity: 1 }} // Dynamic opacity based on state
        transition={{ duration: 1, delay: 7 }}
      >
        Sale Deed
      </motion.span>

      <motion.span
        className="tag-3 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute top-[18%] right-[9%] text-xl "
        initial={{ opacity: 0.2 }} // Initially hidden
        animate={{ opacity: 1 }} // Dynamic opacity based on state
        transition={{ duration: 1, delay: 2 }}
      >
        Encumbrance <br /> certificate
      </motion.span>

      <motion.span
        className="tag-4 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute bottom-[13%] right-[13%] text-xl"
        initial={{ opacity: 0.2 }} // Initially hidden
        animate={{ opacity: 1 }} // Dynamic opacity based on state
        transition={{ duration: 1, delay: 12 }}
      >
        Grant Order
      </motion.span>

      <motion.span
        className="tag-5 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute bottom-[16%] right-[37%] text-xl"
        initial={{ opacity: 0.2 }} // Initially hidden
        animate={{ opacity: 1 }} // Dynamic opacity based on state
        transition={{ duration: 1, delay: 2 }}
      >
        Partition Deed
      </motion.span>

      <motion.span
        className="tag-6 border-[#575757] border-[0.1px] px-4 py-1.5 text-[#575757] absolute bottom-[2.8%] right-[64%] text-xl"
        initial={{ opacity: 0.2 }} // Initially hidden
        animate={{ opacity: 1 }} // Dynamic opacity based on state
        transition={{ duration: 1, delay: 7 }}
      >
        Mutation <br /> Register
      </motion.span>

      <motion.span
        className="tag-7 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute bottom-[25%] left-[7%] text-xl"
        initial={{ opacity: 0.2 }} // Initially hidden
        animate={{ opacity: 1 }} // Dynamic opacity based on state
        transition={{ duration: 1, delay: 12 }}
      >
        Will
      </motion.span>

      <motion.div
        initial={{ y: "100%", opacity: 1, rotate: 45 }} // Start below the visible area with opacity 0
        animate={{
          y: ["100%", "-2700%", "100%"],
          opacity: [1, 1, 1, 1], // Fade in at the start, fade out at the end
        }}
        transition={{
          duration: 5, // Total duration for the animation
          ease: "easeInOut", // Smooth easing
          delay: 5, // Delay before starting
          times: [0, 0.1, 0.9, 1], // Control when each keyframe happens
        }}
        className="union-2 w-[5px] h-[5px] bg-blue-500 z-10  absolute bottom-[61%] xl:bottom-[62%] left-[53%] mb-5"
      />
      <motion.div
        initial={{ y: "100%", opacity: 1, rotate: 45 }} // Start below the visible area with opacity 0
        animate={{
          y: ["100%", "4150%", "100%"],
          opacity: [1, 1, 1, 1], // Fade in at the start, fade out at the end
        }}
        transition={{
          duration: 5, // Total duration for the animation
          ease: "easeInOut", // Smooth easing
          times: [0, 0.1, 0.9, 1], // Control when each keyframe happens
        }}
        className="union-5 w-[5px] h-[5px] bg-red-500 z-10 absolute lg:top-[53%] xl:top-[49.2%] left-[58%]"
      />

      <motion.div
        initial={{ opacity: 1, rotate: 45 }} // Initially hidden and at the starting position
        animate={{
          x: ["0%", "2660%", "2660%", "2660%", "0%"], // Start moving horizontally first, then stay
          y: ["0%", "0%", "-2150%", "-2150%", "0%", "0%"], // Only move vertically after horizontal motion
          opacity: [1, 1, 1, 1], // Keep visible throughout
        }}
        transition={{
          duration: 5, // Total duration for the entire animation
          ease: "easeInOut", // Smooth movement
        }}
        exit={{
          opacity: 0, // Fade out on exit
          transition: { duration: 1 }, // Make the exit smoother
        }}
        style={{ display: "block" }} // Force display block initially
        className="union-3 w-[5px] h-[5px] bg-red-500 z-10 absolute top-[45.5%] xl:top-[42%]  right-[22.6%] mb-5"
      />
      <motion.div
        initial={{ y: "100%", opacity: 1, rotate: 45 }} // Start below the visible area with opacity 0
        animate={{
          y: ["100%", "5400%", "100%"], // Keyframes: start, move up, come down
          opacity: [1, 1, 1, 1], // Fade in at the start, fade out at the end
        }}
        transition={{
          duration: 5, // Total duration for the animation
          ease: "easeInOut", // Smooth movement
          delay: 5, // Delay before the animation starts
          times: [0, 0.1, 0.9, 1], // Control when each keyframe happens
        }}
        className="union-2 w-[5px] h-[5px] bg-yellow-500 z-10 absolute top-[52.9%] xl:top-[49.5%] left-[34.9%] xl:left-[32%] mb-5"
      />
      <motion.div
        initial={{ x: "100%", y: "100%", opacity: 1, rotate: 45 }} // Start with initial position and rotation
        animate={{
          y: ["100%", "5000%", "5000%", "5000%", "100%"], // Move down first, stay, then return
          x: ["100%", "100%", "100%", "2400%", "2400%", "100%", "100%", "100%"], // Only start horizontal movement after vertical movement finishes
          opacity: [1, 1, 1, 1], // Stay fully visible
        }}
        transition={{
          duration: 5, // Total duration for the entire animation
          ease: "easeInOut", // Smooth movement
          delay: 10,
        }}
        className="union-4 w-[5px] h-[5px] bg-red-500 z-10 absolute lg:bottom-[43%] xl:bottom-[47.2%] right-[29%] mb-5"
      />

      <motion.div
        initial={{ x: "0%", y: "100%", opacity: 1, rotate: 45 }} // Start position
        animate={{
          // Move straight down first, then return
          y: ["100%", "3400%", "3400%", "3400%", "100%"],
          // Only start horizontal movement after vertical motion completes
          x: [
            "100%",
            "100%",
            "100%",
            "-4300%",
            "-4300%",
            "100%",
            "100%",
            "100%",
          ],
          opacity: [1, 1, 1, 1], // Stay fully visible throughout
        }}
        transition={{
          duration: 5, // Total duration for the entire animation
          ease: "easeInOut", // Smooth movement
          delay: 10,
        }}
        className="union-7 w-[5px] h-[5px] bg-green-500 z-10  absolute top-[52.8%] xl:top-[49.5%] left-[26%] xl:left-[24.3%] mb-5"
      />

      <motion.div
        initial={{
          y: "100%",
          x: "0%",
          opacity: 1,
          rotate: 45, // Initial rotation
        }}
        animate={{
          y: ["100%", "-3200%", "-3200%","-3200%", "100%"], // Move vertically, stay, and return
          x: ["0%", "0%", "-2100%", "-2100%", "0%", "0%"], // Move horizontally after the vertical movement
          opacity: [1, 1, 1, 1], // Stay visible throughout
        }}
        transition={{
          duration: 5, // Total duration for the entire animation
          ease: "easeInOut", // Smooth movement
          delay: 10,
        }}
        className="union-1 w-[5px] h-[5px] bg-red-500 z-10  absolute top-[34.5%] left-[26.6%] mb-5"
      />
      <div className="absolute top-[11%] xl:top-[15.7%] left-[53.1%] z-0 h-[140px]  w-0 border-r-2 border-double  border-gray-100" />
      <div className="absolute top-[54%] xl:top-[51%] left-[58.1%] z-1 z-0 h-[200px]  w-0 border-r-2 border-double  border-gray-100" />
      <div className="absolute top-[54%] xl:top-[51%] left-[35.1%] xl:left-[32.1%] z-1 z-0 h-[267px]  w-0 border-r-2 border-double  border-gray-800" />
      <div className="absolute top-[55%] xl:top-[51%] right-[17.29%] xl:right-[21.2%] z-1 z-0 h-[245px]  w-[118px] border-l-2 border-b-2 border-double  border-gray-100" />
      <div className="absolute top-[27.4%] z-1 right-[9.8%] xl:right-[14%] w-[130px] h-[110px] border-b-2 border-r-2  border-double border-gray-100" />
      <div className="absolute top-[8%] xl:top-[13%] z-1 left-[19.7%] w-[110px] h-[160px] border-t-2 border-r-2  border-double border-gray-100" />
      <div className="absolute top-[55%] xl:top-[51%] z-1 left-[5%] xl:left-[10.33%] w-[224px] h-[161px] border-b-2 border-r-2  border-double border-gray-100" />
      
      <div className="home-center absolute   z-20 top-[35%] text-[5vh]  font-bold border-dashed border-2 border-gray-600 h-[16vh] lg:w-[55vw] xl:w-[55vw] xxl:w-[75vw]  flex items-center justify-center text-center p-2 ">
        <h1 className=" text-[20px]  xl:text-3xl">
          Generate title flows, compare revenue records, <br /> check encumbrances in{" "}
          <span className="bg-[#dd9798]">seconds.</span>
        </h1>
      </div>

            <a
                href="https://forms.gle/aieChuaKTCfeBsDG9"
                className="home-btn px-4 py-2 mt-24 text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
            >
                Request Access
            </a>
        </div>
    );
};

export default Home;