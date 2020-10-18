var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
let userClickedPattern = [];
let startGame = false;
let level = 0;

$(document).on("keypress", function()
{
    if (startGame === false)
    {
        nextSequence();
        startGame = true;
    }
});

$(".btn").on('click',function(){
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

function animatePress(currentColour){
    $('#' + currentColour).addClass("pressed");
    setTimeout(function(){
        $('#' + currentColour).removeClass("pressed");
    },100);
}
function nextSequence() 
{
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    level++;
    $('h1').text(`Level ${level}`);
}
function playSound(name){
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(nextSequence, 1000);
            userClickedPattern = [];
        }
    }
    else{
        playSound('wrong');
        $('body').addClass('gameOver');
        setTimeout(function(){
            $('body').removeClass('gameOver');
        },200);
        $('h1').text('Game Over , Press any key to restart');
    }
}