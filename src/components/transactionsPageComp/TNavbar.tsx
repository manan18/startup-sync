import React from "react";
import { IoMdDownload } from "react-icons/io";

const TNavbar = () => {
  return (
    <div className="flex p-4 justify-between items-center border-b-2 border-gray-300">
      <div className="heading flex flex-col">
        <div className="text-3xl mb-2 font-semibold">Expense Summary</div>
        <div>
          Track & manage your spending with ease. Overview of your spending by
          category, document type and more.
        </div>
      </div>
      <div className="button bg-gray-200 p-3 rounded text-cyan-500 font-semibold flex items-center hover:bg-gray-300 hover: cursor-pointer">
        <div className="mr-2">
          <IoMdDownload />
        </div>
        <div className="">Export .CSV</div>
      </div>
    </div>
  );
};

export default TNavbar;
