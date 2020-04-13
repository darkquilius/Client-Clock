// Populates total time spent table

function populateTable() {
    var newRow = $("tbody").append(`<tr></tr>`);

    // Client name column
    var currentClient = allEntries[allEntries.length - 1].client;
    newRow.append(`<td>${currentClient}</td>`);

    // Hours column
    newRow.append(`<td>${hours} hours ${minutes} minutes</td>`);
 
    // Cost column
    newRow.append(`<td>Cost</td>`);

    // Time column
    var startTime = moment(allEntries[allEntries.length - 1].startTime).format("h:mm:ss");
    var stopTime = moment(allEntries[allEntries.length - 1].stopTime).format("h:mm:ss");

    newRow.append(`<td>${startTime} - ${stopTime}</td>`);
    
}