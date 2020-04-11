var h1 = document.getElementById("clock"),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0,
    minutes = 0,
    hours = 0,
    t;


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



/* Start button */
start.addEventListener("click", function() {
    timer();
    var timestamp = moment().format("L HH:mm:ss");
    $("#timestampSlot").append(`<p>Start Timestamp: ${timestamp}</p>
        <br>`)
})


/* Stop button */
stop.addEventListener("click", function() {
    clearTimeout(t);
    calcTotalTime()
    var timestamp = moment().format("L HH:mm:ss");
    $("#timestampSlot").append(`<p>Stop Timestamp: ${timestamp}</p>
    <br>`)
    $("#timestampSlot").append(`<p>Total Time: ${hours} hours ${minutes} minutes</p>
    <br>`)
})

/* Clear button */
clear.onclick = function() {
    calcTotalTime()
    h1.textContent = "00:00:00";
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearTimeout(t);
    // $("#timestampSlot").empty();
}


var clientName = "client 1"

function timeToSeconds() {
    minutes = (hours * 60) + minutes;
    hours = 0;
    seconds = (minutes * 60) + seconds;
    minutes = 0
}

function secondsToTime() {
    var baseNum = localStorage.getItem("client 1");
    baseNum = parseInt(baseNum);
    hours = Math.floor(baseNum / 60 / 60);
    minutes = Math.floor((baseNum / 60) - (hours * 60));
    console.log(hours);
    console.log(minutes);

}

function calcTotalTime() {
    // hours = 1;
    // minutes = 10;
    // seconds = 30;
    timeToSeconds()
    var clientTime = JSON.stringify(seconds)
    localStorage.setItem(clientName, clientTime)
    console.log(localStorage.getItem("client 1"));
    secondsToTime();

}