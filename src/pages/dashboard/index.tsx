import React from "react";
import Sidebar from "@/components/sidebar";
import DashboardCard from "@/components/atoms/dashCard";
import { BsBell } from "react-icons/bs";
import Image from "next/image";
import ria from "@/assets/img/ria2.jpg";
import { IoIosArrowDown } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-1 flex-col p-4 bg-gray-200">
        <div className="flex justify-between">
          <h1 className="tracking-wide font-semibold text-2xl">Welcome Back, Ria!</h1>
          <div className="flex gap-3 items-center">
            <BsBell className="text-2xl" />
            <Image src={ria} alt="Ria" width={30} height={30} className="rounded-full" />
            <IoIosArrowDown className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
