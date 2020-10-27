import React, { useState } from "react";
import CreateEvent from './MonthWiseCalendar/CreateEvent';
import CalendarMonth from './MonthWiseCalendar/CalendarMonth';
import DayWiseCalendar from './DayWiseCalendar';
import MonthView from './MonthWiseCalendar/MonthView';
import { eventsDumpData } from '../../Constants/Constants';
import { getCurrentDate } from '../../Constants/Utils';

let eventsData = eventsDumpData;
if (localStorage.getItem("eventsData") === null || localStorage.getItem("eventsData") === undefined) {
    localStorage.setItem("eventsData", JSON.stringify(eventsData));
} else {
    eventsData = JSON.parse(localStorage.getItem("eventsData"));
}

const Calendar = () => {

    const [showCalendarWise, setShowCalendarWise] = useState("Month");
    const [date, setDate] = useState(getCurrentDate());
    const [currDayDate, setCurrDayDate] = useState(new Date())
    const [events, setEvents] = useState(eventsData);
    const [showPopup, setShowPopup] = useState(false);

    const setMonthDate = (date) => {
        setDate(date);
    }

    const setDayDate = (date) => {
        setCurrDayDate(new Date(date));
    }

    const openEventPopup = () => {
        setShowPopup(true);
    };
    const closeEventPopup = () => {
        setShowPopup(false);
    };

    const handleSubmit = (data) => {
        if (data) {
            data.id = eventsData.length + 1;
            eventsData.push(data);
            localStorage.setItem("eventsData", JSON.stringify(eventsData));
            setEvents(eventsData);
            closeEventPopup();
        }
    };

    const toggleCalendarWise = (e) => {
        setShowCalendarWise(e);
    }
    return (
        <div className="col-lg-12">
            {showPopup && (
                <CreateEvent handleSubmit={handleSubmit} closeEventPopup={closeEventPopup} />
            )}
            <div className="calendarWrapper col-md-offset-3  col-lg-6">
                <CalendarMonth 
                    date={date} 
                    openEventPopup={openEventPopup} 
                    setMonthDate={setMonthDate} 
                    setDayDate={setDayDate}
                    currDayDate={currDayDate} 
                    toggleCalendarWise={toggleCalendarWise} 
                />
                {showCalendarWise === "Month" ? (
                    <MonthView 
                        date={date} 
                        getCurrentDate={getCurrentDate()}
                        events={events} 
                    />
                    ) : (
                        <DayWiseCalendar 
                            currDayDate={currDayDate} 
                            getCurrentDate={getCurrentDate()}
                            events={events} 
                        />
                    )}
            </div>
        </div>
    );
};

export default Calendar;
