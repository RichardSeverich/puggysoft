import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useInput from "./../hooks/useInput";
import PropTypes from "prop-types";
import i18n from "./../i18n/i18n";
import enumDaysOfWeek from "./../models/enumDaysOfWeek";
import "./common-reservation-calendar.css";
import converterMonthNumToLabel from "./../tools/converterMonthNumToLabel";

function CommonReservationCalendar ({
  timesAvailable,
  daysAvailable,
  todayDate,
  handleSaveReservation
}) {
  // new Date() returns Bolivia time or browser time. Eg. Tue Feb 21 2023 21:15:27 GMT-0400 (Bolivia Time)
  const todayDateAux = todayDate.toLocaleDateString("pt-br").split("/").reverse().join("-"); // Eg. 2023-02-21
  const { value: currentDateCalendar, onChange: onChangecurrentDateCalendar } = useInput(todayDateAux);
  const currentDateAux = new Date(currentDateCalendar);
  const currentDate = new Date(currentDateAux.getTime() + Math.abs(currentDateAux.getTimezoneOffset() * 60000));
  const year = currentDate.getFullYear(); // Eg. 2023
  const month = currentDate.getMonth(); // Eg. this return 0 to 11 a
  const dayOfWeek = currentDate.getDay(); // Eg. 0 to 6 (0 = sunday, 1 = monday, ... etc)
  const day = currentDate.getDate(); // Eg. 21
  const monthLabel = converterMonthNumToLabel(month + 1);
  // Get first day of week
  const firstDay = day - dayOfWeek;
  const firstDate = new Date(currentDate);
  firstDate.setDate(firstDay);
  const weekDates = {
    sunday: firstDate.toISOString().split("T")[0],
    monday: addDays(firstDate, 1).toISOString().split("T")[0],
    tuesday: addDays(firstDate, 2).toISOString().split("T")[0],
    wednesday: addDays(firstDate, 3).toISOString().split("T")[0],
    thursday: addDays(firstDate, 4).toISOString().split("T")[0],
    friday: addDays(firstDate, 5).toISOString().split("T")[0],
    saturday: addDays(firstDate, 6).toISOString().split("T")[0]
  };

  function addDays (date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const weekDaysNumbers = {
    sunday: weekDates.sunday.split("-")[2],
    monday: weekDates.monday.split("-")[2],
    tuesday: weekDates.tuesday.split("-")[2],
    wednesday: weekDates.wednesday.split("-")[2],
    thursday: weekDates.thursday.split("-")[2],
    friday: weekDates.friday.split("-")[2],
    saturday: weekDates.saturday.split("-")[2]
  };

  const weekDatesLabels = {
    sunday: i18n.commonDaysOfWeek.sunday,
    monday: i18n.commonDaysOfWeek.monday,
    tuesday: i18n.commonDaysOfWeek.tuesday,
    wednesday: i18n.commonDaysOfWeek.wednesday,
    thursday: i18n.commonDaysOfWeek.thursday,
    friday: i18n.commonDaysOfWeek.friday,
    saturday: i18n.commonDaysOfWeek.saturday
  };

  const datesAndHoursSelected = [];

  function getCalendar () {
    return Object.keys(weekDates).map((keyDate) => {
      return (
        <div className="puggysoft-day-container" key={keyDate}>
          <div className="puggysoft-day-title">
            {`${weekDatesLabels[keyDate]} ${weekDaysNumbers[keyDate]}`}
          </div>
          {getAvailableTimes(keyDate, weekDates[keyDate])}
        </div>);
    });
  }

  // dayOfWeek = sunday, dateSelected = 2023-02-12
  function getAvailableTimes (dayOfWeek, dateSelected) {
    return timesAvailable.map((time, index) => {
      const startTime = time.startTime.substring(0, time.startTime.length - 3);
      const endTime = time.endTime.substring(0, time.endTime.length - 3);
      return daysAvailable.includes(dayOfWeek) && <div
        className={`puggysoft-time-available-free ${dateSelected}-${startTime}-${endTime}`}
        key={dayOfWeek + index}
        onClick={() => handleSelectTime(dateSelected, startTime, endTime)}
      >
        {`${startTime} - ${endTime}`}
      </div>;
    });
  }

  function handleSelectTime (dateSelected, startTime, endTime) {
    const availableTime = document.getElementsByClassName(`${dateSelected}-${startTime}-${endTime}`);
    const classNameAvailableTime = availableTime[0].className;
    if (classNameAvailableTime.includes("available-free")) {
      availableTime[0].className = `puggysoft-time-available-reserved ${dateSelected}-${startTime}-${endTime}`;
      datesAndHoursSelected.push({ date: dateSelected, startTime, endTime });
    } else if (classNameAvailableTime.includes("available-reserved")) {
      availableTime[0].className = `puggysoft-time-available-free ${dateSelected}-${startTime}-${endTime}`;
      let indexToDelete = -1;
      for (let indexDateAndHour = 0; indexDateAndHour < datesAndHoursSelected.length; indexDateAndHour++) {
        const itemDateAndHour = datesAndHoursSelected[indexDateAndHour];
        if (itemDateAndHour.date === dateSelected &&
          itemDateAndHour.startTime === startTime &&
          itemDateAndHour.endTime === endTime) {
          indexToDelete = indexDateAndHour;
          break;
        }
      }
      if (indexToDelete !== -1) {
        datesAndHoursSelected.splice(indexToDelete, 1);
      }
    }
  }

  function getNextDate () {
    let monthCurrent = "";
    let yearCurrent = "";
    let isMonthNext = false;
    let isYearNext = false;
    let labelToReturn = "";
    Object.keys(weekDates).forEach((keyDate) => {
      if (monthCurrent === "") {
        monthCurrent = weekDates[keyDate].split("-")[1];
      }
      if (yearCurrent === "") {
        yearCurrent = weekDates[keyDate].split("-")[0];
      }
      if (monthCurrent !== weekDates[keyDate].split("-")[1]) {
        isMonthNext = true;
      }
      if (yearCurrent !== weekDates[keyDate].split("-")[0]) {
        isYearNext = true;
      }
      if (isMonthNext && isYearNext) {
        labelToReturn = `- ${converterMonthNumToLabel(month + 2)} ${yearCurrent * 1 + 1}`;
      } else if (isMonthNext) {
        labelToReturn = `- ${converterMonthNumToLabel(month + 2)} ${yearCurrent * 1}`;
      }
    });
    return labelToReturn;
  }

  return (
    <div className="puggysoft-reservation-calendar" >
      <div className="puggysoft-calendar-actions-container">
        <div className="puggysoft-calendar-actions">
          <div className="puggysoft-month-and-year puggysoft-month-and-year-action">
            {monthLabel} {year} {getNextDate()}
          </div>
          <div className="puggysoft-month-and-year-action">
            <Form.Control
              onChange={onChangecurrentDateCalendar}
              value={currentDateCalendar}
              type="date" />
          </div>
        </div>
        <div className="puggysoft-calendar-actions">
          <Button onClick={() => handleSaveReservation(datesAndHoursSelected)} variant="primary">
            {i18n.reservationCalendar.saveReservationButton}
          </Button>
        </div>
      </div>
      <div className="puggysoft-calendar-container">
        {getCalendar()}
      </div>
    </div>
  );
}

export default CommonReservationCalendar;

CommonReservationCalendar.propTypes = {
  todayDate: PropTypes.instanceOf(Date),
  timesAvailable: PropTypes.array,
  daysAvailable: PropTypes.arrayOf(PropTypes.oneOf([
    enumDaysOfWeek.SUNDAY,
    enumDaysOfWeek.MONDAY,
    enumDaysOfWeek.TUESDAY,
    enumDaysOfWeek.WEDNESDAY,
    enumDaysOfWeek.THURSDAY,
    enumDaysOfWeek.FRIDAY,
    enumDaysOfWeek.SATURDAY
  ])),
  handleSaveReservation: PropTypes.func
};

CommonReservationCalendar.defaultProps = {
  todayDate: new Date(),
  timesAvailable: [],
  daysAvailable: [],
  handleSaveReservation: () => { }
};
