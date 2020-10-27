const getCurrentDate = () => {
    return new Date(new Date().getFullYear(), new Date().getMonth(), 1);
};

const generateRandomKey = () => {
    var text = "";
    var possible = "123456789";

    for (var i = 0; i < 4; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text+ new Date().getTime();
};

const checkTime = (element) => {
    let currentTime = new Date().toLocaleTimeString();
    let currentHour = currentTime.split(':')[0];
    let currentMin = currentTime.split(':')[1];

    let elementHour = element.split(":")[0]
    let elementMin = element.split(":")[1]
    if (elementHour >= currentHour && elementMin >= currentMin) {
        return false;
    }
    return true;
}

const dayTime = () => {
    const x = 60; //minutes interval
    const times = [];
    let tt = 0;

    for (let i=0; tt < 24 * 60; i++) {
        const hh = Math.floor( tt / 60 );
        const mm = ( tt % 60);
        times[i] = ("0" + hh).slice(-2) + ':' + ("0" + mm).slice(-2); // pushing data in array in [00:00 - 12:00 AM/PM format]
        tt = tt + x;
    }

    return times;
}

module.exports = {
    getCurrentDate,
    generateRandomKey,
    checkTime,
    dayTime
}