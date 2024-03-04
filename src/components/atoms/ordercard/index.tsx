import ProductChart from "@/components/charts/productline";
import React from "react";

export const OrderCard = () => {
  return (
    <div className="w-full flex-col rounded-lg bg-white p-2 border-1 shadow-md">
      <div className="flex justify-between p-2">
        <h1 className="font-semibold text-xl">Order and Sales Overview</h1>
      </div>
      <ProductChart />
    </div>
  );
};

export default OrderCard;