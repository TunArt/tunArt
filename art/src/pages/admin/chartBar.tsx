import React from "react";
import { Line } from "react-chartjs-2";
import styles from "src/styles/SideBar.module.css";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  registerables
} from "chart.js";

 ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement,...registerables);

const ChartBar = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={styles.line}>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartBar;
