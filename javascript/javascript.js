


  var topicArray = ["Dipper","Mable","Sues","Gruncle Stan" ]
$(document).ready(function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < topicArray.length; i++) {
      var a = $("<button>");
      a.addClass("movie");
      a.attr("data-name", topicArray[i]);
      a.text(topicArray[i]);
      // Adding the button to the HTML
      $("#buttons-view").append(a);
    }
  }
)
  for (var i = 0; i < topicArray.length; i++) { //cycles through array to assign a value to each button

    var buttons = $("<button>");
    buttons.addClass("gif");
    buttons.attr("data-name", topicArray[i]);
    buttons.text(topicArray[i]);
    $("#buttons-view").append(buttons);
  }

  $("#add-movie").on("click", function(event) { //should push movie input into the topic 
    event.preventDefault();
    var topic = $("#movie-input").val();
    console.log(topic.val())

    topicArray.push(topic);
    renderButtons()
  })




// //___________________________________________________________-
// $("#add-gif").on("click", function() {
//     event.preventDefault();
// // This line grabs the input from the textbox
//         // var movie = $("#movie-input").val().trim();
// var search = "batman";
//         // function displayGif() {
// //setting variables and getting the API in place
//   var giphy = $(this).attr("data-name");
//   var queryURL =
//     "https://api.giphy.com/v1/gifs/search?api_key=jv42QTYRvm7KTJ5OHbztKH9DAnfoau9X&q=" +
//     search +
//     "&limit=25&offset=0&rating=G&lang=en";
//   var gifs = [];
//   // Creating an AJAX call
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(data) {
// //creates div to put into
//     var gifDiv = $("<div class='gif'>");
//     console.log(data);
// //pulls data from giphy
//     var rating = data.data[0].rating;
// //creates divs to put the information in
//     var pOne = $("<p>").text("Rating: " + rating);
// //apends the previous information
//     gifDiv.append(pOne);
//   });
// }
// 
 