import React from 'react';
import { monthNames } from '../../Constants/Constants';
import { getCurrentDate } from '../../Constants/Utils';

const CalendarMonth = (props) => {
    const nextMonth = () => {
        let newDate = new Date(props.date.setMonth(props.date.getMonth() + 1));
        props.setMonthDate(newDate);
    };

    const prevMonth = () => {
        let newDate = new Date(props.date.setMonth(props.date.getMonth() - 1));
        props.setMonthDate(newDate);
    };

    const today = () => {
        let newDate = getCurrentDate();
        props.setMonthDate(newDate);
    };

    return (
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
                    onClick={props.openEventPopup}
                >
                    Create event
                </button>
            </div>
            <div className="col-lg-6 montName">
                <h3>{monthNames[props.date.getMonth()] + " " + props.date.getFullYear()}</h3>
            </div>
        </div>
    );
}

export default CalendarMonth;