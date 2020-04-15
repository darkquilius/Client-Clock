// Populates total time spent table

function populateTable() {

    var activeIndex = $(".active").attr("data-id")
    var a = JSON.parse(localStorage.getItem("objectClient"));
    var startStamp = a.client[activeIndex].startTime[0]
    var stopStamp = a.client[activeIndex].stopTime[0]

    console.log(startStamp)
    console.log(stopStamp)
    3
    // var newRow = $("tbody").append(`<tr></tr>`);

    // var currentClient = $(".active").text();
    // newRow.append(`<td>${currentClient}</td>`);

    // newRow.append(`<td>${hours} hours ${minutes} minutes</td>`);

    // // Cost column
    // newRow.append(`<td>Cost</td>`);

    // // Time column
    // newRow.append(`<td>${startStamp} - ${stopStamp}</td>`);

}