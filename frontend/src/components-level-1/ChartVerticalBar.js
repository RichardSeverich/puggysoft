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
        position: "top"
      },
      title: {
        display: true,
        text: title
      }
    }
  };
  return (
    <ChartBar
      options={options}
      labels={labels}
      datasets={datasets} />
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
