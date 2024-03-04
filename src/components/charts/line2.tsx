import { Chart, CategoryScale, registerables } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

const LineChart2 = () => {
  const data = {
    labels: [
      "Sep 2022",
      "Oct 2022",
      "Nov 2022",
      "Dec 2022",
      "Jan 2023",
      "Feb 2023",
    ],
    datasets: [
      {
        label: "Expenses 2024 (M)",
        data: [500, 700, 450, 470, 670, 1000],
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
  };

  Chart.register(CategoryScale, ...registerables);

  return (
    <div className="h-[380px]">
      <Line data={data} options={options} style={{}} />
    </div>
  );
};

export default LineChart2;
