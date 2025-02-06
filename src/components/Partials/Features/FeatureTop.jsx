import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Home, ChevronDown, FileText, Download } from "lucide-react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FeatureTop = () => {
  const transactions = [
    {
      date: "01/02/2006",
      firstParty: "Venkatappa",
      secondParty: "Kalpana S.",
      nature: "Sale Deed",
      reference: "DEV-1-00117-2007-07",
    },
    {
      date: "21/12/2007",
      firstParty: "Kalpana S.",
      secondParty: "Pramod T.S.",
      nature: "Gift Deed",
      reference: "DEV-1-08145-2007-08",
    },
    {
      date: "07/01/2011",
      firstParty: "Pramod T.S.",
      secondParty: "Mohan Rao",
      nature: "Sale Deed",
      reference: "DEV-1-00071-2011-12",
    },
    {
      date: "13/06/2011",
      firstParty: "Mohan Rao",
      secondParty: "Rio M. D'Sa",
      nature: "Sale Deed",
      reference: "DEV-1-01175-2011-12",
    },
    {
      date: "11/11/2015",
      firstParty: "Rio M. D'Sa",
      secondParty: "Munirayappa",
      nature: "Sale Deed",
      reference: "DEV-1-10011-2015-16",
    },
    {
      date: "07/08/2021",
      firstParty: "Munirayappa",
      secondParty: "Amir Beg",
      nature: "Sale Deed",
      reference: "DEV-1-06771-2020-21",
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="flex lg:w-full w-full px-3 xl:w-[90%] md:h-fit gap-3 flex-col md:flex-row items-center justify-evenly lg:px-1 xl:px-10 "
    >
      {/* Left Div */}
      <div className=" h-full w-full md:w-[40%]  lg:w-[35%] flex-col md:flex-row flex items-center justify-center ">
        <div className=" md:w-[85%] lg:w-[80%] border-2  border-black p-5">
          <h1 className="xl:text-3xl text-2xl lg:text-2xl tracking-tighter leading-tight font-semibold text-[#201B1B]">
            Generate title flows instantly.
          </h1>
          <h3 className="lg:text-base text-sm xl:text-lg mt-6">
            Be it risk assessment for sanctioning secured loans or large-scale
            real estate projects, generate title history of lands in seconds
            with Titlewize. Get detailed, accurate, and actionable information
            of past transactions, mortgages, and ownership to help you make
            informed investments.
          </h3>
        </div>
      </div>

      {/* Right Div with Animation */}
      <motion.div
        className=" flex w-full items-center justify-center h-full md:w-[65%] lg:w-[55%] xl:w-[60%]     "
        initial={{ x: "100%", opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      >
        <div className="flex flex-col md:flex-row   bg-[#fafafa]  overflow-hidden">
          {/* Left Sidebar */}
          <div className=" md:w-48 bg-[#fafafa] border-r border-gray-200">
            <button className="flex items-center p-5">
              <Home className="w-4 h-4 text-gray-500" />
            </button>
            <div className="">
              <div className="space-y-1">
                <div className="bg-gray-200 relative h-8 flex items-center xl:px-4 text-sm rounded">
                  <div className="absolute h-full w-[2px]  bg-red-500 left-0"></div>
                  <h1 className="ml-2">New Titleflow</h1>
                </div>
                <button className="w-full  justify-between h-8 flex items-center md:px-4 text-sm text-gray-700 hover:bg-gray-100 rounded">
                  History
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="w-full  justify-between h-8 flex items-center px-4 text-sm text-gray-700 hover:bg-gray-100 rounded">
                  Saved
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 w-full py-5 px-2 p-2 lg:p-5 bg-white">
            <div className="flex items-center justify-between mb-2">
              <img
                className="md:w-20 w-full md:pl-2"
                src="/Titlewize_logo.png"
                alt=""
              />
            </div>
            
            {/* Progress Steps */}
            <div className="flex items-center h-8  mt-5 mb-4 text-sm ">
            <div className="pointer pt-1 bg-[#E5E7EB]">
              <div className="text-content">
                <p className=" text-black rounded  font-semibold  px-2 py-1 text-xs capitalize ">
                  Property details
                </p>
              </div>
            </div>
            <div className="pointer pt-1 bg-[#E5E7EB]">
              <div className="text-content">
                <p className=" text-black rounded  font-semibold  px-2 py-1 text-xs capitalize ">
                  Upload documents
                </p>
              </div>
            </div>
            <div className="pointer pt-1 bg-black">
              <div className="text-content">
                <p className="  text-white font-semibold px-2 py-1 text-xs capitalize rounded">
                  Generate Titleflow
                </p>
              </div>
            </div>
            </div>

            {/* View Options */}
            <div className="flex gap-4 mb-6 flex-wrap  pl-2 ">
              <div className="w-fit h-8 p-1  border rounded-full flex items-center justify-center">
                <button className="px-4 py-1 bg-red-500 text-white rounded-full text-xs">
                  Brief
                </button>
                <button className="px-4 py-1 text-gray-600 hover:bg-gray-100 rounded-full text-xs">
                  Timeline
                </button>
                <button className="px-4 py-1 text-gray-600 hover:bg-gray-100 rounded-full text-xs">
                  Detailed
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white  rounded-lg scale-90 shadow-sm overflow-auto">
              <table className="w-full text-sm border">
                <thead>
                  <tr className="border-b bg-gray-100">
                    <th className=" p-2 font-semibold text-center text-black">
                      Date
                    </th>
                    <th className=" p-2 font-semibold text-center text-black">
                      First Party
                    </th>
                    <th className=" p-2 font-semibold text-center text-black">
                      Second Party
                    </th>
                    <th className=" p-2 font-semibold text-center text-black">
                      Nature of Transaction
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr
                      key={index}
                      className={cn(
                        "",
                        index === transactions.length - 1 && "border-b-0"
                      )}
                    >
                      <td className="p-2 text-center">{transaction.date}</td>
                      <td className="p-2 text-center">
                        {transaction.firstParty}
                      </td>
                      <td className="p-2 text-center">
                        {transaction.secondParty}
                      </td>
                      <td className="p-2 text-center">
                        <div className="flex flex-col text-center">
                          <span>{transaction.nature}</span>
                          <span className="text-xs text-gray-500">
                            {transaction.reference}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Download Options */}
            <div className="flex justify-end mt-4 gap-4">
              <button className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded-sm">
                <Download className="w-3 h-3" />
                Download as PDF
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded-sm">
                <Download className="w-3 h-3" />
                Download as XLSX
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureTop;
