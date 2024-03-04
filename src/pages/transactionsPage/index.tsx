import React from "react";
import TNavbar from "@/components/transactionsPageComp/TNavbar";
import Sidebar from "@/components/sidebar";
import TCard1 from "@/components/transactionsPageComp/TCard1";
import TGraphCard from "@/components/transactionsPageComp/TGraphCard";
import TTable from "@/components/transactionsPageComp/TTable";
import PieChart from "@/components/charts/pie";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";

const TransactionsPage = () => {
  return (
    <div className="bg-[#f4f7fe]">
      <div className="grid grid-cols-[auto,1fr] h-screen overflow-hidden">
        <div className="">
          <Sidebar />
        </div>
        <div className="overflow-scroll">
          <div>
            <TNavbar />
          </div>

          <div className="p-3">
            <div className="grid grid-rows-2 grid-cols-[auto,450px,auto] gap-3 ">
              <TCard1
                money="$878.24"
                text1="Total spend this month"
                text2="15% vs last month"
                icon=<BsGraphUpArrow />
              />
              <div className="row-span-2 border-2 border-gray-300 rounded-lg p-4 flex flex-col justify-between">
                <h1 className="text-2xl font-semibold">Net Worth</h1>
                <PieChart />
              </div>
              <div className="row-span-2 border-2 border-gray-300 rounded-lg">
                <TGraphCard />
              </div>
              <div>
                <TCard1
                  money="$213.68"
                  text1="Payment due this month"
                  text2="1 Unpaid document(s)"
                  icon=<BsCashCoin />
                />
              </div>
            </div>
          </div>

          <div>
            <TTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
