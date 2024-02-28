import React from "react";
import departments from "@/data/department/departments";
import Image from "next/image";
import Link from "next/link";
import { IoMdSettings } from "react-icons/io";
function customize() {}
function Departments() {
  return (
    <div>
      <div className="flex justify-between py-5 px-6">
        <p className="text-3xl font-semibold ">Departments</p>

        <p
          style={{ color: "#6a7077" }}
          className="flex items-center cursor-pointer"
          onClick={customize}
        >
          <IoMdSettings className="" />
          <span className="font-semibold text-xl">Customize</span>
        </p>
      </div>
      <div className="grid grid-cols-3">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="rounded-3xl p-5 bg-gray-300 m-5 flex justify-between"
          >
            <div className="rounded-md flex justify-center">
              <img src={dept.img} alt="img" className="h-16 rounded-2xl mr-4" />
              <div className="flex-col flex justify-center">
                <p className="" style={{ color: "#777" }}>
                  {dept.cat}
                </p>
                <p className="font-semibold text-xl">{dept.special}</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex -space-x-2">
                <img
                  className="inline-block size-[46px] rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Image Description"
                />
                <div className="hs-dropdown relative inline-flex [--placement:top-left]">
                  <button
                    id="hs-avatar-group-dropdown"
                    className="hs-dropdown-toggle inline-flex items-center justify-center size-[46px] rounded-full bg-white border-2 border-white font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-300 focus:outline-none focus:bg-blue-100 focus:text-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-800 dark:text-gray-400 dark:hover:text-white dark:focus:bg-blue-100 dark:focus:text-blue-600 dark:focus:ring-offset-gray-800"
                  >
                    <span className="font-medium leading-none">9+</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departments;
