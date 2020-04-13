// Populates total time spent table

function populateTable() {
    var newRow = $("tbody").append(`<tr></tr>`);

    var currentClient = $("#currentClient").text();
    newRow.append(`<td>${currentClient}</td>`);

    newRow.append(`<td>${hours} hours ${minutes} minutes</td>`);
    
}