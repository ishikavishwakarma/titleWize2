import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../css/Benefits.css";
import LoopingAnimatedButton from "./LoopingAnimatedButton";

const Benefits = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      className="h-fit py-20  w-full flex items-center justify-center "
      ref={ref}
    >
      <div className="flex w-[60%] ">
        {/* Left Section */}
        <motion.div
          className="side-1 w-full lg:w-[70%] flex items-center justify-center gap-6 flex-col"
          initial={{ x: "-100%", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="top1 w-full lg:w-[80%] border-[1.9px] border-[#201B1B] flex flex-col items-center justify-center p-8 gap-4 bg-white  shadow-sm">
             <LoopingAnimatedButton/>
            <h1 className="text-lg lg:text-2xl font-semibold text-start leading-relaxed">
              Save up to 2.5x in legal costs by transforming to automation.  <br />Do
              more with less.
            </h1>
          </div>
          <div className="top1 w-full lg:w-[80%] border-[1.9px] border-[#201B1B] flex items-center justify-between p-6 bg-white  shadow-sm">
            <h1 className="text-lg lg:text-2xl font-semibold w-full lg:w-[55%] text-start leading-relaxed">
              Save up to 10x spent on framing title flows. Close deals lightning
              fast.
            </h1>
            <img
              src="graph.avif"
              className="w-[50%] lg:w-[40%] object-contain"
              alt="Graph Illustration"
            />
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="side-2 w-full lg:w-[50%] flex items-center justify-center"
          initial={{ x: "100%", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="side2-right w-full lg:w-[80%] h-[100%] border-[1.9px] border-[#201B1B] flex flex-col items-center justify-center p-6 bg-white  shadow-sm">
            <img
              src="254.png"
              className="w-16 h-16 lg:w-[18vw] lg:h-[18vh] object-contain"
              alt="Secure Investment"
            />
            <h1 className="text-lg lg:text-3xl font-semibold text-start leading-relaxed mt-4">
              Secure your investments. Eliminate the risk of disputed properties
              before committing capital.
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
