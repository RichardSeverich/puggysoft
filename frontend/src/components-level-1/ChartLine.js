import React from "react";
import PropTypes from "prop-types";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
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

const ChartLine = ({
  title,
  labels,
  datasets
}) => {
  const data = {
    labels,
    datasets
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: title
      }
    }
  };

  return (
    <Line options={options} data={data} />
  );
};

export default ChartLine;

ChartLine.propTypes = {
  title: PropTypes.string,
  labels: PropTypes.array,
  datasets: PropTypes.array
};

ChartLine.defaultProps = {
  title: "Default title",
  labels: [],
  datasets: []
};
