import React from "react";
import { FaEye } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";

const DashboardCard = () => {
  return (
    <div className="dashCard flex bg-white w-[17%] items-center p-[2%] rounded-xl shadow">
      <div className="icon-box p-[6%] bg-cyan-200 rounded text-2xl rounded-xl">
        <FaEye />
      </div>
      <div className="text-box px-[10%]">
        <div>Visual</div>
        <div className="font-bold">UX Designer</div>
      </div>
      <div className="text-2xl">
        <IoMdPhotos />
      </div>
    </div>
  );
};

export default DashboardCard;
