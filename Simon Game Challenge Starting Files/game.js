
let buttonColours=["red","blue","green", "yellow"];
let level=0;

let gamePattern=[];
let userClickedPattern=[];

keytyped=false;

$(document).on("keydown",(e)=>{
  if(!keytyped){
    keytyped=true;

  nextSequence();
   
  }
});

function nextSequence(){
  userClickedPattern=[];
  level=level+1;
  $("h1").html(`level ${level}`);
  let randomNumber = Math.floor(Math.random()*4);
  let randomChosenColours= buttonColours[randomNumber];
  gamePattern.push(randomChosenColours);
  $("#" + randomChosenColours).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
  animatePress(randomChosenColours);
  addingAudio(randomChosenColours);
 
}


// adding sound effects

function addingAudio(name){
  var audio= new Audio("sounds/" + name + ".mp3");
  audio.play();
}







$(".btn").on("click",(eventt)=>{
   let userChosenColour = eventt.target.id;
   userClickedPattern.push(userChosenColour);
   addingAudio(userChosenColour);
   animatePress(userChosenColour);
   checkAnswer(userClickedPattern.length-1);


});


function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(() => {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function startagain(){
  level = 0;
  gamePattern=[];
  userClickedPattern=[];
  keytyped=false;
}


function checkAnswer(currentLevel) { 

if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){

  if(userClickedPattern.length===gamePattern.length){
    setTimeout(() => {

      nextSequence();
      
     }, 1000);
  }

}

else{

 addingAudio("wrong");
 $("body").addClass("game-over");
 setTimeout(() => {
  $("body").removeClass("game-over");
 }, 500);
 $("h1").html("Game Over Press any key to restart");

   startagain();
  
}


 }


