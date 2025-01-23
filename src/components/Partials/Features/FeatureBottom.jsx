import React from "react";
import { AlertCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const FeatureBottom = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <div className="flex    mt-5   w-full   items-center justify-center ">
      <div className=" w-[74%] h-full flex  justify-between">
      {/* Left Section */}
      <div className="w-[40%]  h-[60%]  flex flex-col items-center justify-between ">
        <div className="p-5 border-2 border-black flex flex-col items-center justify-center ">
          <p className=" text-2xl font-bold">
            Convert title flows into flow <br /> charts for easier understanding.
          </p> <br />
          <img
            src="/Frame 236.png"
            className="w-full"
            alt="Feature illustration"
          />
        </div>
        <div className="w-full flex flex-col items-start  mt-10 ml-4 justify-center ">
            
          <img
            src="Law.png"
            className=""
            alt="Law icon"
          />
          <h1 className="text-7xl  font-bold ">
            Designed by real estate lawyers.
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[60%]  h-full  gap-10  flex flex-col items-end justify-between">
        {/* Table Section */}
        <div className="part-1 min-h-[40%] w-[80%] p-6 border-[1.9px] border-gray-800 ">
          <div className="bg-white rounded-lg overflow-hidden">
            <table className="w-full text-left border">
              <thead className="bg-gray-100 font-bold">
                <tr>
                  <th className="px-4 py-2 text-lg font-bold text-center text-gray-900">
                    MR Entry
                  </th>
                  <th className="px-4 py-2 text-lg font-bold text-center text-gray-900">
                    EC Entry
                  </th>
                  <th className="px-4 py-2 text-lg font-bold text-center text-gray-900">
                    RTC Entry
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y text-center text-base divide-gray-200">
                <tr>
                  <td className="px-4 py-2 ">
                    MR 11/
                    <br />
                    2006-07
                  </td>
                  <td className="px-4 py-2 ">Present</td>
                  <td className="px-4 py-2 ">Present</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 ">
                    MR H12/
                    <br />
                    2017-18
                  </td>
                  <td className="px-4 py-2 ">Present</td>
                  <td className="px-4 py-2 ">Present</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 ">
                    MR H11/
                    <br />
                    2021-22
                  </td>
                  <td className="px-4 py-2  text-red-500">Not found</td>
                  <td className="px-4 py-2 ">Present</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-2 ">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Verify encumbrance and revenue <br /> records.
            </h2>
            <p className="text-base font-medium  text-gray-800 leading-relaxed">
              Titlewize verifies every document that matters. Get complete title
              flow with automated cross-referencing of revenue records,
              encumbrance certificates, and title deeds.
            </p>
          </div>
        </div>

        {/* Notification Section */}
        <div className="part-2  w-[80%] p-6 bg-white border-[1.9px] border-gray-800 ">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
            Get notified of any issues in the title flow.
          </h2>
          <p className="mt-4 text-sm  leading-relaxed text-gray-800">
            Our AI instantly flags broken chains, missing documents, and revenue
            record discrepancies—protecting your investments from costly
            disputes.
          </p>
          <div ref={ref} className="mt-6 border-2 rounded-lg border-gray-800 p-5 space-y-4">
            {/* Card 1 */}
            <motion.div
              className="card flex items-start gap-3 p-4 bg-red-100 rounded-lg border-2 border-red-700"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <p className="text-base leading-relaxed text-gray-900">
                The EC does not reflect Sale Deed bearing Document No.
                KRI-1-005177-2020-21.
              </p>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              className="card flex items-start gap-3 p-4 bg-red-100 rounded-lg border-2 border-red-700"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <p className="text-base leading-relaxed text-gray-900">
                There's a break in the chain of title between Paul D'Souza
                (owner vide Sale Deed bearing Document No. MDP-1-010408-2011-12)
                and Roy D'Mello (seller vide Sale Deed bearing Document No.
                GAN-1-11009-2015-16).
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FeatureBottom;
