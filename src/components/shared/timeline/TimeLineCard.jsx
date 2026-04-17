"use client";
import { FriendsContext } from "@/context/friendsContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FaHistory, FaVideo } from "react-icons/fa";
import { MdWifiCalling3, MdOutlineMessage } from "react-icons/md";

const TimeLineCard = () => {
  const { timeLine } = useContext(FriendsContext);
 console.log(timeLine);
  return (
    <div>
      {timeLine.length===0? <div className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4">
      <div className="bg-gray-100 pb-3 rounded-full">
        <span className="text-5xl"><FaHistory /></span>
      </div>
      <h2 className="text-2xl font-bold text-gray-800">No History Found</h2>
      <p className="text-gray-500 mt-2 max-w-xs mx-auto">
        Your timeline is empty. Start interacting with your friends from the dashboard to see your history here!
      </p>
      <Link
        href="/" 
        className="mt-6 px-6 py-2 bg-[#244D3F] text-white rounded-lg hover:bg-[#1a3a30] transition-colors"
      >
        Go to Home
      </Link>
    </div> :<> {timeLine.map((single, ind) => (
        <div
          key={ind}
          className="bg-white  border-gray-200 rounded-md p-4 flex items-center gap-4 shadow-sm w-full mb-2"
        >
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
      ))}
      </>
      }
    </div>
  );
};

export default TimeLineCard;
