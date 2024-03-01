import React from "react";

interface TCard1Props {
  money: string;
  text1: string;
  text2: string;
}

const TCard1 = ({ money, text1, text2 }) => {
  return (
    <div className="border-2 flex justify-between w-[40%] p-7 rounded-lg">
      <div className="flex flex-col">
        <div className="font-semibold text-3xl mb-1">{money}</div>
        <div>{text1}</div>
      </div>
      <div className="bg-gray-200 h-fit p-1 rounded">{text2}</div>
    </div>
  );
};

export default TCard1;
