import React from "react";
import sidebarItems1 from "@/data/sidebar/sidebarItems";
import { useRouter } from "next/router";
import clsx from "clsx";
import logo from "@/assets/img/newlogo.svg";
import Image from "next/image";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-2 p-8 shadow-md h-screen bg-[#0353a4] px-10 text-white">
      <Image src={logo} alt="logo" width={200} height={200} className="py-4" />
      {/* <h1 className="py-8 text-center text-3xl font-bold">Startup Sync</h1> */}
      <div className="main-content flex flex-col gap-2 p-2">
        {sidebarItems1.map((sidebarItem, index) => {
          return (
<<<<<<< HEAD
            <div className="p-2 rounded-md hover:bg-gray-100 transition-all duration-75 hover:scale-105 text-sm hover:cursor-pointer">
              <div className="flex items-center" key={sidebarItem.id}>
=======
            <div className={clsx("p-2 rounded-md hover:bg-blue-900 px-3 transition-all duration-75 hover:scale-105 text-md hover:cursor-pointer", {
              "bg-blue-900": router.pathname === sidebarItem.slug,
            })} key={index} onClick={() => router.push(sidebarItem.slug)}>
              <div className="flex items-center">
>>>>>>> b92c5ed06c94fda4fda51c7ed6fda4794b4e9a49
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
