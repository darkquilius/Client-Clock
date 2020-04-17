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
    // newRow.append(`<td>${a[activeIndex].totalTime}</td>`);

    // // Time column
    // newRow.append(`<td>${startStamp} - ${stopStamp}</td>`);

}


// // Billing rate keypress input
// $(document).on("keypress", "#billingrate", function(e) {
//     if (e.which == 13) {
//         rate = $(this).val();
//         $(this).val(""); 

//         // Billing rate log
//         console.log("The billing rate is: $" + rate + "/hr");
//     }
// });