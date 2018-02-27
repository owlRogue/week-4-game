function reset() {
    numberOptions = Math.floor(Math.random() * 12) + 1;
    targetNumber = Math.floor(Math.random() * 101) + 20;
    trickCount = 0;
    wins = 0;
    losses = 0;
    pointCounter = 0;
    
  };



var numberOptions = Math.floor(Math.random() * 12) + 1;
var targetNumber = Math.floor(Math.random() * 101) + 20;
var dummyNum = 27;
var trickCount = 0;
var wins = 0;
var losses = 0;
var pointCounter = 0;
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

$("#score-to-beat").text(
  "In order to compete against your biggest rival at this year's Y-Games, score exactly " +
    targetNumber +
    " points!"
);

var tricks = $("#tricks");

for (var i = 0; i < 4; i++) {
  var randomImage = imgFiles[Math.floor(Math.random() * imgFiles.length)];

  imageTrick = randomImage;

  //var imgURL = randomImage;
  // Next we create a for loop to create a trick image for every numberOption.
  var imageTrick = $("<img>"); // For each iteration, we will create an imageTrick
  imageTrick.addClass("trick-image"); // First each trick will be given the class ".trick-image". This will allow the CSS to take effect.
  imageTrick.attr("src", randomImage); // Lastly, each trick image (with all it classes and attributes) will get added to the page.
  imageTrick.attr("data-trickValue", numberOptions); // Each imageTrick will be given a data attribute called data-trickValue. This data attribute will be set equal to the array value.
  // This time, our click event applies to every single trick on the page. Not just one.
  // Each imageTrick will be given an src link to a random trick image
  tricks.append(imageTrick);
}

// This time, our click event applies to every single crystal on the page. Not just one.
tricks.on("click", ".trick-image", function() {
  // Determining the trick's value requires us to extract the value from the data attribute. Using the $(this) keyword specifies that we should be extracting the trick value of the clicked trick. Using the .attr("data-trickValue") allows us to grab the value out of the "data-trickValue" attribute.
  for (var i = 0; i < 4; i++) {
    var trickValue = $(this).attr("data-trickValue");

    dummyNum = trickValue;

      trickValue = parseInt(trickValue); //Since attributes on HTML elements are strings, we must convert it to an  integer before adding to the pointCounter

        $("#guess").text("trickValue: " + trickValue);
        trickCount++;
        $("#trick-tries").text(trickCount);


        $("#guessSum").text("New score: " + pointCounter);
            console.log("after " + pointCounter);

            pointCounter = trickValue + pointCounter;
                console.log(trickValue);
            };
});

  if (pointCounter === targetNumber) {
    alert("You win!");
    wins++; //  Increment wins by one.
    $(".coverAll").append(endImgs[0]);
    $(".coverAll").show(endImgs[0]); 
    $("#countingbox").html("<h2>Winner!</h2>"); //  Find the div with an id of countingbox. Update it with an h2 of "Winner!"
    $("#wins").html("<h3>" + wins + "</h3>"); //  Find the div with an id of wins. Update it with the value of the wins variable.
    reset();

  } else if (pointCounter >= targetNumber) {
    alert("You lose!!");
    losses++; //  Increment losses by one.
// $("#countingbox").html("<h2>Wipe Out!</h2>"); //  Find the div with an id of countingbox. Update it with an h2 of "Wipe Out!"
    $("#losses").html("<h3>" + losses + "</h3>"); //  Find the div with an id of losses. Update it with the value of the losses variable.
    $(".coverAll").append(endImgs[1]);
    $(".coverAll").show(endImgs[1]); //  Find the div with an id of loseImage. Update it with an h2 of "Winner!"
    reset();
  }

