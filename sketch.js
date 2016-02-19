
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
  addNumberBubbles(500);

};

draw = function () {
  background(0);
  bubbles.forEach(updateAndDisplay);
};














/* Notes for comparison


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
  addNumberBubbles(500);
};

draw = function () {
  background(0);
  bubbles.forEach(updateAndDisplay);

*/
