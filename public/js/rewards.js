var queryURL = "https://api.discountapi.com/v2/deals?api_key=mAzPLCrk";
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  console.log(response.deals);
  for (let i = 0; i < response.deals.length; i++) {
    // Print each iteration to the console
    console.log(response.deals[i].deal.title);
    $('#deal-view').append(response.deals[i].deal.title + "<br><br>");
  }
});

