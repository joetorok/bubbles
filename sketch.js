var rain = [];

var updateAndDisplay = function(rain) {
  rain.update();
  rain.display();
};

var addNumberRain = function (totalRain) {
  for (var i = 0; i < totalRain; ++i) {
    rain[i] = new Rain(random(0, width), random(0, height));
  }
};

setup = function () {
  createCanvas(800, 800);
  addNumberRain(200);

};

draw = function () {
  background(0);
  rain.forEach(updateAndDisplay);

};


/* -- using while loop

  while (bubbles.length < totalBubbles) P
    bubbles.push(new Bubble(random(0, width), random (0,height)));


/* -- using forEach

  bubbles.forEach(updateAndDisplay);
  if (mouseIsPressed) bubbles.push(new Bubble(mouseX, mouseY));
*/
