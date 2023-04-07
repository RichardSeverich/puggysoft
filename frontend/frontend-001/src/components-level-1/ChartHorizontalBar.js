import React from "react";
import ChartBar from "./ChartBar";
import PropTypes from "prop-types";

const ChartVerticalBar = ({
  title,
  labels,
  datasets
}) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right"
      },
      title: {
        display: true,
        text: title
      }
    },
    indexAxis: "y"
  };

  return (
    <ChartBar
      labels={labels}
      datasets={datasets}
      options={options}
    />
  );
};

export default ChartVerticalBar;

ChartVerticalBar.propTypes = {
  title: PropTypes.string,
  labels: PropTypes.array,
  datasets: PropTypes.array
};

ChartVerticalBar.defaultProps = {
  title: "Default title",
  labels: [],
  datasets: []
};
