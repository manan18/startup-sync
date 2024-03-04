import React from "react";
import TNavbar from "@/components/transactionsPageComp/TNavbar";
import Sidebar from "@/components/sidebar";
import TCard1 from "@/components/transactionsPageComp/TCard1";
import TGraphCard from "@/components/transactionsPageComp/TGraphCard";

const TransactionsPage = () => {
  return (
    <div>
      <div className="grid grid-cols-[15%,1fr] h-screen">
        <div className="">
          <Sidebar />
        </div>
        <div className="bg-gray-100">
          <div>
            <TNavbar />
          </div>

          <div className="p-7">
            <div className="grid grid-rows-2 grid-cols-2 gap-7">
              <div className="">
                <TCard1
                  money="$878.24"
                  text1="Total spend this month"
                  text2="15% vs last month"
                />
              </div>
              <div className="row-span-2 border-2 border-gray-300 rounded-lg">
                <TGraphCard />
              </div>
              <div>
                <TCard1
                  money="$213.68"
                  text1="Payment due this month"
                  text2="1 Unpaid document(s)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
