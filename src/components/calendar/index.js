import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DrawRowsComponent from "./drawRows";

let monthNames = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "Jule",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const eventsData = [
  {
    from: "2016-11-01",
    to: "2016-11-01",
    description: 'Jack"s birthday',
  },
  {
    from: "2016-11-01",
    to: "2016-11-01",
    description: "Exams",
  },
  {
    from: "2016-11-05",
    to: "2016-11-07",
    description: "Day off",
  },
];
localStorage.setItem("eventsData", JSON.stringify(eventsData));

const Calendar = (props) => {
  const getCurrentDate = () => {
    return new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  };

  const [date, setDate] = useState(getCurrentDate());
  const [events, setEvents] = useState(eventsData);
  const [showPopup, setShowPopup] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const nextMonth = () => {
    let newDate = new Date(date.setMonth(date.getMonth() + 1));
    setDate(newDate);
  };

  const prevMonth = () => {
    let newDate = new Date(date.setMonth(date.getMonth() - 1));
    setDate(newDate);
  };

  const today = () => {
    let newDate = getCurrentDate();
    setDate(newDate);
  };

  const openEventPopup = () => {
    setShowPopup(true);
  };
  const closeEventPopup = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    if (e.target.name === "startDate") setStartDate(e.target.value);
    if (e.target.name === "endDate") setEndDate(e.target.value);
    if (e.target.name === "description") setDescription(e.target.value);
  };
  const handleSubmit = () => {
    let data = {
      from: startDate,
      to: endDate,
      description: description,
    };
    if (data) {
        eventsData.push(data);
        localStorage.setItem("eventsData", JSON.stringify(eventsData));
        setEvents(eventsData);
        closeEventPopup();
        setStartDate('');
        setEndDate('');
        setDescription('');
    }
  };
  return (
    <div className="col-lg-12">
      {showPopup && (
        <div className="popup-container-wrap">
          <div className="background-overlay" onClick={closeEventPopup}></div>
          <div className="popup-container">
            <div className="">
              <div className="clearfix">
                <div className="pull-left">
                  <h1>Create new Event</h1>
                </div>
                <div className="pull-right">
                  <i className="fa fa-times" onClick={closeEventPopup}></i>
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label>From</label>
                  <input
                    type="date"
                    className="form-control"
                    name="startDate"
                    value={startDate}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>To</label>
                  <input
                    type="date"
                    className="form-control"
                    name="endDate"
                    value={endDate}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="description"
                    value={description}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="calendarWrapper col-md-offset-3  col-lg-6">
        <div className="cal-header col-lg-12 row">
          <div className="col-lg-6">
            <button
              type="button"
              className="btn btn-default"
              onClick={prevMonth}
            >
              <i className="fa fa-arrow-left"></i>
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={nextMonth}
            >
              <i className="fa fa-arrow-right"></i>
            </button>
            <button type="button" className="btn btn-default" onClick={today}>
              Today
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={openEventPopup}
            >
              Create event
            </button>
          </div>
          <div className="col-lg-6 montName">
            <h3>{monthNames[date.getMonth()] + " " + date.getFullYear()}</h3>
          </div>
        </div>
        <table width="100%" className="table table-bordered">
          <thead>
            <tr>
              {weekNames.map((name) => {
                return <th key={name}>{name}</th>;
              })}
            </tr>
          </thead>
          <DrawRowsComponent
            date={date}
            getCurrentDate={getCurrentDate()}
            events={events}
          />
        </table>
      </div>
    </div>
  );
};

export default Calendar;
