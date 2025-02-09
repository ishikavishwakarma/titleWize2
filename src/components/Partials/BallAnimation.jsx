import { motion } from "framer-motion";

export default function BallAnimation() {
  return (
    <div className="home bg-white w-[95vw] h-48 xl:mt-10 md:h-[70vh] lg:h-[80vh] xl:h-[vh] xxl:h-[70vh] mt-10 lg:mt-0 flex items-center justify-center  flex-col gap-10">
      <div className=" w-[70vw] relative border-none  z-30 top-0 md:top-8  text-[5vh] font-bold h-full md:h-[16vh] md:w-[65vw] lg:w-[48vw] xl:w-[860px]  flex items-center justify-center text-center ">
        <div
          style={{
            backgroundImage: `
            repeating-linear-gradient(90deg, #000000, #000000 9px, transparent 9px, transparent 20px),
            repeating-linear-gradient(180deg, #000000, #000000 9px, transparent 9px, transparent 20px),
            repeating-linear-gradient(90deg, #000000, #000000 9px, transparent 9px, transparent 20px),
            repeating-linear-gradient(180deg, #000000, #000000 9px, transparent 9px, transparent 20px)
          `,
          backgroundPosition: "left top, right top, left bottom, left top",
          backgroundRepeat: "repeat-x, repeat-y, repeat-x, repeat-y",
          backgroundSize: "100% 1.4px, 1.4px 100%, 100% 1.4px, 1.4px 100%",
          }}
          className="text-[20px]  bg-white absolute z-30 w-full flex justify-center items-center h-fit py-1 md:py-3 md:px-2.5 lg:text-xl xl:text-4xl"
        >
          <h1>
            {" "}
            Generate title flows, compare revenue records, <br /> check
            encumbrances in <span className="bg-[#EF36394D]">seconds.</span>
          </h1>
        </div>
        <div className="absolute md:bottom-[85%] lg:bottom-[65%] xl:bottom-[77%] xxl:bottom-[-50%] lg:right-[94.4%] right-[95%]  w-[7vw] md:w-[8.9vw] xl:w-[7vw] h-[50vh] md:h-[25vh] xl:h-[24vh]">
          {/* Box Borders */}
          <div className="absolute hidden md:block w-[1px] z-10 h-full bg-gray-100  right-0"></div>
          <div className="w-full flex">
            <div className="absolute hidden md:block w-full z-10 h-[1px] bg-gray-100 bottom-full"></div>

            <motion.span
              className="tag-1 bg-white font-normal border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute right-full md:bottom-[87%] xl:bottom-[90%] text-sm lg:text-lg xl:text-xl"
              initial={{ opacity: 0.2 }} // Initially hidden
              animate={{ opacity: 1 }} // Dynamic opacity based on state
              transition={{ duration: 1, delay: 11 }}
            >
              RTC
            </motion.span>
          </div>

          {/* Animated Ball */}
          <motion.div
            className="absolute hidden  md:block w-[5px] h-[5px]  z-20 translate-x-[40%] translate-y-[50%] bg-red-500 rotate-45"
            initial={{ bottom: "0%", right: "0%" }}
            animate={{
              bottom: ["0%", "100%", "100%"], // Moves down, stays, then moves up
              right: ["0%", "0%", "100%"], // Moves right, stays, then moves left
            }}
            transition={{
              duration: 3,
              ease: "linear",
              times: [0, 0.6, 1],
              delay:8,
              repeat: 1, // Repeat indefinitely
              repeatType: "reverse", // Reverse the animation
            }}
          />
        </div>
        <div className="absolute bottom-[70%] left-[95%] lg:left-[99.6%]  w-[7vw] md:w-[8vw] lg:w-[8.9vw] xl:w-[10.6vw] h-[50vh] md:h-[20vh] xl:h-[19vh]">
          {/* Box Borders */}
            <div className="absolute w-full hidden md:block z-10 h-[1px] bg-gray-100 top-full"></div>
          <div className="w-full flex">
          <div className="absolute w-[1px] hidden md:block z-10 h-full bg-gray-100  right-0"></div>
            <motion.span
          className="tag-3 border-[#575757] font-normal border-[0.1px] px-2 py-1.5 text-[#575757] absolute bottom-full md:left-[5%] lg:left-[20%] xl:left-[50%] text-sm lg:text-lg xl:text-xl "
          initial={{ opacity: 0.2 }} // Initially hidden
          animate={{ opacity: 1 }} // Dynamic opacity based on state
          transition={{ duration: 1, delay: 2 }}
        >
          Encumbrance <br /> certificate
        </motion.span>
          </div>

          {/* Animated Ball */}
          <motion.div
            className="absolute hidden font-normal md:block w-[5px] h-[5px]  z-20 translate-x-[-60%] translate-y-[60%] bg-red-500 rotate-45"
            initial={{ bottom: "0%", right: "0%" }}
            animate={{
              left: ["0%", "100%", "100%"], // Moves down, stays, then moves up
              bottom: ["0%", "0%", "100%"], // Moves right, stays, then moves left
            }}
            transition={{
              duration: 2,
              ease: "linear",
              times: [0, 0.4, 1],
              repeat: 1, // Repeat indefinitely
              repeatType: "reverse", // Reverse the animation
            }}
          />
        </div>
        <div className="absolute md:top-[85%] lg:top-[72%] xl:top-[77%] md:left-[90%] lg:left-[95%] xl:left-[88.8%]  w-[7vw] md:w-[7vw] lg:w-[8.9vw] xl:w-[8vw] h-[50vh] md:h-[25vh] xl:h-[32vh]">
          {/* Box Borders */}
          <div className="absolute w-[1px] hidden md:block z-10 h-full bg-gray-100  left-0"></div>
          <div className="w-full flex">
            <div className="absolute w-full hidden md:block z-10 h-[1px] bg-gray-100 top-full"></div>
          <motion.span
          className="tag-4 border-[#575757] font-normal border-[0.1px] w-28 lg:w-36 px-2 py-1.5 left-full xl:top-[91%] lg:top-[90%] top-[87%] text-[#575757] absolute text-sm lg:text-lg xl:text-xl"
          initial={{ opacity: 0.2 }} // Initially hidden
          animate={{ opacity: 1 }} // Dynamic opacity based on state
          transition={{ duration: 1, delay: 11 }}
        >
          Grant Order
        </motion.span>
          </div>

          {/* Animated Ball */}
          <motion.div
            className="absolute hidden md:block w-[5px] h-[5px]  z-20 translate-x-[-50%] translate-y-[-50%] bg-red-500 rotate-45"
            initial={{ left: "0%", top: "0%" }}
            animate={{
              top: ["0%", "100%", "100%"], // Moves down, stays, then moves up
              left: ["0%", "0%", "100%"], // Moves right, stays, then moves left
            }}
            transition={{
              duration: 3,
              ease: "linear",
              times: [0, 0.6, 1],
              delay:8,
              repeat: 1, // Repeat indefinitely
              repeatType: "reverse", // Reverse the animation
            }}
          />
        </div>

        <div className="absolute hidden md:block md:bottom-[85%] lg:bottom-[75%] xl:bottom-[77%] left-[57.1%] h-[50vh] xl:h-[20vh] md:h-[22vh]">
          {/* Box Borders */}
          {/* <div className="absolute w-full z-10 h-[2px] bg-gray-100 top-full"></div> */}
          <div className="w-full flex">
            <div className="absolute hidden md:block w-[1px] z-10 h-full bg-gray-100 right-0"></div>
            <motion.span
              className="tag-1 bg-white w-32 font-normal border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute bottom-full -left-16 text-sm lg:text-lg xl:text-xl"
              initial={{ opacity: 0.2 }} // Initially hidden
              animate={{ opacity: 1 }} // Dynamic opacity based on state
              transition={{ duration: 1, delay: 6 }}
            >
              Sale Deed
            </motion.span>
          </div>
          {/* Animated Ball */}
          <motion.div
            className="absolute hidden md:block  w-[5px] h-[5px]  z-20 translate-x-[40%] translate-y-[50%] bg-red-500 rotate-45"
            initial={{ bottom: "0%", right: "0%" }}
            animate={{
              bottom: ["0%", "95%"],
            }}
            transition={{
              duration: 2,
              delay:4,
              ease: "linear",
              repeat: 1, // Repeat indefinitely
              repeatType: "reverse", // Reverse the animation
            }}
          />
        </div>
        <div className="absolute hidden md:block top-[80%] lg:top-[70%] xl:top-[75%] md:left-[70%] xl:left-[65%] h-[50vh] md:h-[22vh] xl:h-[25vh] lg:h-[22vh]">
          {/* Box Borders */}
          <div className="w-full hidden md:flex">
            <div className="absolute hidden md:block w-[1px] z-10 h-full bg-gray-100 right-0"></div>
            <motion.span
          className="tag-5 border-[#575757] w-36 font-normal lg:w-40 border-[0.1px] px-2 py-1.5 text-[#575757] absolute top-full md:-left-[4.5rem] lg:-left-20 xl:-left-[5rem] text-sm lg:text-lg xl:text-xl"
          initial={{ opacity: 0.2 }} // Initially hidden
          animate={{ opacity: 1 }} // Dynamic opacity based on state
          transition={{ duration: 1, delay: 2 }}
        >
          Partition Deed
        </motion.span>
          </div>
          {/* Animated Ball */}
          <motion.div
            className="absolute hidden md:block  w-[5px] h-[5px]  z-20 translate-x-[40%] translate-y-[50%] bg-red-500 rotate-45"
            initial={{ top: "0%", right: "0%" }}
            animate={{
              top: ["0%", "95%"],
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: 1, // Repeat indefinitely
              repeatType: "reverse", // Reverse the animation
            }}
          />
        </div>
        <div className="absolute hidden md:block top-[80%] lg:top-[70%] xl:top-[75%] md:left-[23%] lg:left-[17%] h-[50vh] md:h-[27vh]">
          {/* Box Borders */}
          <div className="w-full flex">
            <div className="absolute hidden md:block w-[1px] z-10 h-full bg-gray-100 right-0"></div>
            <motion.span
          className="tag-5 border-[#575757] w-24 font-normal lg:w-28 border-[0.1px] px-2 py-1.5 text-[#575757] absolute top-full xl:left-[-3.5rem] lg:-left-16 md:-left-12 text-sm lg:text-lg xl:text-xl"
          initial={{ opacity: 0.2 }} // Initially hidden
          animate={{ opacity: 1 }} // Dynamic opacity based on state
          transition={{ duration: 1, delay: 6 }}
        >
          Mutation Register
        </motion.span>
          </div>
          {/* Animated Ball */}
          <motion.div
            className="absolute hidden md:block  w-[5px] h-[5px]  z-20 translate-x-[40%] translate-y-[50%] bg-red-500 rotate-45"
            initial={{ top: "0%", right: "0%" }}
            animate={{
              top: ["0%", "95%"],
            }}
            transition={{
              duration: 2,
              ease: "linear",
              delay:4,
              repeat: 1, // Repeat indefinitely
              repeatType: "reverse", // Reverse the animation
            }}
          />
        </div>
        <div className="absolute md:top-[82%] lg:top-[70%] xl:top-[77%]  right-[95%]  w-[7vw] md:w-[7vw] lg:w-[15vw] h-[50vh] md:h-[25vh] lg:h-[20vh]">
          {/* Box Borders */}
          <div className="absolute hidden md:block w-[1px] z-10 h-full bg-gray-100  right-0"></div>
          <div className="w-full flex">
            <div className="absolute hidden md:block w-full z-10 h-[1px] bg-gray-100 top-full"></div>
          <motion.span
          className="tag-4 border-[#575757] font-normal border-[0.1px] px-2 py-1.5 right-full top-[86%] text-[#575757] absolute text-base lg:text-xl"
          initial={{ opacity: 0.2 }} // Initially hidden
          animate={{ opacity: 1 }} // Dynamic opacity based on state
          transition={{ duration: 1, delay: 11 }}
        >
          Will
        </motion.span>
          </div>

          {/* Animated Ball */}
          <motion.div
            className="absolute hidden md:block w-[5px] h-[5px]  z-20 translate-x-[50%] translate-y-[-50%] bg-red-500 rotate-45"
            initial={{ right: "0%", top: "0%" }}
            animate={{
              top: ["0%", "100%", "100%"], // Moves down, stays, then moves up
              right: ["0%", "0%", "100%"], // Moves right, stays, then moves left
            }}
            transition={{
              duration: 3,
              ease: "linear",
              times: [0, 0.6, 1],
              delay:8,
              repeat: 1, // Repeat indefinitely
              repeatType: "reverse", // Reverse the animation
            }}
          />
        </div>
        </div>
      <a
        href="https://forms.gle/aieChuaKTCfeBsDG9"
        className=" px-4 py-2 mt-4 sm:mt-3 text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
      >
        Request Access
      </a>
    </div>
  );
}
