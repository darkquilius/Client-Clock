// Populates total time spent table

// function populateTable() {

//     var activeIndex = $(".active").attr("data-id")
//     var a = JSON.parse(localStorage.getItem("objectClient"))[activeIndex];
//     var startStamp = a.startTime[0]
//     var stopStamp = a.client[activeIndex].stopTime[0]

// var newRow = $("tbody").append(`<tr></tr>`);

// var currentClient = $(".active").text();
// newRow.append(`<td>${currentClient}</td>`);

// newRow.append(`<td>${hours} hours ${minutes} minutes</td>`);

// // Cost column
// newRow.append(`<td>Cost</td>`);

// // Time column
// newRow.append(`<td>${startStamp} - ${stopStamp}</td>`);

//}

function populateTable() {
    var newRow = $("tbody").append(`<tr></tr>`);
    var activeIndex = $(".active").attr("data-id");
    var a = JSON.parse(localStorage.getItem("objectClient"))[activeIndex];
    // Client/Project column
    var currentClient = a.ID;
    newRow.append(`<td>${currentClient}</td>`);
    a.startTime
        // Hours column
    var totalTime = a.totalTime;
    newRow.append(`<td>${hours} hours ${minutes} minutes</td>`);
    // Cost column
    newRow.append(`<td>Cost</td>`);
    // Time column
    var startStamp = a.startTime[a.startTime.length - 1];
    var stopStamp = a.stopTime[a.stopTime.length - 1];
    newRow.append(`<td>${startStamp} - ${stopStamp}</td>`);
}