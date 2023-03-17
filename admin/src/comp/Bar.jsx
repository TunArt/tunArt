import { useState,useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
//import styles from "src/styles/SideBar.module.css";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    registerables
  } from "chart.js";
  import axios from 'axios';
   ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement,...registerables);

const Barchart = () => {
  const [chartData, setChartData] = useState({ labels: [], data: [] });

  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  useEffect(() => {
    fetchingData();
  }, []);
  const fetchingData = async function () {
    let labels = [];
    let data = [];
    try {
      const result = await axios.get("http://localhost:3000/api/products/getProducts");
      console.log(result);
      for (const dataObj of result.data) {
        data.push(dataObj.price);
        labels.push(dataObj.name);

      }
      console.log("filtred data", labels, data);
      setChartData({ labels: labels, data: data });

    } catch (err) {
      console.log(err);
    }
  };
  const data = {
    labels:chartData.labels,
    datasets: [
      {
        label: 'Sales',
        data: chartData.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
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
    <div >
      <Bar data={data} options={options}/>
    </div>
  );
};

export default Barchart;
