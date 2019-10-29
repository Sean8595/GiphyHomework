$(document).ready(function(){

var topicArray = ["Dipper","Mable","Sues","Gruncle Stan" ]
function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < topicArray.length; i++) {
      var a = $("<button>");
      a.addClass("Movie");
      a.attr("data-name", topicArray[i]);
      a.text(topicArray[i]);
      $("#buttons-view").append(a);
    
    }
    $("#add-movie").on("click", function(event) { //should push movie input into the topic 
      event.preventDefault();
      var topic = $("#movie-input").val();
      topicArray.push(topic);
      renderButtons()
    })
  }
renderButtons()

// This line grabs the input from the textbox
$(".Movie").on("click",function(){
//setting variables and getting the API in place
  var gifs = $(this).attr("data-name");
  var queryURL =

    "https://api.giphy.com/v1/gifs/search?api_key=jv42QTYRvm7KTJ5OHbztKH9DAnfoau9X&q=" +
    gifs + "&limit=25&offset=0&rating=G&lang=en";

  console.log("clicked")

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(data) {

    var gifDiv = $("<div class='gif'>");

//pulls data from giphy
for (i = 0; i < 10; i++) {
    var image = $("<img>")
    var stillImgURL = data.data[i].images.fixed_height_small_still.url;
    var animateImgURL = data.data[i].images.fixed_height_small.url;
    var rating = data.data[i].rating

    image.attr("src", stillImgURL).addClass("gif");
    image.attr("data-state", "still");
    image.attr("data-animate", animateImgURL);
    image.attr("data-still", stillImgURL);

    console.log(animateImgURL);

    gifDiv.append(image);
    gifDiv.append(rating);
 $("#movies-view").prepend(gifDiv)
}

    console.log(rating)
//apends the previous information
  });

})
})
