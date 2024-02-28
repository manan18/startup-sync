import React from "react";
import Sidebar from "@/components/sidebar";
import DashboardCard from "@/components/atoms/dashCard";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-[15%,1fr] h-screen">
        <div className="">
          <Sidebar />
        </div>
        <div className="bg-gray-100">
          <DashboardCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
