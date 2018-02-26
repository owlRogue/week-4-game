var targetNumber = Math.floor(Math.random() * 101)+20;
var trickCount = 0;
var wins = 0;
var losses = 0;
var imgFiles = ["/Users/koltynpalmer/dev/class_dev/homework/week-4-game/assets/images/bowl.png", 
                "/Users/koltynpalmer/dev/class_dev/homework/week-4-game/assets/images/grab.png",
                "/Users/koltynpalmer/dev/class_dev/homework/week-4-game/assets/images/ollie.png",
                "/Users/koltynpalmer/dev/class_dev/homework/week-4-game/assets/images/butters.png",
                "/Users/koltynpalmer/dev/class_dev/homework/week-4-game/assets/images/rail.png",
                "/Users/koltynpalmer/dev/class_dev/homework/week-4-game/assets/images/handsflip.png",
                "/Users/koltynpalmer/dev/class_dev/homework/week-4-game/assets/images/resort.jpg",
                "/Users/koltynpalmer/dev/class_dev/homework/week-4-game/assets/images/cliffdrop.png",
                ];

var pointCounter = 0;

$("#number-to-guess").text("In order to compete against your biggest rival at this year's Y-Games, score exactly "+targetNumber+" points!");
//$(".jumbotron").attr("src", "assets/images/snow_jumbo.gif");

var pointCounter = 0;

    for (var i = 0; i < 4; i++) {

        var randomImage= ('<img class="trick-image" src="' + imgFiles[Math.floor(Math.random() * imgFiles.length)] + '">');

        var numberOptions = Math.floor(Math.random() * 12)+1; // Creating multiple tricks each with their own unique number value. We begin by random selection of # 1 - 12.

        // Next we create a for loop to create tricks for every numberOption.
        var imageTrick = $("<img>"); // For each iteration, we will create an imageTrick
            imageTrick.addClass("trick-image"); // First each trick will be given the class ".trick-image". This will allow the     CSS to take effect.
           // imageTrick.attr("src", imgFiles); // Each imageTrick will be given a src link to the trick image
            $("#tricks").append(randomImage); // Lastly, each trick image (with all it classes and attributes) will get added to     the page.
            imageTrick.attr("data-trickvalue", numberOptions); // Each imageTrick will be given a data attribute called     data-trickvalue. This data attribute will be set equal to the array value.
            // This time, our click event applies to every single trick on the page. Not just one.
    }
            
        $(".trick-image").on("click", function() {
            var trickValue = $(this).attr("data-trickvalue"); // Determining the trick's value requires us to extract the value from the data attribute. Using the $(this) keyword specifies that we should be extracting the trick value of the clicked trick. Using the .attr("data-trickvalue") allows us to grab the value out of the "data-trickvalue" attribute. 
            //alert("value="+trickValue);

            trickValue = parseInt(trickValue); //Since attributes on HTML elements are strings, we must convert it to an  integer before adding to the pointCounter

            console.log(pointCounter);
            console.log(trickValue);
            pointCounter += trickValue; // Every click, from every trick adds to the global pointCounter. We then add the trickValue to the user's "pointCounter" which is a global variable.

            alert("New score: " + pointCounter); // All of the same game win-lose logic applies. So the rest remains unchanged.

            if (pointCounter === targetNumber) {
                alert("You win!");
                wins++; //  Increment wins by one.
                $("#win-lose").html("<h2>Winner!</h2>"); //  Find the div with an id of win-lose. Update it with an h2 of "Winner!"
                $("#wins").html("<h3>" + wins + "</h3>"); //  Find the div with an id of wins. Update it with the value of the wins variable.
                $(".coverAll").html("<img src='assets/images/backcountry.gif' />"); //  Find the div with an id of winImage. Update it with an h2 of "Winner!"


                } else if (pointCounter >= targetNumber) {
                    alert("You lose!!");
                    losses++;                                      //  Increment losses by one.
                    $("#win-lose").html("<h2>Loser!</h2>");        //  Find the div with an id of win-lose. Update it with an h2 of "Loser!"
                    $("#losses").html("<h3>" + losses + "</h3>");  //  Find the div with an id of losses. Update it with the value of the losses variable.
                    $(".coverAll").show("<img src='assets/images/youlose.gif' />"); //  Find the div with an id of loseImage. Update it with an h2 of "Winner!"

    };
    });
