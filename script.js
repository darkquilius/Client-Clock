var h1 = document.getElementById("clock"),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    save = document.getElementById('save'),
    seconds = 0,
    minutes = 0,
    hours = 0,
    t;
allEntries = [];
entry = {};


/* TIMER */
/* Add seconds to timer to make it run */
function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}


/* BUTTONS */
/* Start button */
start.addEventListener("click", function () {
    timer();

    var currentClient = $("#currentClient").text();
    $("#timestampSlot").append(`<p>Client: ${currentClient}</p>
    <br>`);

    var timestamp = moment().format("L, h:mm:ss");
    $("#timestampSlot").append(`<p>Start Timestamp: ${timestamp}</p>
        <br>`)
})


/* Stop button */
stop.addEventListener("click", function () {
    clearTimeout(t);
    calcTotalTime();
    var timestamp = moment().format("L, h:mm:ss");
    $("#timestampSlot").append(`<p>Stop Timestamp: ${timestamp}</p>
    <br>`)
})


/* ON SAVE */

/* Clear/Reset/Save button */
save.onclick = function () {
    calcTotalTime();
    createEntry();
    populateTable();
    h1.textContent = "00:00:00";
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearTimeout(t);
    $("#timestampSlot").empty();
}


// Sets local storage and parses time for table. local storage to be used in recal of client time
function calcTotalTime() {
    timeToSeconds();
    var clientTime = JSON.stringify(seconds);
    // localStorage.setItem(clientName, clientTime);
    console.log(localStorage.getItem("client 1"));
    secondsToTime();
}

/* 

https://stackoverflow.com/questions/17684201/create-html-table-from-javascript-object/17684427

Example:

var allEntries = 
[
    {
        "client": "Connie",
        "hours": "1.2",
        "cost": "1233.23"
        "startTime": "12385734"
        "stopTime": "12385737"
     },
    {
        "client": "Andrew",
        "hours": "0.3",
        "cost": "346.23"
        "startTime": "12385723"
        "stopTime": "12385767"
     } 
]

*/

function createEntry() {


}


/* CONVERSION OF TIME */

// Easy storing of seconds
function timeToSeconds() {
    minutes = (hours * 60) + minutes;
    hours = 0;
    seconds = (minutes * 60) + seconds;
    minutes = 0
}

// Returns seconds to legible time
function secondsToTime() {
    var baseNum = localStorage.getItem("client 1");
    baseNum = parseInt(baseNum);
    hours = Math.floor(baseNum / 60 / 60);
    minutes = Math.floor((baseNum / 60) - (hours * 60));
}


