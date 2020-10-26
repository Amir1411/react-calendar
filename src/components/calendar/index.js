import React, { useState } from "react";
import DrawRowsComponent from "./DrawRows";
import CreateEvent from './CreateEvent';
import CalendarMonth from './CalendarMonth';
import { weekNames, eventsData } from '../../Constants/Constants';
import { getCurrentDate } from '../../Constants/Utils';

localStorage.setItem("eventsData", JSON.stringify(eventsData));

const Calendar = (props) => {

    const [date, setDate] = useState(getCurrentDate());
    const [events, setEvents] = useState(eventsData);
    const [showPopup, setShowPopup] = useState(false);

    const setMonthDate = (date) => {
        setDate(date);
    }

    const openEventPopup = () => {
        setShowPopup(true);
    };
    const closeEventPopup = () => {
        setShowPopup(false);
    };

    const handleSubmit = (data) => {
        if (data) {
            data.id = eventsData.length+1;
            eventsData.push(data);
            localStorage.setItem("eventsData", JSON.stringify(eventsData));
            setEvents(eventsData);
            closeEventPopup();
        }
    };
    return (
        <div className="col-lg-12">
            {showPopup && (
                <CreateEvent handleSubmit={handleSubmit} closeEventPopup={closeEventPopup} />
            )}
            <div className="calendarWrapper col-md-offset-3  col-lg-6">
                <CalendarMonth date={date} openEventPopup={openEventPopup} setMonthDate={setMonthDate} />
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
