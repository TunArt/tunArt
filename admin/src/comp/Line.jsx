import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import Box from "@mui/material/Box";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  registerables,

  ChartConfiguration,
  LineController,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,

  LineController,
  LineElement,
  PointElement,
  ...registerables
);

const ChartLine = () => {
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
    labels: chartData.labels,
    datasets: [
      {
        label: "level of price",
        data: chartData.data,
        backgroundColor: "rgb(75, 192, 192)",
        borderWidth: 4,
        tension: 0.4,
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };
  const options = {
    responsive: true,
    title: { text: "Product", display: true },
    scales: {

      yAxes: [
        {
          min: 1,
          max: 80,
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  return (
    <div>
      {/* <Box
        sx={{
          marginTop: 40,
          marginLeft: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "background.default",
          boxShadow: 4,
          borderRadius: 1,
          padding: 4,
          margin: "0px 0px",
        }}
      > */}
        <Line data={data} options={options} />
      {/* </Box> */}
    </div>
  );
};
export default ChartLine;