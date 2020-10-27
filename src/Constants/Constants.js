const monthNames = [
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

const eventsDumpData = [
    {
        id: 1,
        from: "2020-10-27",
        startTime: "15:30",
        endTime: "18:00",
        to: "2020-10-29",
        description: 'Jack"s birthday',
    },
    {
        id: 2,
        from: "2020-11-01",
        startTime: "00:00",
        endTime: "00:00",
        to: "2020-11-01",
        description: "Exams",
    },
    {
        id: 3,
        from: "2020-11-05",
        startTime: "00:00",
        endTime: "00:00",
        to: "2020-11-07",
        description: "Day off",
    },
];

module.exports = {
    monthNames,
    weekNames,
    eventsDumpData
}