import React, { useEffect, useRef } from "react";
import LineChart2 from "../charts/line2";

const TGraphCard = () => {
  return (
    <div className="p-7">
      <div className="Text flex justify-between">
        <div className="flex flex-col">
          <div className="font-semibold text-3xl mb-5">Expenses</div>
        </div>
      </div>
      <div className="Graph">
        <LineChart2 />
      </div>
    </div>
  );
};

export default TGraphCard;
