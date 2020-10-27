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

module.exports = {
    getCurrentDate,
    generateRandomKey,
    checkTime
}