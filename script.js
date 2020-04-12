var h1 = document.getElementById("clock"),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    save = document.getElementById('save'),
    seconds = 0,
    minutes = 0,
    hours = 0,
    t;


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

    $("#timestampSlot").append(`<p>Client: ${$("#clientDropdown a:selected")}</p>
    <br>`);

    var timestamp = moment().format("L, h:mm:ss");
    $("#timestampSlot").append(`<p>Start Timestamp: ${timestamp}</p>
        <br>`)
})


/* Stop button */
stop.addEventListener("click", function() {
    clearTimeout(t);
    calcTotalTime();
    var timestamp = moment().format("L, h:mm:ss");
    $("#timestampSlot").append(`<p>Stop Timestamp: ${timestamp}</p>
    <br>`)
})

/* Clear/Reset/Save button */
save.onclick = function() {
    calcTotalTime();
    populateTable();
    h1.textContent = "00:00:00";
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearTimeout(t);
    $("#timestampSlot").empty();
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

// Sets local storage and parses time for table. local storage to be used in recal of client time
function calcTotalTime() {
    timeToSeconds();
    var clientTime = JSON.stringify(seconds)
    // localStorage.setItem(clientName, clientTime);
    console.log(localStorage.getItem("client 1"));
    secondsToTime();
}


$(document).on("keypress", "input", function(e) {
    if (e.which == 13) {
        var inputVal = $(this).val();
        // Adds to client dropdown
        $("#clientDropdown").prepend(`<a class="dropdown-item" href="#">${inputVal}</a>`);
        $("#currentClient").text(inputVal);
        // Adds to client filter
        $("#clientList").prepend(`<a class="dropdown-item" href="#">${inputVal}</a>`);
        $("input").val("");
    }
});