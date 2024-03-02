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
    <div className="flex-col flex-1 rounded-lg bg-white p-2 border-1 shadow-md">
      <div className="flex justify-between p-2">
        <div>
          <h1 className="font-sans font-semibold">Customer</h1>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </div>

      <div className="flex-col text-slate-600 p-2 flex gap-2">
        <div className="flex flex-col gap-1">
          <div className="text-sm font-semibold">{current}</div>
          <div className="text-xs text-purple-500">{percent1}</div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-sm font-semibold">{newcust}</div>
          <div className="text-xs text-yellow-500">{percent2}</div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-sm font-semibold">{retargeting}</div>
          <div className="text-xs text-orange-500">{percent3}</div>
        </div>
      </div>
    </div>
  );
};
