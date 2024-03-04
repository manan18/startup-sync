import React from "react";
import { BsThreeDots } from "react-icons/bs";

type CustomerCardProps = {
  title: string;
  current: string;
  newcust: string;
  retargeting: string;
  percent1: string;
  percent2: string;
  percent3: string;
};

export const CustomerCard: React.FC<CustomerCardProps> = ({
  title,
  current,
  newcust,
  retargeting,
  percent1,
  percent2,
  percent3,
}) => {
  return (
    <div className="flex-col flex-1 rounded-lg bg-white p-4 border-1 shadow-md">
      <div className="flex justify-between p-2">
        <div>
          <h1 className="font-semibold text-2xl">Customer</h1>
        </div>
        <div className="items-center">
          <BsThreeDots />
        </div>
      </div>

      <div className="flex-col text-slate-500 p-2 flex gap-3">
        <div className="flex flex-col gap-1">
          <div className="text-md font-semibold">{current}</div>
          <div className="text-sm text-purple-500 antialiased">{percent1}</div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-md font-semibold">{newcust}</div>
          <div className="text-sm text-yellow-500 antialiased">{percent2}</div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-md font-semibold">{retargeting}</div>
          <div className="text-sm text-orange-500 antialiased">{percent3}</div>
        </div>
      </div>
    </div>
  );
};
