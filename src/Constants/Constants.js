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

const DayTime = [
    "00:00", 
    "01:00", 
    "02:00", 
    "03:00", 
    "04:00", 
    "05:00", 
    "06:00", 
    "07:00",
    "08:00", 
    "09:00", 
    "10:00", 
    "11:00",
    "12:00", 
    "13:00",
    "14:00",
    "15:00", 
    "16:00", 
    "17:00", 
    "18:00",
    "19:00", 
    "20:00",
    "21:00",
    "22:00",
    "23:00",
]

module.exports = {
    monthNames,
    weekNames,
    eventsDumpData,
    DayTime
}