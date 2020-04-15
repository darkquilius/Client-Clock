var h1 = document.getElementById("clock"),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    save = document.getElementById('save'),
    seconds = 0,
    minutes = 0,
    hours = 0,
    t,
    date = moment().format('ll');
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
start.addEventListener("click", function() {
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
    // console.log(entry);


    /* Stop button */
    stop.addEventListener("click", function() {
        clearTimeout(t);
        // calcTotalTime();
        var timestamp = moment().format("L, h:mm:ss");
        $("#timestampSlot").append(`<p>Stop Timestamp: ${timestamp}</p><br>`);

        // Add stopTime property to entry object
        entry.stopTime = moment().valueOf();
        // console.log(entry);

    })


    /* ON SAVE */

    /* Clear/Reset/Save button */
    save.onclick = function() {
        calcTotalTime();

        // Add new entry object to allEntries array on Save
        allEntries.push(entry);
        // console.log(allEntries);

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
    var a = JSON.parse(localStorage.getItem("objectClient"));
    var active = document.getElementsByClassName("dropdown-item active").innerHTML

    var stu = $(".active").text()
    console.log(stu)

    //saves client name
    console.log(active);
    console.log(a);
    // saves seconds in object
    // var a = JSON.parse(localStorage.getItem("objectClient"));
    // a.client[0].totalTime += seconds
    // console.log(a)
    // console.log(a.client[0].totalTime)
    // localStorage.setItem("objectClient", JSON.stringify(a))
    // secondsToTime();
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

$("#printBtn").on("click", function() {
    document.getElementById('inv').innerHTML = "INVOICE - " + date;
    window.print();
})

span();

function span() {
    document.getElementById('spanRight').innerHTML = date;
}