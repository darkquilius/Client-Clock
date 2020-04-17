// Populates total time spent table

function populateTable() {

    var activeIndex = $(".active").attr("data-id")
    var a = JSON.parse(localStorage.getItem("objectClient"));
    var startStamp = a.client[activeIndex].startTime[0]
    var stopStamp = a.client[activeIndex].stopTime[0]
    console.log(startStamp)
    console.log(stopStamp)
    3

}

function populateTotalTable() {
    var a = JSON.parse(localStorage.getItem("objectClient"));
    $("#totalTable").empty()

    for (let i = 0; i < a.length; i++) {
        const element = a[i];

        var newRow = $("#totalTable").append(`<tr></tr>`);

        newRow.append(`<td>${element.ID}</td>`);

        var baseNum = element.totalTime;
        hours = Math.floor(baseNum / 60 / 60);
        minutes = Math.floor((baseNum / 60) - (hours * 60));

        newRow.append(`<td>${hours} hours ${minutes} minutes</td>`);

        var totalCost = ((element.totalTime / 60 / 60) * element.cost).toFixed(2);

        // Cost column
        newRow.append(`<td>$${totalCost}</td>`);
        newRow.append(`<td></td>`);
    }

    seconds = 0
    minutes = 0
    hours = 0
}