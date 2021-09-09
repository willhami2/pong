var game = document.getElementById("game");
var cheese = document.getElementById("cheese");
var counterElement = document.getElementById("counter");
var width = 600;
var height = 400;
game.style.width = width + "px";
game.style.height = height + "px";
var cheeseWidth = parseInt(window.getComputedStyle(cheese).getPropertyValue("width"));
var cheeseHeight = parseInt(window.getComputedStyle(cheese).getPropertyValue("height"));
var xScale = width/cheeseWidth;
var yScale = height/cheeseHeight;
var horizontalDirection = 0;
var vertDirection = 0;
var cheeseX;
var cheeseY;
var bar = document.getElementById("bar");
var barTop = parseInt(window.getComputedStyle(bar).getPropertyValue("top"));
var barHeight = parseInt(window.getComputedStyle(bar).getPropertyValue("height"));
var both = 0;
var counter = 0;

function engine() {
  cheeseMoveHorizontal();
  cheeseMoveVert();
}

document.addEventListener("keydown", event => {
        if(event.key==="ArrowDown"){
          var barTop = parseInt(window.getComputedStyle(bar).getPropertyValue("top"));
          if (barTop < height - barHeight - cheeseHeight) {
            bar.style.top = barTop +20 + "px";
          }

      }
        if(event.key==="ArrowUp"){
          var barTop = parseInt(window.getComputedStyle(bar).getPropertyValue("top"));
          if (barTop > -cheeseHeight) {
            bar.style.top = barTop -20 + "px";
}
        }
});

function cheeseMoveHorizontal() {
  var cheeseX = parseInt(window.getComputedStyle(cheese).getPropertyValue("left"));
  if (cheeseX === 0) {
    horizontalDirection = 1;
    counter++;
    var inlineText = "counter = " + counter;
    counterElement.innerHTML = inlineText;
    cheeseY = parseInt(window.getComputedStyle(cheese).getPropertyValue("top"));
    barTop = parseInt(window.getComputedStyle(bar).getPropertyValue("top"));
      if (cheeseY < barTop || (cheeseY+cheeseHeight) > (barTop +barHeight)){
        counter = 0;
        var inlineText = "counter = " + counter;
        counterElement.innerHTML = inlineText;
      }
  }
  if (cheeseX === width - 20) {
    horizontalDirection = 0;
  }
  if (horizontalDirection === 0) {
  cheeseX -= 1;
}
if (horizontalDirection === 1) {
cheeseX += 1;
}
  cheese.style.left = cheeseX + "px";
}

function cheeseMoveVert() {
  var cheeseY = parseInt(window.getComputedStyle(cheese).getPropertyValue("top"));
  if (cheeseY === 0) {
    vertDirection = 1;
  }
  if (cheeseY === height - 20) {
    vertDirection = 0;
  }
  if (vertDirection === 0) {
  cheeseY -= 1;
}
if (vertDirection === 1) {
cheeseY += 1;
}
  cheese.style.top = cheeseY + "px";
}


//engine
setInterval(engine,5);
