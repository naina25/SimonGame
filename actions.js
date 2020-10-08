var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
let userClickedPattern = [];

$(".btn").on('click',function(){
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
});

function nextSequence() 
{
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
}
function playSound(name){
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}
