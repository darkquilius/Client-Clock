// Populates total time spent table

function populateTable() {
    var newRow = $("tbody").append(`<tr></tr>`);

    var clientName = "client 1";
    newRow.append(`<td>${clientName}</td>`);

    newRow.append(`<td>${hours} hours ${minutes} minutes</td>`);
    
}