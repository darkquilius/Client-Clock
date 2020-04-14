var h1 = document.getElementById("clock"),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    save = document.getElementById('save'),
    seconds = 0,
    minutes = 0,
    hours = 0,
    t,
    date = moment().format('ll');

    // Billing rate keypress input
$(document).on("keypress", "#billingrate", function(e) {
    if (e.which == 13) {
        rate = $(this).val();
        // $(this).val("");
        // var a = JSON.parse(localStorage.getItem("objectClient"));
        // var activeIndex = parseInt($(".active").attr("index"));
        // a[activeIndex].cost += rate; 
        // localStorage.setItem("objectClient", JSON.parse(a))

        // Billing rate log
        console.log("The billing rate is: $" + rate + "/hr");
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


//Just convert the objects to JSON strings:

// localStorage.setItem("savedData", JSON.stringify(objects));
// And vice versa:

// objects = JSON.parse(localStorage.getItem("savedData")));
// Or you can add multiple objects in the same localStorage value:

// localStorage.setItem("savedData", JSON.stringify([object1, object2 /*, etc*/]));
// object1 = JSON.parse(localStorage.getItem("savedData"))[0];
// object2 = JSON.parse(localStorage.getItem("savedData"))[1];


start.addEventListener("click", function() {
        
        // Set Billing Rate
        validateBillingRate()
        function validateBillingRate() {
            var x = document.getElementById('billingrate').value;
            if (x == "") {
              alert("Please Set Billing Rate");
            } else {
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

    // Clear Billing Rate
    $("#billingrate").val("");

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
    secondsToTime();

//  Populate Table
    var newRow = $("tbody").append(`<tr></tr>`);
    var totalCost = ((((a[activeIndex].totalTime) / 60) / 60) * rate).toFixed(2);
    newRow.append(`<td>${a[activeIndex].ID}</td>`);

    newRow.append(`<td>${hours} hours ${minutes} minutes</td>`);

    // Cost column
    newRow.append(`<td>$${totalCost}</td>`);

    // Time column
    // newRow.append(`<td>${startStamp} - ${stopStamp}</td>`);
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

// Set date in navbar
span();
// Pull date for navbar
function span() {
    document.getElementById('spanRight').innerHTML = date;
}


function repopArray() {
    var a = JSON.parse(localStorage.getItem("objectClient"));

<<<<<<< HEAD
}


JSON.parse(localStorage.getItem("objectClient"))[0]

=======
$("#printBtn").on("click", function () {
    var date = moment().format('ll');
    document.getElementById('inv').innerHTML = "INVOICE - " + date;
    window.print();
})
// Add Button and function
>>>>>>> Fixing input
