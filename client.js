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

$(document).on('click', '.dropdown-menu a', function() {
    $("#currentClient").text(this.innerText);
}); 