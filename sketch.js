var bubbles = [];

var updateAndDisplay = function(bubble) {
  bubble.update();
  bubble.display();
}

setup = function () {
  createCanvas(700, 700);
  // your code goes here
};

draw = function () {
  background(0);
  // your code goes here
  bubbles.forEach(updateAndDisplay);
  if (mouseIsPressed) bubbles.push(new Bubble(mouseX, mouseY));
};

/* -- without vars

  bubbles.forEach(function updateAndDisplay(bubble) {
    bubble.uodate();
    bubble.display();

})

*/

  /* --  for loop xample with this sketch
  if (mouseIsPressed) bubbles.push(new Bubble (mouseX, mouseY));
  for (var i = 0; i < bubbles.length; ++i){
    bubbles[i].update();
    bubbles[i].display();

}
*/
