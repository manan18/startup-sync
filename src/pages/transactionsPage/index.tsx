import React from "react";
import TNavbar from "@/components/transactionsPageComp/TNavbar";
import Sidebar from "@/components/sidebar";
import TCard1 from "@/components/transactionsPageComp/TCard1";

const TransactionsPage = () => {
  return (
    <div>
      <div className="grid grid-cols-[auto,1fr] h-screen">
        <div className="">
          <Sidebar />
        </div>
        <div className="bg-gray-100">
          <div>
            <TNavbar />
          </div>
          <div className="p-5">
            <div className="mb-5">
              <TCard1
                money="$878.24"
                text1="Total spend this month"
                text2="15% vs last month"
              />
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
  );
};

export default TransactionsPage;
