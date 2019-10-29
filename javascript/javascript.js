function displayGif() {
//setting variables and getting the API in place
    var giphy = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=jv42QTYRvm7KTJ5OHbztKH9DAnfoau9X&q=banana&limit=25&offset=0&rating=G&lang=en";
    var gifs = []
// Creating an AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(data){
    // var gifDiv = $("<div class='gif'>");
    console.log(data)
    })}

    displayGif();