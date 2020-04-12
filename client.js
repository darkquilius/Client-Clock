/* Client Dropdown Functionality */

// When client is entered into input, add to dropdown
$(document).on("keypress", "input", function(e) {
    if (e.which == 13) {
        var inputVal = $(this).val();
        // Adds to client dropdown
        $("#clientDropdown").prepend(`<a class="dropdown-item" href="#">${inputVal}</a>`);
        $("#currentClient").text(inputVal);
        // Adds to client filter
        $("#clientList").prepend(`<a class="dropdown-item" href="#">${inputVal}</a>`);
        $("input").val("");
    }
});

// When item in dropdown is clicked, set dropdown button to event.innerText
$(document).on('click', '.dropdown-menu a', function() {
    $("#currentClient").text(this.innerText);
}); 