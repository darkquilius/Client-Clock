// Populates total time spent table

function populateTable() {

<<<<<<< HEAD
    var activeIndex = $(".active").attr("data-id")
    var a = JSON.parse(localStorage.getItem("objectClient"));
    var startStamp = a.client[activeIndex].startTime[0]
    var stopStamp = a.client[activeIndex].stopTime[0]
    console.log(startStamp)
    console.log(stopStamp)
    3

}
=======
    var currentClient = $("#currentClient").text();
    newRow.append(`<td>${currentClient}</td>`);

    newRow.append(`<td>${hours} hours ${minutes} minutes</td>`);

    // Cost column
    newRow.append(`<td>Cost</td>`);

    // Time column
    var startTime = moment(allEntries[allEntries.length - 1].startTime).format("h:mm:ss");
    var stopTime = moment(allEntries[allEntries.length - 1].stopTime).format("h:mm:ss");

    newRow.append(`<td>${startTime} - ${stopTime}</td>`);

}
>>>>>>> 24787fa6548a1e05312eb00e7428c75402417857
