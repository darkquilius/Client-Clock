var h1 = document.getElementById("clock"),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    save = document.getElementById('save'),
    seconds = 0,
    minutes = 0,
    hours = 0,
    t;
allEntries = [];


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

    var currentClientText = $("#currentClient").text();
    $("#timestampSlot").append(`<p>Client: ${currentClientText}</p>
    <br>`);

    var timestamp = moment().format("L, h:mm:ss");
    $("#timestampSlot").append(`<p>Start Timestamp: ${timestamp}</p>
        <br>`);

    // Create an object for time entry
    var entry = {};
    entry.client = currentClientText;
    entry.startTime = moment().valueOf();
    console.log(entry);


    /* Stop button */
    stop.addEventListener("click", function () {
        clearTimeout(t);
        calcTotalTime();
        var timestamp = moment().format("L, h:mm:ss");
        $("#timestampSlot").append(`<p>Stop Timestamp: ${timestamp}</p><br>`);

        // Add stopTime property to entry object
        entry.stopTime = moment().valueOf();
        console.log(entry);

    })


    /* ON SAVE */

    /* Clear/Reset/Save button */
    save.onclick = function () {
        calcTotalTime();

        // Add new entry object to allEntries array on Save
        allEntries.push(entry);
        console.log(allEntries);

        populateTable();

        h1.textContent = "00:00:00";
        seconds = 0;
        minutes = 0;
        hours = 0;

        clearTimeout(t);
        $("#timestampSlot").empty();
    }
});


// Sets local storage and parses time for table. local storage to be used in recal of client time
function calcTotalTime() {
    timeToSeconds();
    var clientTime = JSON.stringify(seconds);
    // localStorage.setItem(clientName, clientTime);
    // console.log(localStorage.getItem("client 1"));
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

$("#printBtn").on("click", function () {
    var date = moment().format('ll');
    document.getElementById('inv').innerHTML = "INVOICE - " + date;
    window.print();
})
// Add Button and function

// $(document).on("keypress", "input", function (e) {
//     if (e.which == 13) {
//         var inputVal = $(this).val();
//         // Adds to client dropdown
//         $("#clientDropdown").prepend(`<a class="dropdown-item" href="#">${inputVal}</a>`);
//         $("#currentClient").text(inputVal);
//         // Adds to client filter
//         $("#clientList").prepend(`<a class="dropdown-item" href="#">${inputVal}</a>`);
//     }
// });
