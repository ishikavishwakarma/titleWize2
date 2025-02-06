import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
const getResponsiveValues = (width, xValuesMap, yValuesMap) => {
  if (width >= 1280) return { xValues: xValuesMap.xl, yValues: yValuesMap.xl }; // xl screens
  if (width >= 1024) return { xValues: xValuesMap.lg, yValues: yValuesMap.lg }; // lg screens
  if (width >= 768) return { xValues: xValuesMap.md, yValues: yValuesMap.md }; // md screens
  return { xValues: xValuesMap.sm, yValues: yValuesMap.sm }; // Default to sm screens
};

const getAnimation = (xValues, yValues, delay) => ({
  x: xValues,
  y: yValues,
  transition: { duration: 5, ease: "easeInOut", delay: delay },
});

const MovingDot = ({
  initialPosition,
  delay,
  xValuesMap,
  yValuesMap,
  className,
}) => {
  const controls = useAnimation();
  const [animationValues, setAnimationValues] = useState(() =>
    getResponsiveValues(window.innerWidth, xValuesMap, yValuesMap)
  );

  useEffect(() => {
    const updateAnimation = () => {
      const newValues = getResponsiveValues(
        window.innerWidth,
        xValuesMap,
        yValuesMap
      );
      setAnimationValues(newValues); // Update the values based on current width
      controls.start(getAnimation(newValues.xValues, newValues.yValues, delay)); // Animate the dot with updated values
    };

    updateAnimation(); // Initial animation on mount

    window.addEventListener("resize", updateAnimation); // Listen for window resize

    return () => window.removeEventListener("resize", updateAnimation); // Cleanup
  }, [controls, delay, xValuesMap, yValuesMap]);

  return (
    <motion.div
      className={className}
      initial={{ ...initialPosition, opacity: 1, rotate: 45 }}
      animate={controls}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    />
  );
};

export default function BallAnimation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="home bg-white w-screen h-48 xl:mt-10 md:h-[70vh] lg:h-[80vh] xl:h-[80vh] mt-10 lg:mt-0 flex items-center justify-center  flex-col gap-10">
      <div className=" w-[70vw] relative border-none  z-30 top-0 md:top-8  text-[5vh] font-bold h-full md:h-[16vh] md:w-[65vw] lg:w-[47vw] xl:w-[55vw] xxl:w-[75vw] flex items-center justify-center text-center ">
        {/* <motion.span
          className="tag-1 bg-white  border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute bottom-[220%] xl:-left-[11%] lg:-left-[20%] -left-[14.5%] text-xl"
          initial={{ opacity: 0.2 }} // Initially hidden
          animate={{ opacity: 1 }} // Dynamic opacity based on state
          transition={{ duration: 1, delay: 12 }}
        >
          RTC
        </motion.span> */}

        {/* <motion.span
          className="tag-2 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute bottom-[210%] left-[47%] lg:left-[48%] xl:left-[50%] text-xl"
          initial={{ opacity: 0.2 }} // Initially hidden
          animate={{ opacity: 1 }} // Dynamic opacity based on state
          transition={{ duration: 1, delay: 7 }}
        >
          Sale Deed
        </motion.span> */}

        {/* <motion.span
          className="tag-3 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute bottom-[160%] left-[105%] xl:left-[110%] text-xl "
          initial={{ opacity: 0.2 }} // Initially hidden
          animate={{ opacity: 1 }} // Dynamic opacity based on state
          transition={{ duration: 1, delay: 2 }}
        >
          Encumbrance <br /> certificate
        </motion.span> */}

        {/* <motion.span
          className="tag-4 border-[#575757] border-[0.1px] w-36 px-2 py-1.5 text-[#575757] absolute lg:-bottom-[234%] xl:-bottom-[225%] left-[102.7%] text-xl"
          initial={{ opacity: 0.2 }} // Initially hidden
          animate={{ opacity: 1 }} // Dynamic opacity based on state
          transition={{ duration: 1, delay: 12 }}
        >
          Grant Order
        </motion.span> */}

        {/* <motion.span
          className="tag-5 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute top-[255%] left-[52%] xl:left-[56%] text-xl"
          initial={{ opacity: 0.2 }} // Initially hidden
          animate={{ opacity: 1 }} // Dynamic opacity based on state
          transition={{ duration: 1, delay: 2 }}
        >
          Partition Deed
        </motion.span> */}

        {/* <motion.span
          className="tag-6 border-[#575757] bg-white border-[0.1px] px-4 py-1.5 text-[#575757] absolute top-[280%] lg:right-[72%] xl:right-[75%] text-xl"
          initial={{ opacity: 0.2 }} // Initially hidden
          animate={{ opacity: 1 }} // Dynamic opacity based on state
          transition={{ duration: 1, delay: 7 }}
        >
          Mutation <br /> Register
        </motion.span> */}

        {/* <motion.span
          className="tag-7 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute -bottom-[130%] -left-[30%] text-xl"
          initial={{ opacity: 0.2 }} // Initially hidden
          animate={{ opacity: 1 }} // Dynamic opacity based on state
          transition={{ duration: 1, delay: 12 }}
        >
          Will
        </motion.span> */}

        {/* <MovingDot
          initialPosition={{ y: "100%", x: "0%" }}
          xValuesMap={{
            sm: ["0%"],
            md: ["0%"],
            lg: ["0%"],
            xl: ["0%"],
          }}
          delay={5}
          yValuesMap={{
            sm: ["100%", "-2590%", "100%"],
            md: ["100%", "-2590%", "100%"],
            lg: ["100%", "-2190%", "100%"],
            xl: ["100%", "-2590%", "100%"],
          }}
          // yValues={["100%", "-2590%", "100%"]}
          className="union-7 md:block hidden w-[5px] h-[5px] bg-red-500 z-10  absolute lg:top-2 xl:bottom-[75%] left-[50%] lg:left-[56.7%] xl:left-[56.8%] mb-5"
        />
        <MovingDot
          initialPosition={{ y: "100%", x: "0%" }}
          xValuesMap={{
            sm: ["0%"],
            md: ["0%"],
            lg: ["0%"],
            xl: ["0%"],
          }}
          yValuesMap={{
            sm: ["100%", "4000%", "100%"],
            md: ["100%", "4000%", "100%"],
            lg: ["100%", "3300%", "100%"],
            xl: ["100%", "3750%", "100%"],
          }}
          // yValues={["100%", "4000%", "100%"]}
          className="union-3 md:block hidden w-[5px] h-[5px] bg-red-500 z-10 absolute bottom-4 left-[70%] lg:left-[64.8%]"
        />

        <MovingDot
          initialPosition={{ y: "100%", x: "0%" }}
          xValuesMap={{
            sm: ["0%", "3250%", "3250%", "3250%", "0%"],
            md: ["0%", "3250%", "3250%", "3250%", "0%"],
            lg: ["0%", "2200%", "2200%", "2200%", "0%"],
            xl: ["0%", "3250%", "3250%", "3250%", "0%"],
          }}
          yValuesMap={{
            sm: ["0%", "0%", "-2470%", "-2470%", "0%", "0%"],
            md: ["0%", "0%", "-2470%", "-2470%", "0%", "0%"],
            lg: ["0%", "0%", "-2200%", "-2200%", "0%", "0%"],
            xl: ["0%", "0%", "-2470%", "-2470%", "0%", "0%"],
          }}
          // xValues={["0%", "3250%", "3250%", "3250%", "0%"]}
          // yValues={["0%", "0%", "-2470%", "-2470%", "0%", "0%"]}
          className="union-1 md:block hidden w-[5px] h-[5px] bg-red-500 z-10 absolute top-[47%] right-[0.1%] mb-5"
        />

        <MovingDot
          initialPosition={{ y: "100%", x: "0%" }}
          // xValues={["0%"]}
          xValuesMap={{
            sm: ["0%"],
            md: ["0%"],
            lg: ["0%"],
            xl: ["0%"],
          }}
          delay={5}
          yValuesMap={{
            sm: ["100%", "5500%", "100%"],
            md: ["100%", "5500%", "100%"],
            lg: ["100%", "3800%", "100%"],
            xl: ["100%", "4350%", "100%"],
          }}
          // yValues={["100%", "5500%", "100%"]}
          className="union-4 md:block hidden w-[5px] h-[5px] bg-red-500 z-10 absolute bottom-0 md:left-[16.7%] xl:left-[16.9%] mb-5"
        />

        <MovingDot
          initialPosition={{ y: "100%", x: "100%" }}
          xValuesMap={{
            sm: [
              "100%",
              "100%",
              "100%",
              "2400%",
              "2400%",
              "100%",
              "100%",
              "100%",
            ],
            md: [
              "100%",
              "100%",
              "100%",
              "2400%",
              "2400%",
              "100%",
              "100%",
              "100%",
            ],
            lg: [
              "100%",
              "100%",
              "100%",
              "1600%",
              "1600%",
              "100%",
              "100%",
              "100%",
            ],
            xl: [
              "100%",
              "100%",
              "100%",
              "2400%",
              "2400%",
              "100%",
              "100%",
              "100%",
            ],
          }}
          // xValues={["100%","100%","100%","2400%","2400%","100%","100%","100%"]}
          yValuesMap={{
            sm: ["100%", "5300%", "5300%", "5300%", "100%"],
            md: ["100%", "5300%", "5300%", "5300%", "100%"],
            lg: ["100%", "4500%", "4500%", "4500%", "100%"],
            xl: ["100%", "5100%", "5100%", "5100%", "100%"],
          }}
          // yValues={["100%", "5300%", "5300%", "5300%", "100%"]}
          delay={10}
          className="union-2 md:block hidden w-[5px] h-[5px] bg-red-500 z-10 absolute lg:top-[80%]  xl:top-[85%] right-[9%] lg:right-[11.5%] mb-5"
        />

        <MovingDot
          initialPosition={{ y: "100%", x: "0%" }}
          xValuesMap={{
            sm: [
              "100%",
              "100%",
              "100%",
              "-4390%",
              "-4390%",
              "100%",
              "100%",
              "100%",
            ],
            md: [
              "100%",
              "100%",
              "100%",
              "-4390%",
              "-4390%",
              "100%",
              "100%",
              "100%",
            ],
            lg: [
              "100%",
              "100%",
              "100%",
              "-2950%",
              "-2950%",
              "100%",
              "100%",
              "100%",
            ],
            xl: [
              "100%",
              "100%",
              "100%",
              "-4390%",
              "-4390%",
              "100%",
              "100%",
              "100%",
            ],
          }}
          // xValues={[ "100%","100%","100%","-4390%","-4390%","100%","100%","100%"]}
          yValuesMap={{
            sm: ["100%", "2820%", "2820%", "2820%", "100%"],
            md: ["100%", "2820%", "2820%", "2820%", "100%"],
            lg: ["100%", "2500%", "2500%", "2500%", "100%"],
            xl: ["100%", "2820%", "2820%", "2820%", "100%"],
          }}
          // yValues={["100%", "2820%", "2820%", "2820%", "100%"]}
          delay={10}
          className="union-5 md:block hidden w-[5px] h-[5px] bg-red-500 z-10  absolute top-[90%] lg:top-[75%] md:left-[3.6%] xl:left-[2.5%] mb-5"
        />

        <MovingDot
          initialPosition={{ y: "100%", x: "0%" }}
          xValuesMap={{
            sm: ["0%", "0%", "-2100%", "-2100%", "0%", "0%"],
            md: ["0%", "0%", "-2100%", "-2100%", "0%", "0%"],
            lg: ["0%", "0%", "-1400%", "-1400%", "0%", "0%"],
            xl: ["0%", "0%", "-2100%", "-2100%", "0%", "0%"],
          }}
          yValuesMap={{
            sm: ["100%", "-3300%", "-3300%", "-3300%", "100%"],
            md: ["100%", "-3300%", "-3300%", "-3300%", "100%"],
            lg: ["100%", "-2850%", "-2850%", "-2850%", "100%"],
            xl: ["100%", "-3300%", "-3300%", "-3300%", "100%"],
          }}
          // xValues={["0%", "0%", "-2100%", "-2100%", "0%", "0%"]}
          // yValues={["100%", "-3300%", "-3300%", "-3300%", "100%"]}
          delay={10}
          className="union-6 md:block hidden w-[5px] h-[5px] bg-red-500 z-10 absolute bottom-[82%] lg:bottom-[70%] xl:bottom-[75%] left-3 lg:left-[8.1%] xl:left-[8.3%] mb-5"
        /> */}
        <h1
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333333FF' stroke-width='2' stroke-dasharray='9.5%2c 14' stroke-dashoffset='30' stroke-linecap='square'/%3e%3c/svg%3e")`,
            backgroundRepeat: "repeat",
            backgroundSize: "100% 100%",
          }}
          className="text-[20px] bg-white  absolute z-30 w-full flex justify-center items-center h-fit py-1 md:py-3 md:px-2.5 lg:text-xl xl:text-4xl"
        >
          <h1>
            {" "}
            Generate title flows, compare revenue records, <br /> check
            encumbrances in <span className="bg-[#EF36394D]">seconds.</span>
          </h1>
        </h1>
        <div className="absolute md:bottom-[85%] xl:bottom-[90%] lg:right-[91.4%] right-[95%]  w-[7vw] md:w-[8.9vw] xl:w-[7vw] h-[50vh] md:h-[25vh] xl:h-[24vh]">
          {/* Box Borders */}
          <div className="absolute hidden md:block w-[1px] z-10 h-full bg-gray-100  right-0"></div>
          <div className="w-full flex">
            <div className="absolute hidden md:block w-full z-10 h-[1px] bg-gray-100 bottom-full"></div>

            <motion.span
              className="tag-1 bg-white  border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute right-full md:bottom-[87%] xl:bottom-[89%] text-base lg:text-xl"
              initial={{ opacity: 0.2 }} // Initially hidden
              animate={{ opacity: 1 }} // Dynamic opacity based on state
              transition={{ duration: 1, delay: 11 }}
            >
              RTC
            </motion.span>
          </div>

          {/* Animated Ball */}
          <motion.div
            className="absolute hidden md:block w-[5px] h-[5px]  z-20 translate-x-[40%] translate-y-[50%] bg-red-500 rotate-45"
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
        <div className="absolute bottom-[50%] left-[95%] lg:left-[99.6%]  w-[7vw] md:w-[8vw] lg:w-[8.9vw] xl:w-[10.6vw] h-[50vh] md:h-[25vh] xl:h-[24vh]">
          {/* Box Borders */}
            <div className="absolute w-full hidden md:block z-10 h-[1px] bg-gray-100 top-full"></div>
          <div className="w-full flex">
          <div className="absolute w-[1px] hidden md:block z-10 h-full bg-gray-100  right-0"></div>
            <motion.span
          className="tag-3 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute bottom-full md:left-[-10%] lg:left-[20%] xl:left-[50%] text-base lg:text-xl "
          initial={{ opacity: 0.2 }} // Initially hidden
          animate={{ opacity: 1 }} // Dynamic opacity based on state
          transition={{ duration: 1, delay: 2 }}
        >
          Encumbrance <br /> certificate
        </motion.span>
          </div>

          {/* Animated Ball */}
          <motion.div
            className="absolute hidden md:block w-[5px] h-[5px]  z-20 translate-x-[-60%] translate-y-[60%] bg-red-500 rotate-45"
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
        <div className="absolute md:top-[85%] lg:top-[85%] xl:top-[90%] md:left-[90%] lg:left-[95%] xl:left-[88.8%]  w-[7vw] md:w-[7vw] lg:w-[8.9vw] xl:w-[8vw] h-[50vh] md:h-[25vh] xl:h-[32vh]">
          {/* Box Borders */}
          <div className="absolute w-[1px] hidden md:block z-10 h-full bg-gray-100  left-0"></div>
          <div className="w-full flex">
            <div className="absolute w-full hidden md:block z-10 h-[1px] bg-gray-100 top-full"></div>
          <motion.span
          className="tag-4 border-[#575757] border-[0.1px] w-28 lg:w-36 px-2 py-1.5 left-full xl:top-[91%] top-[87%] text-[#575757] absolute text-base lg:text-xl"
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

        <div className="absolute hidden md:block md:bottom-[85%] xl:bottom-[90%] left-[57.1%] h-[50vh] xl:h-[20vh] md:h-[22vh]">
          {/* Box Borders */}
          {/* <div className="absolute w-full z-10 h-[2px] bg-gray-100 top-full"></div> */}
          <div className="w-full flex">
            <div className="absolute hidden md:block w-[1px] z-10 h-full bg-gray-100 right-0"></div>
            <motion.span
              className="tag-1 bg-white w-32 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute bottom-full -left-16 text-base lg:text-xl"
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
        <div className="absolute hidden md:block top-[80%] xl:top-[87%] md:left-[70%] xl:left-[65%] h-[50vh] md:h-[22vh] xl:h-[25vh] lg:h-[22vh]">
          {/* Box Borders */}
          {/* <div className="absolute w-full z-10 h-[2px] bg-gray-100 top-full"></div> */}
          <div className="w-full hidden md:flex">
            <div className="absolute hidden md:block w-[1px] z-10 h-full bg-gray-100 right-0"></div>
            <motion.span
          className="tag-5 border-[#575757] w-36 lg:w-40 border-[0.1px] px-2 py-1.5 text-[#575757] absolute top-full md:-left-[4.5rem] lg:-left-20 xl:-left-[5rem] text-base lg:text-xl"
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
        <div className="absolute hidden md:block top-[80%] xl:top-[87%] md:left-[23%] lg:left-[17%] h-[50vh] md:h-[27vh]">
          {/* Box Borders */}
          {/* <div className="absolute w-full z-10 h-[2px] bg-gray-100 top-full"></div> */}
          <div className="w-full flex">
            <div className="absolute hidden md:block w-[1px] z-10 h-full bg-gray-100 right-0"></div>
            <motion.span
          className="tag-5 border-[#575757] w-24 lg:w-28 border-[0.1px] px-2 py-1.5 text-[#575757] absolute top-full xl:left-[-3.5rem] lg:-left-16 text-base lg:text-xl"
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
        <div className="absolute md:top-[82%] xl:top-[90%] md:left-[-7%] lg:left-[-27%] xl:left-[-24%]  w-[7vw] md:w-[7vw] lg:w-[15vw] h-[50vh] md:h-[25vh] lg:h-[20vh]">
          {/* Box Borders */}
          <div className="absolute hidden md:block w-[1px] z-10 h-full bg-gray-100  right-0"></div>
          <div className="w-full flex">
            <div className="absolute hidden md:block w-full z-10 h-[1px] bg-gray-100 top-full"></div>
          <motion.span
          className="tag-4 border-[#575757] border-[0.1px] px-2 py-1.5 right-full top-[86%] text-[#575757] absolute text-base lg:text-xl"
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
        {/* <div className="absolute md:block hidden  bottom-[100%] left-[57%] z-0 h-[110%]  w-0 border-r-2 border-solid  border-gray-100" />
        <div className="absolute md:block hidden top-[100%] left-[65%] z-1 z-0 h-[155%]  w-0 border-r-2 border-solid  border-gray-100" />
        <div className="absolute md:block hidden top-[100%] left-[17%] z-1 z-0 h-[180%]  w-0 border-r-2 border-solid  border-gray-100" />
        <div className="absolute md:block hidden top-[100%]  left-[88.7%] z-1 z-0 h-[210%]  w-[14%] border-l-2 border-b-2 border-solid  border-gray-100" />
        <div className="absolute md:block hidden bottom-[50%] z-1 left-[100%] w-[19%] h-[110%] border-b-2 border-r-2  border-solid border-gray-100" />
        <div className="absolute md:block hidden bottom-[100%] z-1 -left-[4.3%] w-[13%] h-[140%] border-t-2 border-r-2  border-solid border-gray-100" />
        <div className="absolute md:block hidden top-[100%] z-1 lg:right-[93%]  xl:right-[96.5%] md:right-[80%]  w-[27%] h-[113%] border-b-2 border-r-2  border-solid border-gray-100" /> */}
      </div>
      <a
        href="https://forms.gle/aieChuaKTCfeBsDG9"
        className=" px-4 py-2 mt-4 sm:mt-0 text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
      >
        Request Access
      </a>
    </div>
    // <div className="w-[100vw]  h-screen bg-red-100">

    // </div>
  );
}
