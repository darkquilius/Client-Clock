var h1 = document.getElementById("clock"),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    save = document.getElementById('save'),
    seconds = 0,
    minutes = 0,
    hours = 0,
    t,
    date = moment().format('ll');

//Click counters
var startCount = 0;
var stopCount = 0;

// Billing rate keypress input
$(document).on("keypress", "#billingrate", function(e) {
    if (e.which == 13) {
        rate = $(this).val();
        var a = JSON.parse(localStorage.getItem("objectClient"));
        var activeIndex = parseInt($(".active").attr("index"));

        a[activeIndex].cost = rate;

        localStorage.setItem("objectClient", JSON.stringify(a));

        $("#billingrate").innerHTML(rate);

    }
});


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

        // Set Billing Rate Alert
        validateBillingRate()

        function validateBillingRate() {
            var x = document.getElementById('billingrate').value;
            if (x == "") {
                alert("Please Set Billing Rate");
                return
            }

            timer();
            var activeIndex = parseInt($(".active").attr("index"))
            var a = JSON.parse(localStorage.getItem("objectClient"));
            var timestamp = moment().format("L, h:mm:ss");
            a[activeIndex].startTime.push(timestamp)
                // console.log(a)

            localStorage.setItem("objectClient", JSON.stringify(a));
            // console.log(a)

            $("#timestampSlot").append(`<div>Start Time: ${timestamp}`)

        }
    })
    /* Stop button */
stop.addEventListener("click", function() {
    clearTimeout(t);

    var activeIndex = parseInt($(".active").attr("index"))
    var a = JSON.parse(localStorage.getItem("objectClient"));
    var timestamp = moment().format("L, h:mm:ss");
    a[activeIndex].stopTime.push(timestamp);
    localStorage.setItem("objectClient", JSON.stringify(a))
    console.log(a)

    $("#timestampSlot").append(`<div>Stop Time: ${timestamp}`)
})

/* ON SAVE */

/* Clear/Reset/Save button */
save.onclick = function() {
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
    var activeIndex = parseInt($(".active").attr("index"))
    var a = JSON.parse(localStorage.getItem("objectClient"));
    // saves seconds in object
    a[activeIndex].totalTime += seconds;
    console.log(a[activeIndex].totalTime)
    console.log(a)
    localStorage.setItem("objectClient", JSON.stringify(a))
        // secondsToTime();

    //  Populate Table
    var startStamp = a[activeIndex].startTime[a[activeIndex].startTime.length - 1]
    var stopStamp = a[activeIndex].stopTime[a[activeIndex].stopTime.length - 1]
    var newRow = $("#currentTable").append(`<tr></tr>`);
    var totalCost = ((((seconds / 60 / 60) + (minutes / 60) + hours) * a[activeIndex].cost).toFixed(2));
    newRow.append(`<td>${a[activeIndex].ID}</td>`);

    newRow.append(`<td>${hours} hours ${minutes} minutes</td>`);

    // Cost column
    newRow.append(`<td>$${totalCost}</td>`);

    // Time column
    newRow.append(`<td>  ${startStamp} <br> - ${stopStamp}</td>`);
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
    var activeIndex = parseInt($(".active").attr("data-id"))
    var a = JSON.parse(localStorage.getItem("objectClient"));
    var baseNum = a[activeIndex].totalTime;
    hours = Math.floor(baseNum / 60 / 60);
    minutes = Math.floor((baseNum / 60) - (hours * 60));
}

// Print button invoice/print event
$("#printBtn").on("click", function() {
    document.getElementById('inv').innerHTML = "Summary - " + date;
    window.print();
})

$("#totalBtn").on("click", function() {
    populateTotalTable()
    $("#totalTableHead").removeAttr("class");
})

// Set date in navbar
span();
// Pull date for navbar
function span() {
    document.getElementById('spanRight').innerHTML = date;
}