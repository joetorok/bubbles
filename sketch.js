var bubbles = [];

/*var updateAndDisplay = function(bubble) {
  bubble.update();
  bubble.display();
}*/

var setup = function () {
  createCanvas(700, 700);
  // your code goes here
};

var draw = function () {
  background(0);
  // your code goes here
  var index = 0;
  while (index < bubbles.length) {
    bubbles[index].update();
    bubbles[index].display();
    index += 1;
  }
  if (mouseIsPressed) bubbles[bubbles.length] = new Bubble(mouseX, mouseY);




  //bubbles.forEach(updateAndDisplay);
  //if (mouseIsPressed) bubbles.push(new Bubble(mouseX, mouseY));
};
