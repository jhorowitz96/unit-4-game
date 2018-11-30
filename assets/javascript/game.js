var blue;
var purple;
var silver;
var orange;
var incremental;
var numberGuessed;
var wins = 0;
var losses = 0;
var score;

var begin = function () {



    

    numberGuessed = Math.floor(Math.random() * 120) + 19;
    numberGuessed = parseInt(numberGuessed);
    console.log(numberGuessed)

    $("#number").html('Target Number: ' + numberGuessed);



    blue = Math.floor(Math.random() * 12) + 1;
    blue = parseInt(blue);
    $("#blue").attr({
        "class": "crystal",
        "random-number": blue

    })

    purple = Math.floor(Math.random() * 12) + 1;
    purple = parseInt(purple);
    $("#purple").attr({
        "class": "crystal",
        "random-number": purple

    })


    silver = Math.floor(Math.random() * 12) + 1;
    silver = parseInt(silver);
    $("#silver").attr({
        "class": "crystal",
        "random-number": silver

    })


    orange = Math.floor(Math.random() * 12) + 1;
    orange = parseInt(orange);
    $("#orange").attr({
        "class": "crystal",
        "random-number": orange

    })

$("#guessed").text("");
incremental = 0

    // for (var i = 0; i < 4; i++) {
    //     console.log("Test Crystals")
    //     var random = Math.floor(Math.random() * 12) + 1;
    //     var crystal = $("<div>");
    //     crystal.attr({
    //         "class": "crystal",
    //         "random-number": random
    //     });
    //     console.log(random)
    // }
}

// $(".crystal").on('click', function () {
//     console.log(random);
// });

// $(document).ready(function() {

//     $("#blue").click(function() {
//        if("#blue") {
//          score = parseInt(score);
//          score += blue;
//          console.log(score);
//        };
//     });

begin();

$(".crystal").on('click', function () {
    var crystalValue = $(this).attr("random-number");
    incremental = incremental + parseInt(crystalValue);
    $("#guessed").text(incremental);
    console.log(wins)
    console.log(numberGuessed)

    if (incremental === numberGuessed) {
        
        wins++;
        $("#wins").text(wins);
        console.log(wins)

        begin()
    }

    else if (incremental > numberGuessed) {
        console.log(losses)
        losses++;
        $("#losses").text(losses);
        
        begin()
        
    }






});






// $("#blue").on('click', function () {
//     $("#guessed").append(blue);
// });

// $("#purple").on('click', function () {
//     console.log(purple);
// });

// $("#silver").on('click', function () {
//     console.log(silver);
// });

// $("#orange").on('click', function () {
//     console.log(orange);
// });



// if (incre > numberGuessed{
//     losses--;
//     $("#losses").html(losses);

// begin();

// }

// else if (guess === numberGuessed) {
//     wins++;
//     $("#wins").html(wins);
// begin();
// }
