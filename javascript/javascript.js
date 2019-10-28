function displayGif() {

    var giphy = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/" + movie + "&apikey=goNPnFIy2mmPfq7UKC4MprL6EOCj5F5H";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response)