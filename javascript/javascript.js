$(document).ready(function() {
  var topicArray = ["Dipper Pines", "Mable Pines", "Soos", "Gruncle Stan", "Waddles","Bill Cypher","Lil Gideon"];
  function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < topicArray.length; i++) {
      var a = $("<button>");
      a.addClass("Movie");
      a.attr("data-name", topicArray[i]);
      a.text(topicArray[i]);
      $("#buttons-view").append(a);
    }
  }
  renderButtons();
  $("#add-movie").on("click", function(event) {
    //should push movie input into the topic
    event.preventDefault();
    var topic = $("#movie-input").val();
    topicArray.push(topic);
    console.log(topicArray)
    renderButtons();
  });
  // This line grabs the input from the textbox

function display() {
    //setting variables and getting the API in place
    var gifs = $(this).attr("data-name");
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?api_key=jv42QTYRvm7KTJ5OHbztKH9DAnfoau9X&q=" +
      gifs +
      "&limit=25&offset=0&rating=G&lang=en";

    console.log("clicked");
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(data) {
      var gifDiv = $("<div class='gif'>");

      //pulls data from giphy
      for (i = 0; i < 10; i++) {
        var image = $("<img>");
        //ajay helped me a lot with this section!
        var stillImgURL = data.data[i].images.fixed_height_small_still.url;
        var animateImgURL = data.data[i].images.fixed_height_small.url;

        image.attr("src", stillImgURL).addClass("gif");
        image.attr("data-state", "still");
        image.attr("data-animate", animateImgURL);
        image.attr("data-still", stillImgURL);
        image.addClass("borders");
        gifDiv.append(image);
   
        $("#movies-view").prepend(gifDiv);
      }

      //gets it animated, took this from the activity
      $(document).on("click", ".gif", function() {
        var state = $(this).attr("data-state");
        var animateSrc = $(this).attr("data-animate");
        var stillSrc = $(this).attr("data-still");
        if (state === "still") {
          $(this).attr("src", animateSrc);
          $(this).attr("data-state", "animate");
        } else if (state === "animate") {
          $(this).attr("src", stillSrc);
          $(this).attr("data-state", "still");
        }
        //apends the previous information
      });
    });
    display()
  $(".Movie").on("click",function(){
    display()
  })}})