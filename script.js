//Id get sb ki
let month = document.getElementById("month");
let day = document.getElementById("day");
let date = document.getElementById("date");
let year = document.getElementById("year");
let time = document.getElementById("time");

// aik object
let now = new Date();

//month ka Array
let monthArray = ["January", "Ferbuary", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];
let monthGet = now.getMonth();
let ArrayGetMonth = monthArray[monthGet];

//Day ka aik Array
let dayArray = ["Sunday" ,"Monday", "Tuesday", "Wednesday", "Thursday", "Friday" , "Saturday"];
let dayGet = now.getDay();
let ArrayGetDay = dayArray[dayGet];

// object me se date or year
let dateGet = now.getDate();
let yearGet = now.getFullYear();
console.log(dateGet , yearGet);


month.innerHTML = "Month: " + ArrayGetMonth;
day.innerHTML = "Day: " + ArrayGetDay;
date.innerHTML = "Date: " + dateGet;
year.innerHTML = "Year: " + yearGet;


setInterval(function() {
    let now = new Date();
    let timeGet = now.toLocaleTimeString();
    time.innerHTML = timeGet;
}, 500);



