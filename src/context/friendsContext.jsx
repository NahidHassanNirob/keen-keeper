"use client";
import { createContext, useState } from "react";
export const FriendsContext = createContext()
const FriendsProvider = ({ children }) => {
    const[timeLine,setTimeLine]=useState([])
   
    const data={
        timeLine,
        setTimeLine,
    }
  return <FriendsContext.Provider value={data} > {children} </FriendsContext.Provider>;
};

export default FriendsProvider;
