var bubbles = [];

var updateAndDisplay = function(bubble) {
  bubble.update();
  bubble.display();
}

var setup = function () {
  createCanvas(700, 700);
  // your code goes here
};

var draw = function () {
  background(0);
  // your code goes here
  bubbles.forEach(updateAndDisplay);
  if (mouseIsPressed) bubbles.push(new Bubble(mouseX, mouseY));
};
