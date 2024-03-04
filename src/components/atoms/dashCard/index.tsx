import React, { CSSProperties } from "react";
import clsx from "clsx";

interface DashboardCardProps {
  icon: React.ReactNode;
  stat: string;
  title: string;
  data: string;
  className?: string;
  className2?: string;
  iconstyle?: CSSProperties;
  textstyle?: CSSProperties;
}

const DashboardCard = ({ icon, className, stat, title, data, className2, iconstyle, textstyle }: DashboardCardProps) => {
  return (
    <div className="bg-white flex flex-col p-4 rounded-lg shadow-md w-full justify-center">
      <div className="flex flex-col gap-2 mb-3">
        <div className={clsx("text-3xl", className)} style={iconstyle}>{icon}</div>
        <p className="font-semibold text-2xl text-gray-800">{data}</p>
      </div>
      <p className="text-gray-700 text-lg">{title}</p>
      <p className={clsx("text-gray-700 text-sm", className2)}
        style={textstyle}
      >{stat}</p>
    </div>
  );
};

export default DashboardCard;
