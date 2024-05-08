import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: "#fff",
      },
    },
    y: {
      ticks: {
        color: "#fff",
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      color: "#fff",
      text: "Result",
    },
  },
};

type ChartProps = {
  results: number[];
  dates: string[];
};

export function Chart({ dates, results }: ChartProps) {
  const data = {
    labels: dates,
    tension: 44,
    datasets: [
      {
        label: "Result",
        tension: 0.4,
        data: results,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="py-8 text-white">
      <Line options={options} data={data} />
    </div>
  );
}
