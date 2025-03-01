setInterval(() => {
    let date = new Date();
    // console.log(date);
    let time = date.toLocaleTimeString();
    console.log(time);

    document.getElementById("displaytime").innerHTML = time;

    let weekdays = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Saturday"];
let day = weekdays[date.getDay()];
// console.log(day);

let today = date.getDate();
console.log(today);

let allmonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = allmonths[date.getMonth()];
console.log(month);

let year = date.getFullYear();
console.log(year);

document.getElementById("date").innerHTML = day + " / " + today + " / " + month + " / " + year


}, 1000);