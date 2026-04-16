import React from "react";
import { FaVideo } from "react-icons/fa";
import { MdWifiCalling3, MdOutlineMessage } from "react-icons/md";

const TimeLineCard = ({ single }) => {
  return (
    
    <div className="bg-white border border-gray-200 rounded-md p-4 flex items-center gap-4 shadow-sm w-full mb-2">
      <div className="text-2xl text-yellow-500 ">
        {" "}
        
        {single.type === "call" ? (
          <MdWifiCalling3 />
        ) : single.type === "text" ? (
          <MdOutlineMessage />
        ) : (
          <FaVideo />
        )}
      </div>

      <div className="flex flex-col flex-1">
        {" "}
        
        <div className="flex items-baseline gap-1.5">
          <h2 className="font-bold text-[#1a4d3a] capitalize text-lg">
            {single.type}
          </h2>
          <span className="text-gray-500 text-sm font-medium">
            with {single.name}
          </span>
        </div>
        <p className="text-[#6b7280] text-sm mt-0.5">{single.date}</p>
      </div>
    </div>
  );
};

export default TimeLineCard;
