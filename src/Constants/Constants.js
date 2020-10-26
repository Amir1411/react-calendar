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

const eventsData = [
    {
        id: 1,
        from: "2016-11-01",
        to: "2016-11-01",
        description: 'Jack"s birthday',
    },
    {
        id: 2,
        from: "2016-11-01",
        to: "2016-11-01",
        description: "Exams",
    },
    {
        id: 3,
        from: "2016-11-05",
        to: "2016-11-07",
        description: "Day off",
    },
];

module.exports = {
    monthNames,
    weekNames,
    eventsData
}