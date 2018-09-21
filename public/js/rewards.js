// $(document).ready(function() {
// $.ajax({
//   url: "https://api.discountapi.com/v2/deals?api_key=mAzPLCrk",
//   type: "GET",
//   data: {
//     $limit: 1000
//   }
// }).done(function(data) {
//   alert("Retrieved " + data.deals.length + " deals from the dataset!");
//   console.log(data.deals[0]);
//   for (i = 0; i < data.deals.length; i++) {
//     $("#deal-view").append("<h1> Title: " + data.deals.deal.title[i] + "</h1>");
//   }
//   $("#deal-view").text(JSON.stringify(data));
// });
// });

// var template = $("#itemTemplate").text();

// // Handlebars compiles the template into a callable function
// var renderer = Handlebars.compile(template);
// call the compiled function with the template data
// for (i=0; i<data.deals.length; i++) {
//     var result = renderer({
//         "deal" : data.deals.deal.title[i],
//         "img" : data.deals.deal.image_url[i],
//         "description" : data.deals.deal.description[i],
//         "data" : {
//             "price" : data.deals.deal.price[i],
//             "inStock" : data.deals.deal.online[i]
//         }
//     });
// console.log(result);
// }

// $("#container").html(result);
// });
