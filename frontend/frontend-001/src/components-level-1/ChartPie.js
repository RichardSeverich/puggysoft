import React from "react";
import PropTypes from "prop-types";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// https://react-chartjs-2.js.org/examples/

const ChartPie = ({
  label,
  labels,
  data,
  backgroundColor,
  borderColor,
  borderWidth
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        label,
        data,
        backgroundColor,
        borderColor,
        borderWidth
      }
    ]
  };
  return (
    <Pie data={chartData} />
  );
};

export default ChartPie;

ChartPie.propTypes = {
  label: PropTypes.string,
  labels: PropTypes.array,
  data: PropTypes.array,
  backgroundColor: PropTypes.array,
  borderColor: PropTypes.array,
  borderWidth: PropTypes.number
};

ChartPie.defaultProps = {
  label: "",
  labels: [],
  data: [],
  backgroundColor: [],
  borderColor: [],
  borderWidth: 0
};
