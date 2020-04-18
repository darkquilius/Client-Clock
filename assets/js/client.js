/* Client Dropdown Functionality */
//Prior client name array
var clientSaved = [];
var obj = [];



//Populates prior client names

priorClient();
populateObjectArray();

function priorClient() {

    var prev = localStorage.getItem("clientName");

    console.log(prev)

    if (prev == null) {
        prev = "Client Name"

        $("#clientDropdown").prepend(`<a class="dropdown-item" href="#">${prev}</a>`);
        $("#currentClient").text(prev);
    } else {
        clientSaved = JSON.parse(prev)

        console.log(clientSaved)

        var index = 0;
        clientSaved.forEach(client => {
            $("#clientDropdown").prepend(`<a class="dropdown-item" index=${index} data-id=${index} href="#">${client}</a>`);
            $("#currentClient").text(client);

            index++;
        });
        // boogaBooga()
    }
}

// Get all buttons with class="btn" inside the container
var btns = document.getElementsByClassName("dropdown-item")

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
    });
}

// When client is entered into input, add to dropdown
$(document).on("keypress", "#client-input", function(e) {
    if (e.which == 13) {
        var inputVal = $(this).val();

        //Checks for dublicates
        dublicateCheck(inputVal);
        boogaBooga();
    }
});

// When item in dropdown is clicked, set dropdown button to event.innerText
$(document).on('click', '.dropdown-menu a', function() {
    $("#currentClient").text(this.innerText);

    // Set obj.ID.cost
    var a = JSON.parse(localStorage.getItem("objectClient"));
    var billRate = $('#billingrate');
    billRate.val("");
    var thisId = $(this).data('id');
    var thisIdCost = (a[thisId].cost);
    billRate.val(billRate.val() + thisIdCost); 
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
        createObject(inputVal);
    } else {}
}

function addName(inputVal) {
    //Add to clientSaved array
    clientSaved.push(inputVal);

    //Adds to client dropdown
    $("#clientDropdown").prepend(`<a class="dropdown-item" index=${clientSaved.length - 1} data-id=${clientSaved.length - 1} href="#">${inputVal}</a>`);
    $("#currentClient").text(inputVal);
    $("input").val("")

    //Saves to Storage
    localStorage.setItem("clientName", JSON.stringify(clientSaved));
    boogaBooga();
    populateObjectArray()
}

function boogaBooga() {
    var a = document.getElementById("clientDropdown").children
    var b = a[0].setAttribute("class", "dropdown-item active")
    for (let i = 1; i < clientSaved.length; i++) {
        const element = a[i];
        element.setAttribute("class", "dropdown-item")
    }
}

function createObject(inputVal) {

    obj.push({
        ID: inputVal,
        startTime: [],
        stopTime: [],
        totalTime: 00,
        cost: 0
    })

    localStorage.setItem("objectClient", JSON.stringify(obj))
}

function populateObjectArray() {
    var prev = JSON.parse(localStorage.getItem("objectClient"));

    if (prev == null) {
        obj = []
    } else {
        obj = prev
    }
}

document.getElementById("clientDropdown").children[0].setAttribute("class", "dropdown-item active")