import React from "react";
import CommonReservationCalendar from "./CommonReservationCalendar";
import enumDaysOfWeek from "./../models/enumDaysOfWeek";

export default {
  title: "CommonReservationCalendar",
  component: CommonReservationCalendar
};

const Template = (args) => <CommonReservationCalendar {...args} />;

export const CommonReservationCalendar1 = Template.bind({});

const timesAvailable = [
  { startTime: "06:00:00", endTime: "07:00:00" },
  { startTime: "07:00:00", endTime: "08:00:00" },
  { startTime: "08:00:00", endTime: "09:00:00" },
  { startTime: "09:00:00", endTime: "10:00:00" },
  { startTime: "10:00:00", endTime: "11:00:00" },
  { startTime: "11:00:00", endTime: "12:00:00" },
  { startTime: "12:00:00", endTime: "13:00:00" },
  { startTime: "13:00:00", endTime: "14:00:00" },
  { startTime: "14:00:00", endTime: "15:00:00" },
  { startTime: "15:00:00", endTime: "16:00:00" },
  { startTime: "16:00:00", endTime: "17:00:00" },
  { startTime: "17:00:00", endTime: "18:00:00" },
  { startTime: "18:00:00", endTime: "19:00:00" },
  { startTime: "19:00:00", endTime: "20:00:00" },
  { startTime: "20:00:00", endTime: "21:00:00" },
  { startTime: "21:00:00", endTime: "22:00:00" },
  { startTime: "22:00:00", endTime: "23:00:00" },
  { startTime: "23:00:00", endTime: "00:00:00" }
];

CommonReservationCalendar1.args = {
  timesAvailable,
  daysAvailable: [
    enumDaysOfWeek.SUNDAY,
    enumDaysOfWeek.MONDAY,
    enumDaysOfWeek.TUESDAY,
    enumDaysOfWeek.WEDNESDAY,
    enumDaysOfWeek.THURSDAY,
    enumDaysOfWeek.FRIDAY,
    enumDaysOfWeek.SATURDAY
  ]
};

export const CommonReservationCalendar2 = Template.bind({});

CommonReservationCalendar2.args = {
  timesAvailable,
  daysAvailable: [
    enumDaysOfWeek.MONDAY,
    enumDaysOfWeek.WEDNESDAY,
    enumDaysOfWeek.FRIDAY
  ]
};
