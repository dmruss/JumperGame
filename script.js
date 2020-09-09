var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

var checkDead = setInterval(function() {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
  if (obstacleLeft<50 && obstacleLeft>20 && characterTop>=130){
    obstacle.style.animation = "none";
    alert("Game Over. score : " + Math.floor(counter/100));
    counter = 0;
    //block.style.animation = "block 1s infinite linear";
  }else {
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
  }
}, 10);
