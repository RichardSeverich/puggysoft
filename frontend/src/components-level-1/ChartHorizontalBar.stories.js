import React from "react";
import ChartHorizontalBar from "./ChartHorizontalBar";

export default {
  title: "ChartHorizontalBar",
  component: ChartHorizontalBar
};

const Template = (args) => <ChartHorizontalBar {...args} />;

export const ChartHorizontalBarTemplate1 = Template.bind({});

ChartHorizontalBarTemplate1.args = {
  title: "Bar Chart with one data set",
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      data: [550, 750, 850, 250, 350, 450, 650],
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    }
  ]
};

export const ChartHorizontalBarTemplate2 = Template.bind({});

ChartHorizontalBarTemplate2.args = {
  title: "Bar Chart with two data sets",
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      data: [550, 750, 850, 250, 350, 450, 650],
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    },
    {
      label: "Dataset 2",
      data: [200, 700, 800, 200, 300, 400, 600],
      backgroundColor: "rgba(53, 162, 235, 0.5)"
    }
  ]
};
