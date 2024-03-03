import React from "react";
import sidebarItems1 from "@/data/sidebar/sidebarItems";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 p-8 shadow-md h-screen">
      <h1 className="py-[15%] text-center text-3xl font-bold">Startup Sync</h1>
      <div className="main-content flex flex-col gap-2 p-2">
        {sidebarItems1.map((sidebarItem, index) => {
          return (
            <div className="p-2 rounded-md hover:bg-slate-100 transition-all duration-75 hover:scale-105 text-md hover:cursor-pointer" key={index}>
              <div className="flex items-center">
                <div className="mr-3">{sidebarItem.icon}</div>
                <div>{sidebarItem.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
