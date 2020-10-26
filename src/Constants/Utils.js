const getCurrentDate = () => {
    return new Date(new Date().getFullYear(), new Date().getMonth(), 1);
};

const generateRandomKey = () => {
    var text = "";
    var possible = "123456789";

    for (var i = 0; i < 4; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text+"abcd";
};

module.exports = {
    getCurrentDate,
    generateRandomKey
}