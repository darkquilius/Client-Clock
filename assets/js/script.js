var h1 = document.getElementById("clock"),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    save = document.getElementById('save'),
    seconds = 0,
    minutes = 0,
    hours = 0,
    t,
    date = moment().format('ll');


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
start.addEventListener("click", function(event) {
        timer();

        var activeIndex = parseInt($(".active").attr("index"))
        var a = JSON.parse(localStorage.getItem("objectClient"));
        var timestamp = moment().format("L, h:mm:ss");
        a.client[activeIndex].startTime.push(timestamp)
            // console.log(a.client[activeIndex])
            // a.client[activeIndex].startTime.push(timestamp);
        localStorage.setItem("objectClient", JSON.stringify(a));

        $("#timestampSlot").append(`<div>Start Time: ${timestamp}`)
    })
    /* Stop button */
stop.addEventListener("click", function(event) {
    clearTimeout(t);

    var activeIndex = parseInt($(".active").attr("data-id"))
    var a = JSON.parse(localStorage.getItem("objectClient"));
    var timestamp = moment().format("L, h:mm:ss");
    a.client[activeIndex].stopTime.push(timestamp);
    localStorage.setItem("objectClient", JSON.stringify(a))

    $("#timestampSlot").append(`<div>Stop Time: ${timestamp}`)
})

/* ON SAVE */

/* Clear/Reset/Save button */
save.onclick = function(event) {
    calcTotalTime();


    // populateTable();

    h1.textContent = "00:00:00";
    seconds = 0;
    minutes = 0;
    hours = 0;

    clearTimeout(t);
    $("#timestampSlot").empty();
};


// Sets local storage and parses time for table. local storage to be used in recal of client time


function calcTotalTime() {
    timeToSeconds();
    var activeIndex = parseInt($(".active").attr("data-id"))
    var a = JSON.parse(localStorage.getItem("objectClient"));
    console.log(activeIndex)
        // saves seconds in object
    a.client[0].totalTime += seconds
    console.log(a.client[activeIndex].totalTime)
    console.log(a)
    localStorage.setItem("objectClient", JSON.stringify(a))
    secondsToTime();
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
    var a = JSON.parse(localStorage.getItem("objectClient"));
    var baseNum = a.client[0].totalTime;
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