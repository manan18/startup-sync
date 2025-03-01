import { GetStaticProps } from "next";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import { FaRegUser } from "react-icons/fa6";

export const SalesCard = () => {
  return (
    <div className="flex flex-col flex-1 justify-between bg-white rounded-lg shadow-md p-2 border-1">
      <div className="flex justify-between items-center">
        <div className="p-2">
          <h1 className="font-semibold text-xl">Recent Sales</h1>
        </div>
        <div className="text-indigo-500 text-sm p-3">See All</div>
      </div>

      <div className="flex p-2 gap-2 hover:bg-gray-300 rounded-md justify-between items-center">
        <div className="flex gap-2">
          <div className="py-3 px-1">
            <FaRegUser />
          </div>
          <div className="flex flex-col">
            <h1 className="text-slate-500 text-md">John Cooper</h1>
            <p className="text-slate-500 text-sm">45 minutes ago</p>
          </div>
        </div>
        <h1 className="text-slate-500 text-md p-2">+$2500</h1>
      </div>
      <div className="flex p-2 gap-2 hover:bg-gray-300 rounded-md justify-between items-center">
        <div className="flex gap-2">
          <div className="py-3 px-1">
            <FaRegUser />
          </div>
          <div className="flex flex-col">
            <h1 className="text-slate-500 text-md">John Cooper</h1>
            <p className="text-slate-500 text-sm">45 minutes ago</p>
          </div>
        </div>
        <h1 className="text-slate-500 text-md p-2">+$2500</h1>
      </div>
      <div className="flex p-2 gap-2 hover:bg-gray-300 rounded-md justify-between items-center">
        <div className="flex gap-2">
          <div className="py-3 px-1">
            <FaRegUser />
          </div>
          <div className="flex flex-col">
            <h1 className="text-slate-500 text-md">John Cooper</h1>
            <p className="text-slate-500 text-sm">45 minutes ago</p>
          </div>
        </div>
        <h1 className="text-slate-500 text-md p-2">+$2500</h1>
      </div>
      <div className="flex p-2 gap-2 hover:bg-gray-300 rounded-md justify-between items-center">
        <div className="flex gap-2">
          <div className="py-3 px-1">
            <FaRegUser />
          </div>
          <div className="flex flex-col">
            <h1 className="text-slate-500 text-md">John Cooper</h1>
            <p className="text-slate-500 text-sm">45 minutes ago</p>
          </div>
        </div>
        <h1 className="text-slate-500 text-md p-2">+$2500</h1>
      </div>
      <div className="flex p-2 gap-2 hover:bg-gray-300 rounded-md justify-between items-center">
        <div className="flex gap-2">
          <div className="py-3 px-1">
            <FaRegUser />
          </div>
          <div className="flex flex-col">
            <h1 className="text-slate-500 text-md">John Cooper</h1>
            <p className="text-slate-500 text-sm">45 minutes ago</p>
          </div>
        </div>
        <h1 className="text-slate-500 text-md p-2">+$2500</h1>
      </div>

    </div>
  );
};

export default SalesCard;
