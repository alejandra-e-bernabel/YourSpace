function getTimeAndDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    let hour = date.getHours();

    let hourString = "";

    if (hour>12) {
        hour = hour-12;
        hourString = hour + "PM";
    } else if (hour == 0) {
        hour = 12;
        hourString = hour + "AM";
    } else if (hour ==12) {
        hourString = hour + "PM";
    } else 
        hourString = hour + "AM";
    
    return month + "/" + day + "/" + year + " @ " + hourString;
}

module.exports = getTimeAndDate;