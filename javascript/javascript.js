$("#add-gif").on("click", function() {
    event.preventDefault();
// This line grabs the input from the textbox
        // var movie = $("#movie-input").val().trim();
var search = "batman";
        // function displayGif() {
//setting variables and getting the API in place
  var giphy = $(this).attr("data-name");
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?api_key=jv42QTYRvm7KTJ5OHbztKH9DAnfoau9X&q=" +
    search +
    "&limit=25&offset=0&rating=G&lang=en";
  var gifs = [];
  // Creating an AJAX call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(data) {
//creates div to put into
    var gifDiv = $("<div class='gif'>");
    console.log(data);
//pulls data from giphy
    var rating = data.data[0].rating;
//creates divs to put the information in
    var pOne = $("<p>").text("Rating: " + rating);
//apends the previous information
    gifDiv.append(pOne);
  });
}
)
