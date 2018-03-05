var numberOptions = numberOptions;
var targetNumber = Math.floor(Math.random() * 101) + 20;

var wins = 0;
var losses = 0;
var trickCount = 0;
var math = 0;
var src = "src";
var imgFiles = [
  "assets/images/bowl.png",
  "assets/images/grab.png",
  "assets/images/ollie.png",
  "assets/images/butters.png",
  "assets/images/rail.png",
  "assets/images/handsflip.png",
  "assets/images/resort.jpg",
  "assets/images/cliffdrop.png"
];

var endImgs = [
  "<img src='assets/images/youwin.gif'>",
  "<img src='assets/images/youlose.gif'>"
];

$('#number').append(targetNumber);

var tricks = $("#tricks");

var configmath = function(){
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('#number').empty();
  $('#number').append("Goal: " + math);
}

var reset = function(){
	  math = 0;
    targetNumber = Math.floor((Math.random()* 101) + 20);
    $('#number').empty();
    $('#number').append(targetNumber);
    $(".coverAll").hide(endImgs[0])
    $(".coverAll").hide(endImgs[1])
}

for (var i = 0; i < 4; i++) {
  var randomImage = imgFiles[Math.floor(Math.random() * imgFiles.length)];
  var numberOptions = Math.floor(Math.random() * 12) + 1;

  imageTrick = randomImage;

  // Next we create a for loop to create a trick image for every numberOption.
  var imageTrick = $("<img>"); // For each iteration, we will create an imageTrick
  imageTrick.addClass("trick-image"); // First each trick will be given the class ".trick-image".  This will allow the CSS to take effect.
  imageTrick.attr("src", randomImage); // Each imageTrick will be given an src link to a random trick image
  imageTrick.attr("data-trickValue", numberOptions); // Each imageTrick will be given a data  attribute called data-trickValue. This data attribute will be set equal to the array value.
  tricks.append(imageTrick); // Lastly, each trick image (with all it classes and  attributes) will get added to the page.
}

// This time, our click event applies to every single crystal on the page. Not just one.
tricks.on("click", ".trick-image", function() {
  // Determining the trick's value requires us to extract the value from the data attribute. Using the $(this) keyword specifies that we should be extracting the trick value of the clicked trick. Using the .attr("data-trickValue") allows us to grab the value out of the "data-trickValue" attribute.
  var trickValue = $(this).attr("data-trickValue");

  trickValue = parseInt(trickValue); // POINT VALUE OF TRICK // Since attributes on HTML elements are strings, we must convert it to an  integer before adding to the math

  $("#guessSum").text("Total: " + math); // TOTAL SUM
  math += trickValue;
  console.log(trickValue);



if (math === targetNumber) {
  $("#wins").html("Wins: " + wins); //  Find the div with an id of wins. Update it with the value of the wins variable.
  wins++; //  Increment wins by one.
  $(".coverAll").append(endImgs[0]);
  $(".coverAll").show(endImgs[0]).delay(2000);
  //$("#countingbox").html("<h2>Winner!</h2>"); //  Find the div with an id of countingbox. Update it with an h2 of "Winner!"
  reset();  

} else if (math > targetNumber) {
  $("#losses").html("Losses: " + losses); //  Find the div with an id of losses. Update it with the value of the losses variable.
  losses++; //  Increment losses by one.
  // $("#countingbox").html("<h2>Wipe Out!</h2>"); //  Find the div with an id of countingbox. Update it with an h2 of "Wipe Out!"
  $(".coverAll").append(endImgs[1]);
  $(".coverAll").show(endImgs[1]).delay(2000); //  Find the div with an id of loseImage. Update it with an h2 of "Winner!"
  reset();
}

});