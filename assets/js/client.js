/* Client Dropdown Functionality */
//Prior client name array
var clientSaved = [];

//Populates prior client names


priorClient();

function priorClient() {

    var prev = localStorage.getItem("clientName");

    if (prev == null) {
        prev = "Example"
        $("#clientDropdown").prepend(`<a class="dropdown-item" href="#">${prev}</a>`);
        $("#currentClient").text(prev);
    }
    else {
        clientSaved = JSON.parse(prev)

        clientSaved.forEach(name => {

            $("#clientDropdown").prepend(`<a class="dropdown-item" href="#">${name}</a>`);
            $("#currentClient").text(name);
        });
    };

    console.log(prev)
}


// When client is entered into input, add to dropdown
$(document).on("keypress", "input", function (e) {
    
    if (e.which == 13) {
        var inputVal = $(this).val();

        //Checks for dublicates
        dublicateCheck(inputVal);

    }
});

// When item in dropdown is clicked, set dropdown button to event.innerText
$(document).on('click', '.dropdown-menu a', function () {
    $("#currentClient").text(this.innerText);
});



function dublicateCheck(inputVal) {
    //clientSaved = localStorage.getItem(`clientName`);
    var lowerInput = inputVal.toLowerCase();
    var x = 0;


    //Count of x increases with dublicate
    clientSaved.forEach(client => {
        client = client.toLowerCase();
        if (client == lowerInput) {

            x = x + 1;
        }
        else {

        }
    });

    if (x == 0) {
        addName(inputVal);
    }
    else {
        return;
    }

}

function addName(inputVal) {
    clientSaved.push(inputVal);

    //Adds to client dropdown
    $("#clientDropdown").prepend(`<a class="dropdown-item" href="#">${inputVal}</a>`);
    $("#currentClient").text(inputVal);
    // Adds to client filter
    // $("#clientList").prepend(`<a class="dropdown-item" href="#">${inputVal}</a>`);
    // $("input").val("");


    localStorage.setItem("clientName", JSON.stringify(clientSaved));
}
