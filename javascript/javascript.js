var topicArray = ["Dipper","Mable","Sues","Gruncle Stan" ]
$(document).ready(function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < topicArray.length; i++) {
      var a = $("<button>");
      a.addClass("movie");
      a.attr("data-name", topicArray[i]);
      a.text(topicArray[i]);
      $("#buttons-view").append(a);
    
    }
    $("#add-movie").on("click", function(event) { //should push movie input into the topic 
      event.preventDefault();
      var topic = $("#movie-input").val()
      topicArray.push(topic);
      renderButtons();
    })
  }
)



// This line grabs the input from the textbox
$(".movie")
//setting variables and getting the API in place
  var gifs = $(this).attr("data-name");
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?api_key=jv42QTYRvm7KTJ5OHbztKH9DAnfoau9X&q=" +
    gifs +
    "&limit=25&offset=0&rating=G&lang=en";
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

 