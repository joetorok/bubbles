var Rain = function (x, y) {
  this.x = x;
  this.y = y;

};

Rain.prototype = {

  rainWidth: 1,
  rainHeight: 20,
  rainOffset: 8,

  update: function() {
    this.x += random(0, 0);
    this.y += random(1, 4);
    if (this.y > height) this.y = this.rainHeight * -1;

  },

  display: function () {
    strokeWeight(1);
    stroke(5, 199, 25);
    //fill(5, 199, 25);
    //rect(this.x, this.y, this.rainWidth, this.rainHeight);
    line(this.x, this.y, this.x + this.rainWidth, this.y + this.rainHeight);
  }

};
