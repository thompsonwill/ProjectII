$(document).ready(function () {
  // When user clicks add-btn
  $("#suggestion-submit").on("click", function (event) {
    event.preventDefault();

    var radios = document.getElementsByName('group1');
    var checkRadios = function() {
      if (document.getElementById('username').checked) {
        return (document.getElementById('username').value);
      } else {
        return "Anonymous";
      }
    }

    var newSuggestion = {
      employee: checkRadios(),
      body: $("#suggestion-box").val().trim(),
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    console.log("THIS IS YOUR NEW SUGGESTION " + newSuggestion.body);

    // Send an AJAX POST-request with jQuery
    $.post("/api/all", newSuggestion)
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
    $("#suggestion-box").val("");
  });

  function getSuggestions() {
    $.get("/api/all", function (results) {
      if (results.length !== 0) {
        for (var i = 0; i < results.length; i++) {
          var row = $("<div>");
          row.addClass("suggestion");
          row.append("<p><b>" + results[i].employee + "</b> suggested.. </p>");
          row.append("<p>" + results[i].body + "</p>");
          row.append(
            "<p>At " +
            moment(results[i].created_at).format("h:mma on dddd") +
            "</p>"
          );
          $("#suggestion-area").prepend(row);
        }
      }
    });
  }

  getSuggestions();
});
