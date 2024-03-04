import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const data = {
    labels: [
      "Total Revenue",
      "Net Income",
      "Gross Profit",
      "Operating Income",
      "Net Profit Margin",
      "EBITDA Margin",
      "EPS",
    ],
    datasets: [
      {
        label: "Estimated Amount",
        data: [1.5, 0.35, 0.6, 0.4, 4.3, 0.45, 2.5],
        backgroundColor: [
          "rgba(255, 92, 92, 0.8)", // Vivid Red
          "rgba(100, 149, 237, 0.8)", // Cornflower Blue
          "rgba(255, 193, 7, 0.8)", // Gold
          "rgba(0, 206, 209, 0.8)", // Turquoise
          "rgba(138, 43, 226, 0.8)", // Blue Violet
          "rgba(255, 140, 0, 0.8)", // Dark Orange
          "rgba(50, 205, 50, 0.8)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="p-2">
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
