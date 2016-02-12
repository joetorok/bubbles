var bubbles = [];

var updateAndDisplay = function(bubble) {
  bubble.update();
  bubble.display();
};

var addNumberBubbles = function (totalBubbles) {
  for (var i = 0; i < totalBubbles; ++i) {
    bubbles[i] = new Bubble(random(0, width), random(0, height));
  }
};

setup = function () {
  createCanvas(600, 600);
  // your code goes here
  addNumberBubbles(500);
};

draw = function () {
  background(0);

  bubbles.forEach(updateAndDisplay);
};
  // your code goes here


    //bubbles[index].update();
    //bubbles[index].draw();


/* -- using while loop
  while (bubbles.length < totalBubbles) P
    bubbles.push(new Bubble(random(0, width), random (0,height)));


/*
  bubbles.forEach(updateAndDisplay);
  if (mouseIsPressed) bubbles.push(new Bubble(mouseX, mouseY));
*/
