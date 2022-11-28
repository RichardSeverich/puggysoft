import React from "react";
import ChartLine from "./ChartLine";

export default {
  title: "ChartLine",
  component: ChartLine
};

const Template = (args) => <ChartLine {...args} />;

export const ChartLineTemplate1 = Template.bind({});

ChartLineTemplate1.args = {
  title: "Line Chart with one data set",
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      data: [550, 750, 850, 250, 350, 450, 650],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    }
  ]
};

export const ChartLineTemplate2 = Template.bind({});

ChartLineTemplate2.args = {
  title: "Line Chart with two data sets",
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      data: [550, 750, 850, 250, 350, 450, 650],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    },
    {
      label: "Dataset 2",
      data: [200, 700, 800, 200, 300, 400, 600],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)"
    }
  ]
};
