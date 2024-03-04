import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";

interface TCard1Props {
  money: string;
  text1: string;
  text2: string;
  icon: React.ReactNode;
}

const TCard1 = ({ money, text1, text2, icon }: TCard1Props) => {
  return (
    <div className="border-2 border-gray-300 flex p-7 rounded-lg h-full">
      <div className="flex flex-col">
        <div className="text-4xl p-4 pl-1">{icon}</div>
        <div className="font-semibold text-4xl mb-2">{money}</div>
        <div className="text-lg mb-2">{text1}</div>
        <div className="bg-gray-200 h-fit p-1 rounded">{text2}</div>
      </div>
    </div>
  );
};

export default TCard1;
