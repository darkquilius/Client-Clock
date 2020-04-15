// Populates total time spent table

function populateTable() {
    var newRow = $("tbody").append(`<tr></tr>`);

    var currentClient = $("#currentClient").text();
    newRow.append(`<td>${currentClient}</td>`);

    newRow.append(`<td>${hours} hours ${minutes} minutes</td>`);

    // Cost column
    newRow.append(`<td>hours</td>`);
    

    // Time column
    var startTime = moment(allEntries[allEntries.length - 1].startTime).format("h:mm:ss");
    var stopTime = moment(allEntries[allEntries.length - 1].stopTime).format("h:mm:ss");

    newRow.append(`<td>${startTime} - ${stopTime}</td>`);

}