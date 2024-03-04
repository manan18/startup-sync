import React from "react";
import sidebarItems1 from "@/data/sidebar/sidebarItems";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 p-5">
      <h1 className="py-[15%] text-center text-2xl font-bold">Startup Sync</h1>
      <div className="main-content flex flex-col gap-2 p-2">
        {sidebarItems1.map((sidebarItem) => {
          return (
            <div className="p-2 rounded-md hover:bg-gray-100 transition-all duration-75 hover:scale-105 text-sm hover:cursor-pointer">
              <div className="flex items-center" key={sidebarItem.id}>
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
