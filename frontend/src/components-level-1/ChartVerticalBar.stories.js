import React from "react";
import ChartVerticalBar from "./ChartVerticalBar";

export default {
  title: "ChartVerticalBar",
  component: ChartVerticalBar
};

const Template = (args) => <ChartVerticalBar {...args} />;

export const ChartVerticalBarTemplate1 = Template.bind({});

ChartVerticalBarTemplate1.args = {
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

export const ChartVerticalBarTemplate2 = Template.bind({});

ChartVerticalBarTemplate2.args = {
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
