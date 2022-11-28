import React from "react";
import PropTypes from "prop-types";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartBar = ({
  options,
  labels,
  datasets
}) => {
  const data = {
    labels,
    datasets
  };

  return (
    <Bar options={options} data={data} />
  );
};

export default ChartBar;

ChartBar.propTypes = {
  labels: PropTypes.array,
  datasets: PropTypes.array,
  options: PropTypes.object
};

ChartBar.defaultProps = {
  labels: [],
  datasets: [],
  options: {}
};
