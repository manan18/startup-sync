import React, { useEffect, useRef } from "react";

const TGraphCard = () => {
  //   const canvasRef = useRef(null);

  //   useEffect(() => {
  //     if (typeof window !== "undefined") {
  //       const { Chart } = require("tw-elements"); // Import Chart only on client-side

  //       if (canvasRef.current) {
  //         // Check for canvas availability
  //         const ctx = canvasRef.current.getContext("2d");

  //         if (ctx) {
  //           // Create the chart with provided data
  //           const chart = new Chart(ctx, {
  //             // ... your chart configuration ...
  //           });

  //           // Cleanup chart instance on unmount
  //           return () => chart.destroy();
  //         }
  //       }
  //     }
  //   }, []);

  return (
    <div className="p-7">
      <div className="Text flex justify-between">
        <div className="flex flex-col">
          <div className="font-semibold text-3xl mb-1">$878.24</div>
          <div>MoM spend</div>
        </div>
        <div className="bg-gray-200 h-fit p-1 rounded">Months</div>
      </div>
      <div className="Graph">
        {/* {canvasRef.current && (
          <canvas ref={canvasRef} height="200" width="400" />
        )} */}
        Graph
      </div>
    </div>
  );
};

export default TGraphCard;
