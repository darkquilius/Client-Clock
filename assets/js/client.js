/* Client Dropdown Functionality */
//Prior client name array
var clientSaved = [];


//Populates prior client names

priorClient();

function priorClient() {

    var prev = localStorage.getItem("clientName");

    console.log(prev)

    if (prev == null) {
        prev = "Example"

        $("#clientDropdown").prepend(`<a class="dropdown-item" href="#">${prev}</a>`);
        $("#currentClient").text(prev);
    } else {
        clientSaved = JSON.parse(prev)

        console.log(clientSaved)
        var index = 0
        clientSaved.forEach(client => {

            $("#clientDropdown").prepend(`<a class="dropdown-item" index=${index} href="#">${client}</a>`);
            $("#currentClient").text(client);
            index++
        });
    }
}


// When client is entered into input, add to dropdown
$(document).on("keypress", "input", function(e) {
    if (e.which == 13) {
        var inputVal = $(this).val();

        //Checks for dublicates
        dublicateCheck(inputVal);

    }
});

// When item in dropdown is clicked, set dropdown button to event.innerText
$(document).on('click', '.dropdown-menu a', function() {
    $("#currentClient").text(this.innerText);
});


function dublicateCheck(inputVal) {
    //makes inputVal lowercase
    var lowerInput = inputVal.toLowerCase();

    //duplicate counter
    var x = 0;

    clientSaved.forEach(client => {

        console.log(client)
            //makes client names lowercase
        var lowClient = client.toLowerCase();

        if (lowClient == lowerInput) {
            console.log("They're the same")
            x += 1;
        } else {
            console.log("They're different")
        }
    });

    if (x == 0) {
        addName(inputVal);
    } else {}
}

function addName(inputVal) {
    //Add to clientSaved array
    clientSaved.push(inputVal);

    //Adds to client dropdown
    $("#clientDropdown").prepend(`<a class="dropdown-item" href="#">${inputVal}</a>`);
    $("#currentClient").text(inputVal);
    $("input").val("");

    console.log(clientSaved)
        //Saves to Storage
    localStorage.setItem("clientName", JSON.stringify(clientSaved));
}