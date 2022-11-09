import React from 'react';
import PropTypes from 'prop-types'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartVerticalBar = ({
  title,
  labels,
  datasets
}) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  const data = {
    labels: labels,
    datasets: datasets
  };

  return (
    <Bar options={options} data={data} />
  )
}

export default ChartVerticalBar;

ChartVerticalBar.propTypes = {
  title: PropTypes.string,
  labels: PropTypes.array,
  datasets: PropTypes.array,
}

ChartVerticalBar.defaultProps = {
  title: 'Default title',
  labels: [],
  datasets: [],
}
