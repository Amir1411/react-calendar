import React from 'react';
import CalendarRowComponent from './calendarRow';

const DrawRows = (props) => {
    let startDay = 1;
    let nextMonthClass = '';
    let firstDay = props.date;
    let lastDay = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0);
    let eventsList = [];

    const aggregateEventDays = (event) => {
        let start = new Date(event.from);
        let end = new Date(event.to);
        let id = null;

        for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
            let key = d.getMonth() + '_' + d.getDate();
            let desc = (id !== event.id) ? event.description : ' ';
            if (eventsList[key]) {
               eventsList[key].push(desc);
            }
            else {
                eventsList[key] = [desc];
            }
            id = event.id;
        }
    }
    props.events.map(event => aggregateEventDays(event));

    const drawRows = () => {
        let rows = [];
        for (let i = 0; i < 6; i++) {
            let cells = getCells(i);
            rows.push(<CalendarRowComponent key={i + '-calRow'} cells={cells}/>)
        }
        return rows;
    }

    const fillDay = (output, customClass) => {
        if (isToday() && !customClass) {
            customClass = 'today';
        }
        output.push({day: startDay, customClass: customClass, eventData: isEventDay()});
        startDay++;
    }

    const isToday = () => {
        return startDay === new Date().getDate()
            && firstDay.getMonth() === props.getCurrentDate.getMonth()
            && firstDay.getFullYear() === props.getCurrentDate.getFullYear();
    }

    const isEventDay = () => {
        let month = (nextMonthClass) ? firstDay.getMonth() + 1 : firstDay.getMonth();
        let key = month + '_' + startDay;

        return eventsList[key] || null;
    }


    const fillFirstWeekDays = (output) =>{
        let startDayOfMonth = firstDay.getDay();
        if (startDayOfMonth !== 0) {
            for (let i = 1; i <= 7; i++) {
                if (i <= startDayOfMonth) {
                    output.push({day: ''})
                } else {
                    fillDay(output);
                }
            }
        } else {
            for (let i = 1; i <= 7; i++) {
                fillDay(output);
            }
        }
    }

    const getCells = (rowNumber) => {
        const FIRST_WEEK = 0;
        let output = [];

        if (rowNumber === FIRST_WEEK) {
            fillFirstWeekDays(output);
        } else {
            for (let i = 1; i <= 7; i++) {
                // end days of current month
                if (startDay > lastDay.getDate()) {
                    startDay = 1;
                    nextMonthClass = 'next-month';
                    fillDay(output, nextMonthClass);
                }
                else {
                    fillDay(output, nextMonthClass);
                }
            }
        }
        return output;
    }

    return (
        <tbody>
            {drawRows()}
        </tbody>
    )
};

export default DrawRows;