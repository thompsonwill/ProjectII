// When user clicks add-btn
$("#suggestion-submit").on("click", function (event) {
    event.preventDefault();

    var newSuggestion = {
        employee: $("#employee").val().trim(),
        body: $("#suggestion-box").val().trim(),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    console.log(newSuggestion);
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newSuggestion)
        // On success, run the following code
        .then(function () {
            var row = $("<div>");
            row.addClass("suggestion");
            row.append("<p>" + newSuggestion.employee + " suggested: </p>");
            row.append("<p>" + newSuggestion.body + "</p>");
            row.append("<p>At " + moment(newSuggestion.created_at).format("h:mma on dddd") + "</p>");
            $("#suggestion-area").prepend(row);
        });
    // Empty each input box by replacing the value with an empty string
    // $("#employee").val("");
    $("#suggestion").val("");
});

$.get("/api/all", function (data) {
    if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {
            var row = $("<div>");
            row.addClass("suggestion");
            row.append("<p>" + data[i].employee + " suggested.. </p>");
            row.append("<p>" + data[i].body + "</p>");
            row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
            $("#suggestion-area").prepend(row);
        }
    }
});