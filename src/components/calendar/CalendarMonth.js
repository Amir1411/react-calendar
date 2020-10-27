import React, { useState } from "react";
import { monthNames, weekNames } from "../../Constants/Constants";
import { getCurrentDate } from "../../Constants/Utils";

const CalendarMonth = (props) => {
    const [showCalendarWise, setShowCalendarWise] = useState("Month");
    const [currentDay, setCurrentDay] = useState(new Date().getDay());
    const nextMonth = () => {
        if (showCalendarWise === "Month"){
            let newDate = new Date(props.date.setMonth(props.date.getMonth() + 1));
            props.setMonthDate(newDate);
        } else {
            if (currentDay < 6) {
                setCurrentDay(currentDay + 1);
                props.setDayDate(new Date().setDate(props.currDayDate.getDate() + 1))
            }
        }
    };

    const prevMonth = () => {
        if (showCalendarWise === "Month"){
            let newDate = new Date(props.date.setMonth(props.date.getMonth() - 1));
            props.setMonthDate(newDate);
        } else {
            if (currentDay > 0) {
                setCurrentDay(currentDay - 1);
                props.setDayDate(new Date().setDate(props.currDayDate.getDate() - 1))
            }
        }
    };

    const today = () => {
        let newDate = getCurrentDate();
        setCurrentDay(currentDay);
        if (showCalendarWise === "Month") {
            props.setMonthDate(newDate);
        }
    };

    const handleChange = (e) => {
        setCurrentDay(new Date().getDay())
        setShowCalendarWise(e);
        props.toggleCalendarWise(e);
    };

    return (
        <div className="cal-header col-lg-12 row">
            <div className="col-lg-8">
                <button type="button" className="btn btn-default" onClick={prevMonth}>
                    <i className="fa fa-arrow-left"></i>
                </button>
                <button type="button" className="btn btn-default" onClick={nextMonth}>
                    <i className="fa fa-arrow-right"></i>
                </button>
                {showCalendarWise === "Month" && (
                    <>
                        <button type="button" className="btn btn-default" onClick={today}>
                            Today
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={props.openEventPopup}
                        >
                            Create event
                        </button>
                        <h3 style={{ display: "inline", marginLeft: "20px" }}>
                            {monthNames[props.date.getMonth()] + " " + props.date.getFullYear()}
                        </h3>
                    </>
                )}
            </div>
            <div className="col-lg-4 montName calendarWise clearfix">
                <div className="btn-group btn-group-toggle float-right">
                    {showCalendarWise === "Days" && (
                        <span style={{ marginRight: "10px", fontSize: "14px", position: "relative", top: "8px" }}>
                            {monthNames[props.date.getMonth()] + " " + props.currDayDate.getDate()}-{weekNames[currentDay]}
                        </span>
                    )}
                    <label className={`btn btn-secondary ${showCalendarWise === "Month" ? "active" : ""}`}>
                        <input type="radio" name="options" onChange={() => handleChange("Month")}/>{" "}
                        Month
                    </label>
                    <label className={`btn btn-secondary ${showCalendarWise === "Days" ? "active" : ""}`} >
                        <input type="radio" name="options" onChange={() => handleChange("Days")}/>{" "}
                        Day
                    </label>
                </div>
            </div>
        </div>
    );
};

export default CalendarMonth;
