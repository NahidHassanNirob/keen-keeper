"use client";
import React, { useContext } from "react";

import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip, Cell } from "recharts";
import { FriendsContext } from "@/context/friendsContext";
import Link from "next/link";

const Stats = () => {
  const { timeLine,allTimeLine } = useContext(FriendsContext);

  const dataCount = allTimeLine.reduce(
    (acc, item) => {
      const type = item.type.toLowerCase();
      if (type === "call") acc[0].value += 1;
      else if (type === "text") acc[1].value += 1;
      else if (type === "video") acc[2].value += 1;
      return acc;
    },
    [
      { name: "Call", value: 0 },
      { name: "Text", value: 0 },
      { name: "Video", value: 0 },
    ]
  );

  const COLORS = ["#244D3F", "#8B5CF6", "#34A853"];

  return (
    <div className="container mx-auto px-3 my-5">
      <h1 className="lg:text-2xl text-left font-bold mb-2 text-[#434953]">
        Friendship Analytics
      </h1>
      {timeLine.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4 rounded-md">
          <div className="text-5xl pb-3">📈</div>
          <h2 className="text-2xl font-bold text-gray-800">
            Analytics Not Ready
          </h2>
          <p className="text-gray-500 mt-2 max-w-sm">
            We don't have enough data to generate your friendship insights yet.
            Keep in touch with your friends to unlock your stats!
          </p>
          <Link
            href="/"
            className="mt-6 px-6 py-2 bg-[#244D3F] text-white rounded-lg hover:bg-[#1a3a30] transition-colors"
          >
            Go to Home
          </Link>
        </div>
      ) : (
        <div className="h-[450px] w-full bg-white shadow rounded-md p-5 flex flex-col">
          <h2 className="font-semibold text-left text-[18px] mb-4">
            By Interaction Type
          </h2>
          
          <div className="relative flex-1 w-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%" minWidth={0}>
              <PieChart>
                
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: "10px", 
                    border: "none", 
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)" 
                  }}
                />
                
                <Pie
                  data={dataCount}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {dataCount.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      stroke="none"
                      style={{ outline: 'none' }} 
                    />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;