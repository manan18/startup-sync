import React from "react";
import Sidebar from "../sidebar";
import DashboardCard from "../atoms/dashCard";

const Layout = () => {
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

export default Layout;
