var queryURL = "https://api.discountapi.com/v2/deals?api_key=mAzPLCrk";
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  console.log(response.deals);
  for (let i = 0; i < response.deals.length; i++) {
     
    // Print each iteration to the console
    var title = $("<h2>");
    title.text(response.deals[i].deal.title);

    var img = $("<img>");
    img.attr("src",response.deals[i].deal.image_url);
    img.addClass("deal-img");

    var price = $("<h4>$");
    price.text(response.deals[i].deal.price);

    var url = $("<a>");
    url.attr("href",response.deals[i].deal.url);
    url.text("Grab this deal!");


    console.log(response.deals[i].deal.title);
    console.log(response.deals[i].deal.url);

    // Print the title of each deal
    $('#deal-view').append(title);
    $('#deal-view').append("<br/>");

    // Show the image of each deal
    $('#deal-view').append(img);
    $('#deal-view').append("<br/>");

    // Print the title of each deal
    $('#deal-view').append(price);
    $('#deal-view').append("<br/>");

    // Print url of each deal
    $('#deal-view').append(url);
    $('#deal-view').append("<br/>");
  }
});

