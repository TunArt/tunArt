import { Bubble } from 'react-chartjs-2';
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
const BubbleChart = () => {
  const data = {
    datasets: [
      {
        label: 'Population',
        data: [
          {
            x: 3825000,
            y: 1395000,
            r: 367,
          },
          {
            x: 7492000,
            y: 1120000,
            r: 463,
          },
          {
            x: 1428000,
            y: 9121000,
            r: 378,
          },
          {
            x: 2617000,
            y: 8321000,
            r: 303,
          },
          {
            x: 13800000,
            y: 6079000,
            r: 684,
          },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          type: 'linear',
          position: 'bottom',
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className={styles.bubble}>
     
      <Bubble data={data} options={options} />
    </div>
  );
};

export default BubbleChart;
