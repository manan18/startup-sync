import React from "react";
import { FaHome } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { GoGoal } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { IoDocumentSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

const Sidebar = () => {
  const sidebarItems1 = [
    {
      id: 0,
      title: "Home",
      icon: <FaHome />,
    },
    {
      id: 1,
      title: "Teams",
      icon: <RiTeamFill />,
    },
    {
      id: 2,
      title: "Goals",
      icon: <GoGoal />,
    },
    {
      id: 3,
      title: "Private Tasks",
      icon: <FaStar />,
    },
    {
      id: 4,
      title: "Analytics",
      icon: <SiGoogleanalytics />,
    },
  ];

  const sidebarItems2 = [
    {
      id: 0,
      title: "Documents",
      icon: <IoDocumentSharp />,
    },
    {
      id: 1,
      title: "Settings",
      icon: <IoIosSettings />,
    },
  ];

  return (
    <div>
      <div className="py-[15%] text-center text-2xl font-bold">
        Startup Sync
      </div>
      <div className="px-[15%]">
        <div className="main-heading">
          <div className="text-medium py-[5%]">Main</div>
          <div className="main-content">
            {sidebarItems1.map((sidebarItem) => {
              return (
                <div className="py-[6%] rounded-md hover:bg-gray-100 hover:font-semibold hover:cursor-pointer">
                  <div className="flex items-center">
                    <div className="mr-3">{sidebarItem.icon}</div>
                    <div>{sidebarItem.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="other-heading mt-10">
          <div className="text-medium py-[5%]">Other</div>
          <div className="other-content">
            {sidebarItems2.map((sidebarItem) => {
              return (
                <div className="py-[6%] rounded-md hover:bg-gray-100 hover:font-semibold hover:cursor-pointer">
                  <div className="flex items-center">
                    <div className="mr-3">{sidebarItem.icon}</div>
                    <div>{sidebarItem.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
