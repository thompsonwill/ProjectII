// Example queryURL for Giphy API
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
    for (i = 0; i < response.length; i++) {
        $("#deal-view").append("<h1> Title: " + response[i] +"</h1>");
    }
    // $("#deal-view").text(JSON.stringify(response));
});
