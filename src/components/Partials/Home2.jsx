import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import "../css/Home.css";

// const getAnimation = (width, xValues, yValues,delay) => {
//   let scaleFactor = 1;
//   if (width >= 1280) scaleFactor = 1;
//   else if (width >= 1024) scaleFactor = 1;
//   else if (width >= 768) scaleFactor = 0.7;
//   else if (width <= 768) scaleFactor = 0.7;

//   return {
//     x: xValues.map((val) => `${parseFloat(val) * scaleFactor}%`),
//     y: yValues.map((val) => `${parseFloat(val) * scaleFactor}%`),
//     transition: { duration: 5, ease: "easeInOut",delay: delay },
//   };
// };
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

const MovingDot = ({ initialPosition, delay, xValuesMap, yValuesMap, className }) => {
  const controls = useAnimation();
  const [animationValues, setAnimationValues] = useState(() =>
    getResponsiveValues(window.innerWidth, xValuesMap, yValuesMap)
  );

  useEffect(() => {
    const updateAnimation = () => {
      const newValues = getResponsiveValues(window.innerWidth, xValuesMap, yValuesMap);
      setAnimationValues(newValues);  // Update the values based on current width
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

export default function MovingDotsContainer() {
  return (
    <div className="home bg-white w-screen   h-[80vh] xl:h-[80vh] mt-10 flex items-center justify-center  flex-col gap-3">

      <div
        className="home-center w-[70vw] relative  z-30 top-8 border-dashed text-[5vh] font-bold h-[16vh] lg:w-[55vw] xl:w-[55vw] xxl:w-[75vw] flex items-center justify-center text-center "
        // style={{
        //   backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333333FF' stroke-width='2' stroke-dasharray='9.5%2c 14' stroke-dashoffset='30' stroke-linecap='square'/%3e%3c/svg%3e")`,
        //   backgroundRepeat: "repeat",
        //   backgroundSize: "100% 100%", 
        // }}
      >
      <motion.span
        className="tag-1 bg-white  border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute lg:bottom-[202%]  xl:bottom-[220%] xl:-left-[11%] lg:-left-[14.5%] text-xl"
        initial={{ opacity: 0.2 }} // Initially hidden
        animate={{ opacity: 1 }} // Dynamic opacity based on state
        transition={{ duration: 1, delay: 12 }}
      >
        RTC
      </motion.span>

      <motion.span
        className="tag-2 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute bottom-[210%] left-[47%] lg:left-[48%] xl:left-[50%] text-xl"
        initial={{ opacity: 0.2 }} // Initially hidden
        animate={{ opacity: 1 }} // Dynamic opacity based on state
        transition={{ duration: 1, delay: 7 }}
      >
        Sale Deed
      </motion.span>

      <motion.span
        className="tag-3 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute bottom-[160%] lg:left-[105%] xl:left-[110%] text-xl "
        initial={{ opacity: 0.2 }} // Initially hidden
        animate={{ opacity: 1 }} // Dynamic opacity based on state
        transition={{ duration: 1, delay: 2 }}
      >
        Encumbrance <br /> certificate
      </motion.span>

      <motion.span
        className="tag-4 border-[#575757] border-[0.1px] w-36 px-2 py-1.5 text-[#575757] absolute lg:-bottom-[234%] xl:-bottom-[225%] left-[102.7%] text-xl"
        initial={{ opacity: 0.2 }} // Initially hidden
        animate={{ opacity: 1 }} // Dynamic opacity based on state
        transition={{ duration: 1, delay: 12 }}
      >
        Grant Order
      </motion.span>

      <motion.span
        className="tag-5 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute top-[255%] left-[52%] xl:left-[56%] text-xl"
        initial={{ opacity: 0.2 }} // Initially hidden
        animate={{ opacity: 1 }} // Dynamic opacity based on state
        transition={{ duration: 1, delay: 2 }}
      >
        Partition Deed
      </motion.span>

      <motion.span
        className="tag-6 border-[#575757] bg-white border-[0.1px] px-4 py-1.5 text-[#575757] absolute top-[280%] lg:right-[72%] xl:right-[75%] text-xl"
        initial={{ opacity: 0.2 }} // Initially hidden
        animate={{ opacity: 1 }} // Dynamic opacity based on state
        transition={{ duration: 1, delay: 7 }}
      >
        Mutation <br /> Register
      </motion.span>

      <motion.span
        className="tag-7 border-[#575757] border-[0.1px] px-2 py-1.5 text-[#575757] absolute -bottom-[130%] -left-[30%] text-xl"
        initial={{ opacity: 0.2 }} // Initially hidden
        animate={{ opacity: 1 }} // Dynamic opacity based on state
        transition={{ duration: 1, delay: 12 }}
      >
        Will
      </motion.span>

      <MovingDot
        initialPosition={{ y: "100%", x: "0%" }}
        xValuesMap={{
          sm: ["0%"],md: ["0%"], lg: ["0%"], xl: ["0%"]
        }}
        // delay={5}
        yValuesMap={{
          sm: ["100%", "-2590%", "100%"], md: ["100%", "-2590%", "100%"], lg: ["100%", "-2590%", "100%"], xl: ["100%", "-2590%", "100%"],
        }}
        // yValues={["100%", "-2590%", "100%"]}
        className="union-7 w-[5px] h-[5px] bg-red-500 z-10  absolute bottom-[79%] left-[56.8%] mb-5"
      />
       <MovingDot
        initialPosition={{ y: "100%", x: "0%" }}
        xValuesMap={{
          sm: ["0%"],md: ["0%"], lg: ["0%"], xl: ["0%"]
        }}
        yValuesMap={{
          sm: ["100%", "4000%", "100%"], md: ["100%", "4000%", "100%"], lg: ["100%", "4000%", "100%"], xl: ["100%", "3750%", "100%"],
        }}
        // yValues={["100%", "4000%", "100%"]}
        className="union-3 w-[5px] h-[5px] bg-red-500 z-10 absolute top-[89%] left-[64.8%]"
      />
      
      <MovingDot
        initialPosition={{ y: "100%", x: "0%" }}
        xValuesMap={{
          sm: ["0%", "3250%", "3250%", "3250%", "0%"],md: ["0%", "3250%", "3250%", "3250%", "0%"], lg: ["0%", "2200%", "2200%", "2200%", "0%"], xl: ["0%", "3250%", "3250%", "3250%", "0%"]
        }}
        yValuesMap={{
          sm: ["0%", "0%", "-2470%", "-2470%", "0%", "0%"], md: ["0%", "0%", "-2470%", "-2470%", "0%", "0%"], lg: ["0%", "0%", "-2900%", "-2900%", "0%", "0%"], xl: ["0%", "0%", "-2470%", "-2470%", "0%", "0%"],
        }}
        // xValues={["0%", "3250%", "3250%", "3250%", "0%"]}
        // yValues={["0%", "0%", "-2470%", "-2470%", "0%", "0%"]}
        className="union-1 w-[5px] h-[5px] bg-red-500 z-10 absolute top-[47%] right-[0.1%] mb-5"
      />

      <MovingDot
        initialPosition={{ y: "100%", x: "0%" }}
        // xValues={["0%"]}
        xValuesMap={{
          sm: ["0%"],md: ["0%"], lg: ["0%"], xl: ["0%"]
        }}
        // delay={5}
        yValuesMap={{
          sm: ["100%", "5500%", "100%"], md: ["100%", "5500%", "100%"], lg: ["100%", "5500%", "100%"], xl: ["100%", "4350%", "100%"],
        }}
        // yValues={["100%", "5500%", "100%"]}
        className="union-4 w-[5px] h-[5px] bg-red-500 z-10 absolute top-[89%] left-[16.9%] mb-5"
      />
      
      <MovingDot
        initialPosition={{ y: "100%", x: "100%" }}
        xValuesMap={{
          sm: ["100%","100%","100%","2400%","2400%","100%","100%","100%"],md: ["100%","100%","100%","2400%","2400%","100%","100%","100%"], lg: ["100%","100%","100%","2400%","2400%","100%","100%","100%"], xl: ["100%","100%","100%","2400%","2400%","100%","100%","100%"]
        }}
        // xValues={["100%","100%","100%","2400%","2400%","100%","100%","100%"]}
        yValuesMap={{
          sm: ["100%", "5300%", "5300%", "5300%", "100%"], md: ["100%", "5300%", "5300%", "5300%", "100%"], lg: ["100%", "5300%", "5300%", "5300%", "100%"], xl: ["100%", "5100%", "5100%", "5100%", "100%"],
        }}
        // yValues={["100%", "5300%", "5300%", "5300%", "100%"]}
        // delay={10}
        className="union-2 w-[5px] h-[5px] bg-red-500 z-10 absolute  top-[89%] right-[11.5%] mb-5"
      />
      
      <MovingDot
        initialPosition={{ y: "100%", x: "0%" }}
        xValuesMap={{
          sm: [ "100%","100%","100%","-4390%","-4390%","100%","100%","100%"],md: [ "100%","100%","100%","-4390%","-4390%","100%","100%","100%"], lg: [ "100%","100%","100%","-4390%","-4390%","100%","100%","100%"], xl: [ "100%","100%","100%","-4390%","-4390%","100%","100%","100%"]
        }}
        // xValues={[ "100%","100%","100%","-4390%","-4390%","100%","100%","100%"]}
        yValuesMap={{
          sm: ["100%", "2820%", "2820%", "2820%", "100%"], md: ["100%", "2820%", "2820%", "2820%", "100%"], lg: ["100%", "2820%", "2820%", "2820%", "100%"], xl: ["100%", "2820%", "2820%", "2820%", "100%"],
        }}
        // yValues={["100%", "2820%", "2820%", "2820%", "100%"]}
        // delay={10}
        className="union-5 w-[5px] h-[5px] bg-red-500 z-10  absolute top-[89%] lg:left-8 xl:left-[2.5%] mb-5"
      />

      <MovingDot
        initialPosition={{ y: "100%", x: "0%" }}
        xValuesMap={{
          sm: ["0%", "0%", "-2100%", "-2100%", "0%", "0%"],md: ["0%", "0%", "-2100%", "-2100%", "0%", "0%"], lg: ["0%", "0%", "-2100%", "-2100%", "0%", "0%"], xl: ["0%", "0%", "-2100%", "-2100%", "0%", "0%"]
        }}
        yValuesMap={{
          sm: ["100%", "-3300%", "-3300%", "-3300%", "100%"], md: ["100%", "-3300%", "-3300%", "-3300%", "100%"], lg: ["100%", "-3300%", "-3300%", "-3300%", "100%"], xl: ["100%", "-3300%", "-3300%", "-3300%", "100%"],
        }}
        // xValues={["0%", "0%", "-2100%", "-2100%", "0%", "0%"]}
        // yValues={["100%", "-3300%", "-3300%", "-3300%", "100%"]}
        // delay={10}
        className="union-6 w-[5px] h-[5px] bg-red-500 z-10 absolute bottom-[79%] left-[8.3%] mb-5"
      />
        <h1  style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333333FF' stroke-width='2' stroke-dasharray='9.5%2c 14' stroke-dashoffset='30' stroke-linecap='square'/%3e%3c/svg%3e")`,
          backgroundRepeat: "repeat",
          backgroundSize: "100% 100%", 
        }} className="text-[20px] bg-white absolute z-30 w-full flex justify-center items-center h-full xl:text-3xl">
        <h1> Generate title flows, compare revenue records, <br /> check
        encumbrances in <span className="bg-[#EF36394D]">seconds.</span></h1>
         
        </h1>
      <div className="absolute bottom-[100%] left-[57%] z-0 h-[110%]  w-0 border-r-2 border-solid  border-gray-100" />
      <div className="absolute top-[100%] left-[65%] z-1 z-0 h-[155%]  w-0 border-r-2 border-solid  border-gray-100" />
      <div className="absolute top-[100%] left-[17%] z-1 z-0 h-[180%]  w-0 border-r-2 border-solid  border-gray-100" />
      <div className="absolute top-[100%]  left-[88.7%] z-1 z-0 h-[210%]  w-[14%] border-l-2 border-b-2 border-solid  border-gray-100" />
      <div className="absolute bottom-[50%] z-1 left-[100%] w-[19%] h-[110%] border-b-2 border-r-2  border-solid border-gray-100" />
      <div className="absolute bottom-[100%] z-1 -left-[4.3%] w-[13%] h-[140%] border-t-2 border-r-2  border-solid border-gray-100" />
      <div className="absolute top-[100%] z-1 lg:right-[93%]  xl:right-[96.5%] md:right-[80%]  w-[27%] h-[113%] border-b-2 border-r-2  border-solid border-gray-100" />
      </div>
      <a
        href="https://forms.gle/aieChuaKTCfeBsDG9"
        className="home-btn px-4 py-2 mt-24 text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
      >
        Request Access
      </a>

    </div>
  );
}
