"use client";
import TimeLineCard from "@/components/shared/timeline/TimeLineCard";
import { FriendsContext } from "@/context/friendsContext";
import React, { useContext } from "react";

const TimeLinePage = () => {
  const { timeLine } = useContext(FriendsContext);

  return (
    <div className="max-w-7xl  mx-auto  px-4  my-5">
      <h1 className="text-2xl text-left font-bold mb-5 text-[#434953]">Timeline</h1>
      
      <div className="">
        {timeLine.map((single, ind) => (
          <TimeLineCard single={single} key={ind}></TimeLineCard>
        ))}
      </div>
    </div>
  );
};
export default TimeLinePage;
