import React from "react";
import ChartPie from "./ChartPie";

export default {
  title: "ChartPie",
  component: ChartPie
};

const Template = (args) => <ChartPie {...args} />;

export const ChartPieTemplate = Template.bind({});

ChartPieTemplate.args = {
  label: "# of Votes",
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  data: [12, 19, 3, 5, 2, 3],
  backgroundColor: [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)"
  ],
  borderColor: [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)"
  ],
  borderWidth: 1
};
