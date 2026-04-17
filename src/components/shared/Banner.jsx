import React from "react";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <div className="container mx-auto px-3 my-5">
      <div className=" text-center space-y-3">
        <h2 className="text-3xl font-bold text-[#244D3F]">
          Friends to keep close in your life
        </h2>
        <p className="text-[#357a63] ">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white">
            + Add Friend
        </button>
      </div>
<BannerCard></BannerCard>
     
    </div>
  );
};

export default Banner;
